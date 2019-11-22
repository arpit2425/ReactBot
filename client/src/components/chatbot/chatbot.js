import React,{Component} from 'react';
import axios from 'axios/index';
class chatbot extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            messages:[],
        };
    }
    async df_text_query(text)
    {
        let says={
            speaks:"me",
            msg:{
                text:{
                    text:text
                }

            }
        };
        this.setState({messages:[...this.messages.state,says]});
        const res=await axios.post('/api/df_text_query',{text});
        for(let msg of res.data.fulfillmentMessages)
        {
            says={
                speaks:'bot',
                msg:msg
            }
            this.setState({messages:[...this.messages.state,says]});
        }
    }
    async df_event_query(event)
    {
        const res=await axios.post('/api/df_event_query',{event});
        for(let msg of res.data.fulfillmentMessages)
        {
           let says={
                speaks:'bot',
                msg:msg
            }
            this.setState({messages:[...this.messages.state,says]});
        }

    }

    render()
    {
    return(
        <div style={{height:400,width:400,float:"right"  }}>
            <div id="chatbot" style={{width:"100%",height:"100%",overflow:"auto"}}>
                <h2>Chatbot</h2>
                <input type="text"/>
            </div>
        </div>
    )
}
}
export default chatbot;