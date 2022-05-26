import './App.scss';
import Antras from './Components/006/Antras';
import Kvadratas from './Components/006/Kvadratas';
import Raide from './Components/006/Raide';
import Vienas from './Components/006/Vienas';

const labas = [
    'L',
    'a',
    'b',
    'a',
    's',
    ',',
    ' ',
    'v',
    'a',
    'i',
    'k',
    'a',
    'i',
    '!'
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Labas</h1>
        <Vienas skaicius={1} spalva="black" klase="small"></Vienas>
        <Antras skaicius={5} spalva="pink" klase="big"></Antras>
        <Kvadratas spalva2="pink" spalva1="gray" show="apelsinas"></Kvadratas> */}
        <div className="letters">
        {
            labas.map((l, i) => <Raide key={i} l={l} i={i}></Raide>)
        }
        </div>
      </header>
    </div>
  );
}

export default App;
