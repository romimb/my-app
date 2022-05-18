import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';

function App() {

    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const [color, setColor] = useState('blue');
    const [one, setOne] = useState(1);
    const [sq, setSq] = useState([]);

    const makeShow = what => {
        what ? setShow(s => !s) : setShow1(s => !s);
    }

    const doMath = number => setOne(o => o + number);


    const changeColor = color => setColor(color);

    const addSquare = () => {
        // setSq(s => [...s, (s[s.length - 1] ?? 0) + 1]);
        setSq(s => [...s, randColor()]);
    }


    return (
        <div className="App">
            <header className="App-header">
                <div className="sqc">
                    {
                        sq.map((s, i) => (
                        <div className="sq red" key={i} style={{background: s}}></div>)
                        )
                    }
                </div>
                <div className="sqc">
                    {
                        show ? <div className="sq" style={{ background: color }}>1</div> : null
                    }
                    {
                        show1 ? <div className="sq" style={{ background: color }}>2</div> : null
                    }
                </div>
                <h1>HOOK {one}</h1>
                <div className="sqc">
                    <button onClick={() => makeShow(1)}>Show/Hide 1</button>
                    <button onClick={() => makeShow(0)}>Show/Hide 2</button>
                    <button onClick={() => changeColor('red')}>Make Red</button>
                    <button onClick={() => changeColor('yellow')}>Make Yellow</button>
                    <button onClick={() => changeColor('pink')}>Make Pink</button>
                    <button onClick={() => doMath(1)}>Add One</button>
                    <button onClick={() => doMath(-1)}>Remove One</button>
                    <button onClick={addSquare}>Add Square</button>
                </div>
            </header>
        </div>
    );
}

export default App;
