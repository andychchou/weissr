import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './HomeComponent';
import Game from './GameComponent';

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = {

}

class Main extends Component {
    //lifesycle method
    componentDidMount() {

    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    // pass down props here
                />
            );
        }
        const GamePage = () => {
            return (
                <Game
                    // content here
                />
            );
        }

        return (
            <div>
                <p>Main loaded</p>
                <Switch>
                    <Route exact path='/'>{HomePage}</Route>
                    <Route exact path='/game'>{GamePage}</Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));