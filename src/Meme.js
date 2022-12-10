import React from 'react';
import meme from './img.png';

export default function Meme() {
    return(
        <div className="meme">
            <form className="inputs">
                <input type="text" className="top_line" placeholder="Shut up"/>
                <input type="text" className="bottom_line" placeholder="and take my money" />
                <button>Get a new meme image 🖼</button>
            </form>


        </div>

    )
}