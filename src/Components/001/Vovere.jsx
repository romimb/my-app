import rand from '../../Functions/rand';

function Vovere() {

    return (
        <>
            <div>
                <div className="vovere">Voverė Nr.: { 7 * 8 }</div>
                <b>Stora Voverė</b>
            </div>
            <h3>Voverių medis Nr.: {rand(100, 999)} </h3>
        </>
    );

}

export default Vovere;