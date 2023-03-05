import Notifications from "./components/Notifications";
import NotificationHeader from './components/NotificationHeader'
import './App.scss'




function App() {

  return (
    <div className="App">
    <NotificationHeader/>
      <Notifications />
    </div>
  );
}

export default App;
