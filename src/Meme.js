import React from "react"
import memesData from "./memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)

    }

    return (
        <main className="meme">
            <div className="form inputs">
                <input
                    type="text"
                    placeholder="Shut up"
                    className="top_line"
                />
                <input
                    type="text"
                    placeholder="and take my money"
                    className="bottom_line"
                />
                <button
                    className=""
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage}
                 className="meme-image"
            />

        </main>
    )
}