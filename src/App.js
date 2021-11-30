import './App.css';
import TodoForm from './components/addtodo';
import TodoList from './components/todolist';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Getitems from './components/getitmes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Switch>
               <Route exact path='/' component={TodoForm} />
               <Route exact path='/showall' component={TodoList} />
               <Route exact path='/get' component={Getitems} />
               
          </Switch>
      </Router>
        </header>
    </div>
  );
}

export default App;
