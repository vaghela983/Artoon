import './App.css';
import {Router} from '@reach/router'
import ListData from './Page/ViewData';
import Header from './Component/AppBar';

function App() {
  return (
    <div>
    <Header/>
   <Router>
   <ListData path="/list"/>
 
   </Router>
   </div>
  );
}

export default App;
