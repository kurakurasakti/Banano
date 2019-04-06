const express = require('express');
const bodyParser = require('body-parser');
const routers = express.Router();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());


const port = 3005;

const { productRouter } = require('./routes');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/product', productRouter);


app.listen(port , ()=> console.log('activated ' + port));
