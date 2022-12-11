import React from 'react';
import meme from './img.png';
import memesData from "./memesData";

export default function Meme() {

    function randomMeme() {
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        //console.log(memesArray[randomNum]);

        const url = memesArray[randomNum].url;
        console.log(url);
    }

    return(
        <div className="meme">
            <form className="inputs">
                <input type="text" className="top_line" placeholder="Shut up"/>
                <input type="text" className="bottom_line" placeholder="and take my money" />
                <button onClick={randomMeme}>Get a new meme image 🖼</button>
            </form>
        </div>

    )
}