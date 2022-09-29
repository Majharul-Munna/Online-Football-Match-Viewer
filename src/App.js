import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import Game from './components/Game/Game';
import Question from './components/Qiestions/Question';

function App() {
  return (
    <div className="App">
      <h1> <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon> Match Viewer</h1>
      <Game></Game>
      <Question></Question>
    </div>
  );
}

export default App;
