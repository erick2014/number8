import { Sequelize } from "sequelize";
import '../dotenv.js';
let sequelize = null

const getInstance = ()=>{
  try {
    const { ENVIRONMENT } = process.env
  
    if (sequelize){
      console.log("returning instance already found...")
      return sequelize
    }
    console.log('initializing a new connection instance')
    sequelize = new Sequelize({
      "username": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_NAME,
      "host": "localhost",
      "dialect": "mariadb"
    });
    return sequelize
  } catch (error) {
    console.log("error connecting there..")
    throw error
  }
}

const checkConnection = async() => {
  await sequelize.authenticate()
  console.log("successfully connected to the database")
}

export {
  getInstance,
  checkConnection,
}