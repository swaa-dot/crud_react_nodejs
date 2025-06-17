import { Sequelize } from "sequelize";


const db = new Sequelize('crud_db', 'root', 'root', {
  host: "db",
  dialect: "mysql",
//   logging: false, // Disable logging for cleaner output
});

export default db;