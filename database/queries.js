const mysql = require("mysql");

const connection = mysql.createConnection(
  {
  host: "us-cdbr-east-02.cleardb.com",
  user: "bf4a3c086ce5b6",
  password: "f9b748a8",
  database: "heroku_e52e938b158fede"
  }
);

connection.connect();

function handleDisconnect() {
  
  connection.connect((err) => {
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart
    } else {                                      
      throw err;
    }
  });
}

handleDisconnect();

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
