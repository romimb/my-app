import React from "react";

class FatDog extends React.Component {

    constructor() {
        super();
        this.state = {font: 20};
    }

    spust = () => {
        this.setState(f => (f.font === 20 ? {font: 40} : {font : 20}))
    }

    render() {
        return (
            <>
            <h3 style={{color: this.props.color, fontSize: this.state.font + 'px'}}>Fat Dog</h3>
            <button onClick={this.spust}>GO</button>
            </>
        );
    }
    
}

export default FatDog;