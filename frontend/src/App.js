import './App.css';
import JobBoard from './components/JobBoard';
import SideNav from './components/SideNav';


function App() {
  return (
    <div>
      <div className="SideNav">
        <SideNav />
      </div>
      <div className="App">
        <div className="content">
          <h3 className="welcomeMessage"> Hi Alec, what jobs are you looking for?</h3>
          <div className="JobBoard">
            <JobBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
