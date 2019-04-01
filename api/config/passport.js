const jwtSecreat = require('./jwtConfig');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

const BCRYPT_SALT_ROUNDS = 12;
// eslint-disable-next-line prefer-destructuring
const Op = Sequelize.Op;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../sequelize');

passport.use(
  'register',
    new LocalStrategy(
    {
      emailField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: false,
    },
    (req, email, password, done) => {
      console.log(email);
      console.log(req.body.email);

      try {
        User.findOne({
          where: {
            [Op.or]: [
              {
                email,
              },
              { email: req.body.email },
            ],
          },
        }).then((user) => {
          if (user != null) {
            console.log('email or username already taken');
            return done(null, false, {
              message: 'email already taken',
            });
          }
          bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then((hashedPassword) => {
            User.create({
              email,
              password: hashedPassword,
              email: req.body.email,
            }).then((user) => {
              console.log('user created');
              return done(null, user);
            });
          });
        });
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  'login',
  new LocalStrategy(
    {
      emailField: 'email',
      passwordField: 'password',
      session: false,
    },
    (email, password, done) => {
      try {
        User.findOne({
          where: {
            email,
          },
        }).then((user) => {
          if (user === null) {
            return done(null, false, { message: 'bad email' });
          }
          bcrypt.compare(password, user.password).then((response) => {
            if (response !== true) {
              console.log('passwords do not match');
              return done(null, false, { message: 'passwords do not match' });
            }
            console.log('user found & authenticated');
            return done(null, user);
          });
        });
      } catch (err) {
        done(err);
      }
    },
  ),
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret.secret,
};

passport.use(
    'jwt',
    new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      User.findOne({
        where: {
          id: jwt_payload.id,
        },
      }).then((user) => {
        if (user) {
          console.log('user found in db in passport');
          done(null, user);
        } else {
          console.log('user not found in db');
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  }),
);