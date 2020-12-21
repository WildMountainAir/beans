const express = require('express');
const app = express();
const PORT = 3008;
// const PORT = process.env.PORT || 3008;
const queries = require('../database/queries');

app.use(express.static('../client/dist'));
app.use(express.json());

app.get("/beans", (req,res) => {
  queries.allBeans((error, data) => {
    error ? res.status(404).send(error) : res.status(202).send(data);
  });
});

app.get("/beans/Acceptance", (req,res) => {
  queries.acceptanceBeansQ((error, data) => {
    // getting expected results
    error ? res.status(404).send(error) : res.status(202).send(data);
  });
});

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log(`🛥  Server is running and listening on port ${PORT} 🛥`)
});
