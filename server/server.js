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

app.get("/beans/Growth", (req,res) => {
  queries.growthBeansQ((err, results) => {
    if (err) {
      throw err
    }
    res.status(202).send(results)
  });
});

app.get("/beans/Acceptance", (req, res) => {
  queries.acceptanceBeansQ((err, results) => {
    if (err) {
      throw err
    }
    res.status(202).send(results)
  })
});

app.get("/beans/Confidence", (req,res) => {
  queries.confidenceBeansQ((err, results) => {
    if (err) {
      throw err
    }
    res.status(202).send(results)
  });
});
app.get("/beans/Self-Love", (req,res) => {
  queries.selfLoveBeansQ((err, results) => {
    if (err) {
      throw err
    }
    res.status(202).send(results)
  });
});
// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log(`🛥  Server is running and listening on port ${PORT} 🛥`)
});
