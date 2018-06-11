import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Cartoons from './cartoons.json';

const cartoons = shuffle(Cartoons);

class App extends Component {
    state = {
        cartoons,
        score: 0,
        topScore: 0,
        clicked: [],
        message: 'Click an image to begin!',
        gameState: 0,
        banner: 'Clicky Game!'
    };

    clickHandler = (event) => {
        let message;
        let gameState;
        let topScore = this.state.topScore;
        const test = this.state.clicked.indexOf(event.target.id);
        let cartoons = shuffle(this.state.cartoons);
        let score = this.state.score;
        if (test === -1) {
            score++;
            message = 'You guessed correctly!';
            gameState = 1;
        } else {
            message = 'You guessed incorrectly!';
            gameState = 2;
            this.loser();
        }
        if (score > topScore) {
            topScore = score;
        }
        if (score === cartoons.length) {
            gameState = 3;
            this.winner();
        }

        const clicked = [...this.state.clicked, event.target.id];
        this.setState({
            clicked: clicked,
            score: score,
            cartoons: cartoons,
            message: message,
            gameState: gameState,
            topScore: topScore
        });
    }

    loser = () => {
        this.setState({
            banner: 'Game Over'
        });
        setTimeout(() => {
            this.newGame();
        }, 3000);
    }

    winner = () => {
        this.setState({
            banner: 'Congratulations! You Won!!!'
        });
        setTimeout(() => {
            this.newGame();
        }, 3000);
    }

    newGame = () => {
        console.log('new game ran', this.state.cartoons);
        const cartoons = shuffle(this.state.cartoons);
        this.setState({
            cartoons: cartoons,
            score: 0,
            clicked: [],
            message: 'Click an image to begin!',
            gameState: 0,
            banner: 'Clicky Game!'
        });
    }

    shuffle = () => {
        const cartoons = shuffle(this.state.cartoons);
        this.setState({
            cartoons: cartoons
        });
    }

    render() {
        let winStyle;
        let myStyle;
        let wrong = 'container mt-5';
        switch (this.state.gameState) {
            case 0:
                myStyle = '';
                break;
            case 1:
                myStyle = { myStyle: 'text-success' };
                break;
            case 2:
                myStyle = { myStyle: 'text-danger' };
                winStyle = 'text-danger';
                wrong = 'wrong container mt-5';
                break;
            case 3:
                myStyle = { myStyle: 'text-sucess' };
                winStyle = 'text-primary';
                break;
            default:
                myStyle = '';
        }

        const images = this.state.cartoons.map((el, index) => {
            return (
                <img src={el.image} alt={el.name} id={el.id} key={el.id} className="click-item" onClick={this.clickHandler} />
            );
        });

        const images1 = [];
        const images2 = [];
        const images3 = [];
        const images4 = [];

        for (let i = 0; i < 16; i++) {
            if (i < 4) {
                images1.push(images[i]);
            }
            if (i >= 4 && i < 8) {
                images2.push(images[i]);
            }
            if (i >= 8 && i < 12) {
                images3.push(images[i]);
            }
            if (i >= 12 && i < 16) {
                images4.push(images[i]);
            }
        }

        return (
            <div className="container-fluid">
                <Header score={this.state.score} style={myStyle} message={this.state.message} topScore={this.state.topScore} newGame={this.newGame} />
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1 className={winStyle}>{this.state.banner}</h1>
                    <h4>Click on an image to earn points, but don't click on any image more than once!</h4>
                </div>
                <main className={wrong}>
                    <div className="row">
                        <div className="col-sm-3">{images1}</div>
                        <div className="col-sm-3">{images2}</div>
                        <div className="col-sm-3">{images3}</div>
                        <div className="col-sm-3">{images4}</div>
                    </div>
                </main>
            </div>
        );
    }
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

export default App;

