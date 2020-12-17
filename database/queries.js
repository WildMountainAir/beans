const mysql = require("mysql");
// const credentialsObj = require('./hidden.js');
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "LoveBud",
//   database: "beansdb"
// });
const connection = mysql.createConnection({host: "us-cdbr-east-02.cleardb.com",
user: "bf4a3c086ce5b6",
password: "f9b748a8",
database: "heroku_e52e938b158fede"});

connection.connect();

/*😈😈😈😈😈😈😈😈😈😈😈😈😈
  😈  Get All Beans   😈
  😈😈😈😈😈😈😈😈😈😈😈😈😈*/
const allBeans = (callback) => {
  var sql = "SELECT category, bean FROM beans";
  connection.query(sql, (error, results) => {
    if(error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  })
}
/*😈😈😈😈😈😈😈😈😈😈😈😈😈
  😈Get Category Beans😈
  😈😈😈😈😈😈😈😈😈😈😈😈😈*/
const categoryBeans = (category, callback) => {
  var sql = `SELECT bean FROM beans WHERE beans.category=${category}`;
  connection.query(sql, (error, results) => {
    if(error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  })
}
/*😈😈😈😈😈😈😈😈😈😈😈😈😈
  😈Get Favorite Beans😈
  😈😈😈😈😈😈😈😈😈😈😈😈😈*/
const favoriteBeans = (callback) => {
  var sql = 'SELECT bean FROM beans WHERE beans.favorite="true"';
  connection.query(sql, (error, results) => {
    if(error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  })
}

module.exports = {
  allBeans,
  categoryBeans,
  favoriteBeans,
};
