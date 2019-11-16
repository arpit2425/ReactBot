const dialogflow=require('dialogflow');
const config=require('../config/keys');
const struct=require('./structjson');
const uuid = require('uuid');
const projectID=config.googleProjectID;
const credentials = {
  client_email: config.googleClientEmail,
  private_key:
    config.googlePrivateKey,
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
  credentials,
});

const sessionId = uuid.v4();
const sessionPath=sessionClient.sessionPath(config.googleProjectID,sessionId)
module.exports={
    textQuery:async function(text,parameters={}){
        let self=module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
              text: {
                // The query to send to the dialogflow agent
                text:text,
                // The language used by the client (en-US)
                languageCode: config.dialogFlowSessionLanguageCode,
              },
            },
            queryParams:{
                payload:{
                    data:parameters
                }
            }
          };
          let responses = await sessionClient.detectIntent(request);
          responses=await self.handleAction(responses);
          return responses;
    },
    eventQuery:async function(event,parameters={}){
        let self=module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
              event: {
                // The query to send to the dialogflow agent
                name:event,
                parameters:struct.jsonToStructProto(parameters),
                // The language used by the client (en-US)
                languageCode: config.dialogFlowSessionLanguageCode,
              },
            },
        };
          let responses = await sessionClient.detectIntent(request);
          responses=await self.handleAction(responses);
          return responses;
    },
    handleAction:function(responses)
    {
        return responses;
    }
}