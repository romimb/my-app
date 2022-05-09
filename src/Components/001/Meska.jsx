import rand from "../../Function/rand";

function Meska() {
    return <h2 style={
        {
            color: rand(0,1) ? 'red' : 'blue'
        }
    }>Ir atėjo meška <br /> Šiaurinė meška <br />Balta kaip sniegas</h2>;
    
}

export default Meska;