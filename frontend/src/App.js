import './App.css';
import Main from './components/Main';
import SideNav from './components/SideNav';


function App() {
  return (
    <div>
      <div className="SideNav">
        <SideNav />
      </div>
        <Main />
    </div>
  );
}

export default App;
