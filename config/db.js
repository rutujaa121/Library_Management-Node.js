

import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",   
  database: "final_year_project" 
});

export default conn;
