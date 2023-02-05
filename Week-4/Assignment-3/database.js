// 匯入模組
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// 資料庫的資訊
const pool = mysql
  .createPool({
    host: process.env.MySQL_HOST,
    user: process.env.MySQL_USER,
    password: process.env.MySQL_PASSWORD,
    database: process.env.MySQL_DATABASE,
  })
  .promise();

// Function1: 選取table裡的所有email
export async function getEmails() {
  const [array] = await pool.query("SELECT email FROM user");
  const emails = [];
  for (let i = 0; i < array.length; i++) {
    emails.push(array[i].email);
  }
  return emails;
}

// Function2: 取得特定email的密碼
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

// Function3: 匯入新的帳號密碼到table
export async function createData(email, password) {
  const [data] = await pool.query(
    `
    INSERT INTO user (email, password)
    VALUES (?, ?);
    `,
    [email, password]
  );
}
