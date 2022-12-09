import React from 'react';
import troll from './troll.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                    <img className="troll" src={troll} alt="Troll face"/>
                    <p className="meme_generator">Meme Generator</p>
                </div>
                <p className="project">React Course - Project 3</p>
            </div>
        )
    }
}