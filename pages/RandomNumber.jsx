import React from 'react';

class RandomNumber extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { random: 0 };
    }

    handleClick() {
        var max = 100;
        const rand = Math.floor(Math.random() * max) + 1 ;
        this.setState({ random: rand });
    }

    render() {
        const styles = {
            RandomNumber: {
                textAlign: "center",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
                height: "50vh",
                minHeight: "50vh",
            }
        }
        return (
            <div style={styles.RandomNumber}>
                <h1>Random number in 1-100</h1>
                <h3>Please Press the button.</h3>
                <button onClick={this.handleClick.bind(this)}>GO</button>
                <div>The random number is: {this.state.random}</div>
            </div>
        );
    }

}

export default RandomNumber;
