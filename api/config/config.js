require('dotenv').config();

const config ={}

CONFIG.app          = process.env.APP           || 'dev';
CONFIG.port         = process.env.PORT          || '3000';
CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || '127.0.0.1';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'bananos_db';
CONFIG.db_user      = process.env.DB_USER       || 'root';
CONFIG.db_password  = process.env.DB_PASSWORD   || '';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'bananoJWTsecret-Key';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;