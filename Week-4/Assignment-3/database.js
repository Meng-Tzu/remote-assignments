import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MySQL_HOST,
    user: process.env.MySQL_USER,
    password: process.env.MySQL_PASSWORD,
    database: process.env.MySQL_DATABASE,
  })
  .promise();

export async function getEmails() {
  const [array] = await pool.query("SELECT email FROM user");
  const emails = [];
  for (let i = 0; i < array.length; i++) {
    emails.push(array[i].email);
  }
  return emails;
}

export async function getPassword(email) {
  const [result] = await pool.query(
    `
    SELECT password 
    FROM user
    WHERE email = ?
    `,
    [email]
  );
  return result[0].password;
}

export async function createData(email, password) {
  const [data] = await pool.query(
    `
    INSERT INTO user (email, password)
    VALUES (?, ?);
    `,
    [email, password]
  );
  // const id = data.insertId;
  // return getData(id);
}
