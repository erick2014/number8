import './dotenv.js'
import express from "express";
import router from './src/routes/shop.js'
import {checkConnection} from './dbs/setup.js'

const PORT = 4000;
const app = express();

app.use(express.json());
// setup main router
app.use(router)

// check connection status 
app.use(async (req, _, next) => {
  try {
    await checkConnection();
    next()
  } catch (error) {
    console.error(error)
    next(error);
  }
});

// error handler 
app.use( (err,req,res,next) =>{
  console.log("error middleware...",err)
  res.status(500).json({ error: 'Internal Server Error' });
  next()
})

// starts server
app.listen(PORT, () => {
  console.log(`Servidor started at port ${PORT}`);
});



