class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }

    parse(message) {
        const lowercase = message.toLowerCase();

        if(lowercase.includes('games')) {
            this.actionProvider.gamesMessageHandle()
        } else if (lowercase.includes('favourites')) {
            this.actionProvider.favouritesMessageHandle()
        } else {
            this.actionProvider.errorMessageHandle()
        }
    }
  }

export default MessageParser;