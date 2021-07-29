import { RouteProps } from "react-router-dom"

const Wall = (props:RouteProps) => {
    console.log(props);
    
    return (
        <div>
            <p>That is Wall</p>
        </div>
    )
}

export default Wall