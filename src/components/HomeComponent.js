import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Hello World</p>
                    <Link to={'/game'} className="btn btn-primary">Play Game</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;