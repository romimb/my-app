import randColor from "../../Functions/randColor";

function Kates() {

    return (
        <ul className="katinai" style={{color: randColor() }}>
            <li>Murka</li>
            <li>Pilkis</li>
            <li>Pacukas</li>
        </ul>
    )
}

export default Kates;