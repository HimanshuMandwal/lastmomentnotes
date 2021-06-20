import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router';
import BranchPage from './pages/branchpage/branchpage.component';
import NotesFinder from './components/notes-finder/notes-finder.component';
import WhyUsScreen from './components/screens/WhyUsScreen';
import AboutUsScreen from './components/screens/AboutUsScreen';
import Signup from './components/screens/Signup';
import Login from './components/screens/Login';

function App() {
  return (
    <div className="main">
      <Header/>
      <Switch>
        <Route path='/branch/:branchId' exact component={BranchPage}/>
        <Route path='/branch/:branchId/sem/:semId' exact component={NotesFinder}/>
        <Route exact path='/' component={Homepage}/>
          <Route exact path="/signUp" component={Signup}/>
          <Route exact path="/logIn" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
