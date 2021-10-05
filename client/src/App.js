import './App.css';
import SuperHeroApp from './components/SuperHero/SuperHeroApp'
import withLoading from './HOC/withLoading';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <SuperHeroApp />
        </Route>
      </Switch>
    </div>
  );
}

export default withLoading(App);
