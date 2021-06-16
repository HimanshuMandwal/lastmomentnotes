import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router';
import BranchPage from './pages/branchpage/branchpage.component';
import NotesFinder from './components/notes-finder/notes-finder.component';

function App() {
  return (
    <div className="main">
      <Header/>
      <Switch>
        <Route path='/branch/:branchId' exact component={BranchPage}/>
        <Route path='/branch/:branchId/sem/:semId' exact component={NotesFinder}/>
        <Route path='/' component={Homepage}/>
      </Switch>

    </div>

  );
}

export default App;
