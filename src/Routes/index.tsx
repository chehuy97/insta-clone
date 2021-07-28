import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StoryPage from '../Pages/Story'
import NavigationRoute from './NavigationRoute'
import LoginPage from '../Pages/Login'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={LoginPage}/>
                <Route path='/' component={NavigationRoute}/>
                <Route path='/stories' component={StoryPage}/>
            </Switch>
        </Router>
    )
}

export default Routes