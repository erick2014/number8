import './dotenv.js'
import express from "express";
import router from './src/routes/index.js'

const PORT = 4000;
const app = express();

app.use(express.json());

// setup main router
app.use(router)

// error handler 
app.use( (err,req,res,next) =>{
  if(err?.original){
    console.log('error middleware ',err.original)
  }else{
    console.log('error middleware ',err)
  }
  res.status(500).json({ error: 'Internal Server Error' });
  next()
})

// starts server
app.listen(PORT, () => {
  console.log(`Servidor started at port ${PORT}`);
});



