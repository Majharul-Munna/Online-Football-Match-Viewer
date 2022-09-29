import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGamepad, faSprout } from '@fortawesome/free-solid-svg-icons'
import Game from './components/Game/Game';
import Question from './components/Qiestions/Question';

function App() {
  return (
    <div className="App">
      <h1>Match Viewer</h1>
      <Game></Game>
      <Question></Question>
    </div>
  );
}

export default App;
