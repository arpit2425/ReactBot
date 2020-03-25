const chatbot = require("../chatbot/chatbot");
var express = require("express");
// var bodyParser = require('body-parser')

var app = express();

// create application/json parser
app.use(express.json());

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ Hi: "there" });
  });

  app.post("/api/df_text_query", async (req, res) => {
    let responses = await chatbot.textQuery(
      req.body.text,
      req.body.userID,
      req.body.parameters
    );

    res.send(responses[0].queryResult);
  });

  app.post("/api/df_event_query", async (req, res) => {
    let responses = await chatbot.eventQuery(
      req.body.event,
      req.body.userID,
      req.body.parameters
    );

    res.send(responses[0].queryResult);
  });
};
