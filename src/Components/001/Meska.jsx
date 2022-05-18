import rand from '../../Functions/rand';

function Meska() {
    return <h3 style={
        {
            color: rand(0, 1) ? 'red' : 'blue'
        }
    }>Aš meška, o kas tu?</h3>
}

export default Meska;