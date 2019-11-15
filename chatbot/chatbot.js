const dialogflow=require('dialogflow');
const config=require('../config/keys');
const uuid = require('uuid');
const sessionClient=new dialogflow.SessionsClient({
  keyFilename:"C:/Users/Arpit/Downloads/reactappagent-cactkb-3903e1a48a93.json"}
);
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
    handleAction:function(responses)
    {
        return responses;
    }
}