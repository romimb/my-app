import rand from "../../Function/rand";
import Bebras from "./Bebras";
import Meska from "./Meska";

function Miskas() {
    return (
    <>
        { rand(0,1) ? <Meska></Meska> : <Bebras></Bebras> }
    </>
    );
}

export default Miskas;