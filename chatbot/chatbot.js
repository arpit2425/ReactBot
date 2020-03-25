const dialogflow = require("dialogflow");
const config = require("../config/keys");
const struct = require("./structjson");
const uuid = require("uuid");
const projectID = config.googleProjectID;
// const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;
const credentials = {
  client_email: config.googleClientEmail,
  private_key: config.googlePrivateKey
};
// const credentials={
// client_email:config.googleClientEmail,
// privateKey:config.googlePrivateKey,
// };
// const sessionClient = new dialogflow.SessionsClient({

//    keyFilename:"C:/Users/Arpit/Downloads/reactappagent-cactkb-3903e1a48a93.json"

//    });
const sessionClient = new dialogflow.SessionsClient({
  projectID,
  credentials
});

const sessionId = uuid.v4();

module.exports = {
  textQuery: async function(text, userID, parameters = {}) {
    let self = module.exports;
    const sessionPath = sessionClient.sessionPath(
      projectID,
      sessionId + userID
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: languageCode
        }
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };

    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },
  eventQuery: async function(event, userID, parameters = {}) {
    let self = module.exports;
    const sessionPath = sessionClient.sessionPath(
      projectID,
      sessionId + userID
    );

    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          // parameters: struct.jsonToStructProto(parameters), //Dialogflow's v2 API uses gRPC. You'll need a jsonToStructProto method to convert your JavaScript object to a proto struct.
          languageCode: languageCode
        }
      }
    };

    let responses = await sessionClient.detectIntent(request);
    responses = self.handleAction(responses);
    return responses;
  },
  handleAction: function(responses) {
    return responses;
  }
};
