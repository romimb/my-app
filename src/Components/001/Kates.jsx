import randColor from "../../Function/randColor";

function Kates() {
    return (
    <ul style={{
        color: randColor()
    }} className="kates">
        <li>Murka</li>
        <li>Kaukė</li>
        <li>Miknė</li>
    </ul>
    );
}

export default Kates;