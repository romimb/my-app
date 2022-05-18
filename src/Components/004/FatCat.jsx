import React from "react";

class FatCat extends React.Component {

    constructor() {
        super();
        this.state = {
            weight: 5,
            color: 'blue'
        }; //pradinis tiesiai
        // this.paspaudimas = this.paspaudimas.bind(this); old school
    }

    paspaudimas = () => {
        console.log('Ivyko butono paspaudimo procesas');
        // console.log(this);
        this.setState(s => ({weight: s.weight + 1})); // keitimas tik per setState
    }

    makeRed = () => {
        this.setState({color: 'red'});
    }

    render() {
        return (
            <>
            <h2 style={{color: this.state.color}}>Fat Cat {this.props.color} {this.state.weight}kg</h2>
            <button onClick={this.paspaudimas}>Click Cat</button>
            <button onClick={this.makeRed}>Click RED Cat</button>
            </>
        );
    }
    
}

export default FatCat;