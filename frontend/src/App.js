import {Route, Switch} from 'react-router-dom'

import RegisterForm from '../src/components/RegisterForm'
import LoginForm from '../src/components/LoginForm'
import ProtectedRoute from '../src/components/ProtectedRoute'
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';

const App = () => (
  <Switch>
    <Route exact path='/register' component={RegisterForm} />
    <Route exact path='/login' component={LoginForm} />
    <ProtectedRoute exact path='/' component={Dashboard} />
    <ProtectedRoute exact path='/tasks' component={TaskForm} />
  </Switch>
)

export default App;
