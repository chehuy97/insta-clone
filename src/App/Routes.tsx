import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from '../Components/NavigationBar'
import HomePage from '../Pages/Home'
import WallPage from '../Pages/Wall'
import ChatPage from '../Pages/Chat'
import ExplorePage from '../Pages/Explore'

const Routes = () => {
    return (
        <Router>
            <NavigationBar/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/wall" component={WallPage}/>
                <Route path='/chat' component={ChatPage}/>
                <Route path='/explore' component={ExplorePage}/>
            </Switch>
        </Router>
    )
}

export default Routes