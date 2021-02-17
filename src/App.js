import title from './assets/title.png';
import bored from './assets/bored.png';
import happy from './assets/happy.png';
import './css/App.css';
import SoundButton from './SoundButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={title} className="title-img" alt="ZoomOff" />
        <h1>Boring call?</h1>
        <img src={bored} className="man-img" alt="bored" />
        <h3>Escape from them in smart way!</h3>
        <div className="btn-cnt">
          <SoundButton sound="ringtone"></SoundButton>
          <SoundButton sound="bell"></SoundButton>
        </div>
      </header>
    </div>
  );
}
/*<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>*/
export default App;
