import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from '../Components/NavigationBar'
import HomePage from '../Pages/Home'
import WallPage from '../Pages/Wall'
import ChatPage from '../Pages/Chat'
import ExplorePage from '../Pages/Explore'
import StoryPage from '../Pages/Story'
import NavigationRoute from './NavigationRoute'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={NavigationRoute}/>
                <Route path='/stories' component={StoryPage}/>
            </Switch>
        </Router>
    )
}

export default Routes