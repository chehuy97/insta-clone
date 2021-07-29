import { Container } from './styles'
import { RouteProps } from "react-router-dom"

const ChatPage = (props:RouteProps) => {
    console.log(props);
    return(
        <Container>
            <p>Chat</p>
        </Container>
    )
}

export default ChatPage