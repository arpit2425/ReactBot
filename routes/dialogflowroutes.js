const dialogflow=require('dialogflow');
const config=require('../config/keys');
const uuid = require('uuid');
const sessionClient=new dialogflow.SessionsClient({
  keyFilename:"C:/Users/Arpit/Downloads/reactappagent-cactkb-3903e1a48a93.json"}
);
const sessionId = uuid.v4();
const sessionPath=sessionClient.sessionPath(config.googleProjectID,sessionId)
module.exports=app=>{
    app.get('/',(req,res)=>{
        res.send({'Hi':'there'})
        });
        
        app.post('/api/df_text_query',async (req,res)=>{
            const request = {
                session: sessionPath,
                queryInput: {
                  text: {
                    // The query to send to the dialogflow agent
                    text:"I want to learn java",
                    // The language used by the client (en-US)
                    languageCode: config.dialogFlowSessionLanguageCode,
                  },
                },
              };
              const responses = await sessionClient.detectIntent(request);
              

            res.send(responses[0].queryResult.fulfillmentText)
            });
            
        app.post('/api/df_event_query',(req,res)=>{
                res.send({'Hi':'event query'})
                });
        
        
}
// const dialogflow = require('dialogflow');
// const uuid = require('uuid');

// /**
//  * Send a query to the dialogflow agent, and return the query result.
//  * @param {string} projectId The project to be used
//  */
// async function runSample(projectId = 'reactappagent-cactkb') {
//   // A unique identifier for the given session
//   const sessionId = uuid.v4();

//   // Create a new session
//   const sessionClient = new dialogflow.SessionsClient({
    
//     keyFilename:"C:/Users/Arpit/Downloads/reactappagent-cactkb-3903e1a48a93.json"

//   });
//   const sessionPath = sessionClient.sessionPath(projectId, sessionId);

//   // The text query request.
//   const request = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         // The query to send to the dialogflow agent
//         text: 'hi',
//         // The language used by the client (en-US)
//         languageCode: 'en-US',
//       },
//     },
//   };

//   // Send request and log result
//   const responses = await sessionClient.detectIntent(request);
//   console.log('Detected intent');
//   const result = responses[0].queryResult;
//   console.log(`  Query: ${result.queryText}`);
//   console.log(`  Response: ${result.fulfillmentText}`);
//   if (result.intent) {
//     console.log(`  Intent: ${result.intent.displayName}`);
//   } else {
//     console.log(`  No intent matched.`);
//   }
// }
// runSample();