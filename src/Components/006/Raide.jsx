import randColor from '../../Functions/randColor';
function Raide({l, i}) {

    return (
        <span style={{color:randColor(), backgroundColor: i%2 ? 'black' : 'white'}}>{l}</span>
    )
}

export default Raide;