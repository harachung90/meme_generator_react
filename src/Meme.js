import React from "react"
import memesData from "./memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNum].url)
    }

    return (
        <main className="meme">
            <form className="inputs">
                <input type="text" className="top_line" placeholder="Shut up"/>
                <input type="text" className="bottom_line" placeholder="and take my money"/>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
            <img src={memeImage} className="meme-image" />
        </main>
    )
}