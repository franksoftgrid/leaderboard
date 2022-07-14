import Board from './components/board';
import './components/style.css';
import { Leaderboard } from '../src/components/database';


function App(prop) {
  return (
    <div className="leaderboard">
        <Board name={prop.name}></Board>
    </div>
  );
}

export default App;
