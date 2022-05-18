import { useState } from "react";
import randColor from '../../Functions/randColor';
import ButtonHolder from "./ButtonHolder";
import Small from "./Small";

function BlueSquare({sc}) {

    const [bg, setBg] = useState('blue');
    

    const changeBg = () => {
        setBg(c => c === 'blue' ? 'red' : 'blue');
    }

    const changeRand = () => {
        setBg(randColor());
    }

    const [border, setBorder] = useState(1);

    const changeBorder = () => {
        setBorder(b => b === 10 ? 1 : 10);
    }



    return (
        <div className="kvadratas" style={
            {
                backgroundColor: bg,
                borderRadius: sc ? '50%' : '0',
                borderWidth: border + 'px'
            }
            }>
            <button onClick={changeBg}>Change</button>
            <button onClick={changeRand}>-Rand-</button>
            <ButtonHolder virvute={changeBorder} border={border}></ButtonHolder>
            <Small border={border} side="left" top={-60} sc={sc}></Small>
            <Small border={border} side="right" top={-60} sc={sc}></Small>
            <Small border={border} side="" top={140} sc={sc}></Small>
        </div>
    )
}

export default BlueSquare;