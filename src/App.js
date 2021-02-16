import logo from './assets/bored.svg';
import './css/App.css';
import SoundButton from './SoundButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Boring call?</h1>
        <img src={logo} className="App-logo" alt="logo" />
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
