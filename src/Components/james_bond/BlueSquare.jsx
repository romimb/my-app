import { useState } from "react";
import randColor from '../../Functions/randColor';
import Small from "./Small";

function BlueSquare({sc}) {

    const [bg, setBg] = useState('blue');
    const [border, setBorder] = useState(1);

    const changeBg = () => {
        setBg(c => c === 'blue' ? 'red' : 'blue');
    }

    const changeRand = () => {
        setBg(randColor());
    }

    const changeBorder = () => {
        setBorder(b => b === 10 ? 1 : 10);
    }

    return (
        <div className="kvadratas" style={
            {
                backgroundColor: bg,
                borderWidth: border + 'px',
                borderRadius: sc ? '50%' : '0'
            }
            }>
            <button onClick={changeBg}>Change</button>
            <button onClick={changeRand}>-Rand-</button>
            <button onClick={changeBorder}>Change border</button>
            <Small side="left" top={-60} sc={sc}></Small>
            <Small side="right" top={-60} sc={sc}></Small>
            <Small side="" top={160} sc={sc}></Small>
        </div>
    )
}

export default BlueSquare;