function Hello({red, africa, makeGreen}) {

    return (
        <div>
        <h3 style={{color:red}}>Hello {africa}</h3>
        <button className="a" onClick={makeGreen}>GREEN</button>
        </div>
    );
}

export default Hello;