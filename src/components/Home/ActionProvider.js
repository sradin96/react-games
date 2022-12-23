class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   )
   {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   errorMessageHandle = () => {
    const message = this.createChatBotMessage('I dont know what to do')
    this.setChatbotMessage(message)
   }

   gamesMessageHandle = () => {
        const message = this.createChatBotMessage('We have lots of games here')
        this.setChatbotMessage(message)
   }

   favouritesMessageHandle = () => {
    const message = this.createChatBotMessage('Explore your favourite games')
    this.setChatbotMessage(message)
}

   setChatbotMessage = (message) => {
    this.setState(state => ({ ...state, messages: [...state.messages, message]}))
}
 }

 export default ActionProvider;