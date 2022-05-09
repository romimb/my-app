import rand from "../../Function/rand";

function Vovere() {
    return (
    <div>
        <div className="vovere">Vovere Nr.: { rand(100, 999) } </div>
        <b>Stora Voverė</b>
    </div>
    );
}

export default Vovere;