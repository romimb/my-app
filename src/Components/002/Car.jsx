import CarPrice from "./CarPrice";
import ColorMark from "./ColorMark";

function Car(props) {

    return (
        <>
        <h2 style={
            {
                fontSize: props.size + 'px',
                fontFamily: props.ff
            }
        }>{props.color} {props.maker} <ColorMark size={props.markSize} color={props.mark}></ColorMark></h2>
        <CarPrice price={props.price}></CarPrice>
        </>
    )
}

export default Car;