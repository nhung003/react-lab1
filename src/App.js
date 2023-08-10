import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <h3>Live search: React Application</h3>
      <div class="search-wrapper">
          <input type="text" placeholder="Search..."></input>
          <i className="fa fa-search"></i>
      </div>
      <div>
        <h3>Current time</h3>
      <h3>{getTime()}</h3>
      </div>
    </div>
  );
}

function getTime(){
  return (new Date()).toLocaleDateString();
}

export default App;
