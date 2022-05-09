import rand from "../../Function/rand";

function Bebras() {
    return (
    <div>
        <div>{ rand(0,1) ? <i>Bebras</i> : <u>Bebras</u> } </div>
    </div>
    );
}

export default Bebras;