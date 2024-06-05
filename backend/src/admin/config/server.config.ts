import mssql from "mssql";
import dotenv from "dotenv";

dotenv.config();

//Creating an sql configuration for connecting to the database
export const sqlConfigure = {
  user: process.env.DB_USER as string,
  password: process.env.DB_PWD as string,
  database: process.env.DB_NAME as string,
  server: process.env.MY_SERVER as string,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

async function testConnection() {
  
  let pool = await mssql.connect(sqlConfigure);

  if (pool.connected) {
    console.log("Connection Was Successfully Created");
  }
  else {
    console.log("Error Establishing Connection");
  }
  
}

testConnection();