import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function Game(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Game on</p>
                    <Link to={'/'} className="btn btn-primary">Return to Main Menu</Link>
                </div>
            </div>
        </div>
    )
}

export default Game;