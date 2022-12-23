import { createChatBotMessage } from "react-chatbot-kit";
import { ChatBotIcon } from "../styles/Icons.styled";
import { ChatBotBlock, ChatHeader } from "./Home.styled";

const config = {
    initialMessages: [createChatBotMessage('How can i help?')],
    botName: 'Bot',
    customComponents: {
        header: () => <ChatHeader>Good Game</ChatHeader>,
        botAvatar: (props) => <ChatBotBlock><ChatBotIcon {...props} /></ChatBotBlock>,
    }
}

export default config