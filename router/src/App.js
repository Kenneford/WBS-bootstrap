
import './App.css';
import About from './About';
import Articles from './Articles';
import SignUp from './SignUp';
import Header from './Header';
import {Route, NavLink, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
        <Header />
        <main>
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/sign-up">
                <SignUp />
            </Route>
            <Route path="/articles">
                <Articles />
            </Route>
        </Switch>
        </main>
    </div> 
  );
}

export default App;
