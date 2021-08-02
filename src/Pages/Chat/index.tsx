import { Container } from './styles'
import { useEffect } from 'react'
import {  useLocation, useRouteMatch, RouteProps } from 'react-router-dom'


const ChatPage = (props:RouteProps) => {
    return(
        <Container>
            <p>Chat</p>
        </Container>
    )
}

export default ChatPage