import React from "react"
import memesData from "./memesData"

export default function Meme() {
    //const [memeImage, setMemeImage] = React.useState("")

    const [meme, setMeme] = React.useState({
        tepText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemesImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
                prevMeme,
                randomImage: url
            })
        )
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
            <img src={meme.randomImage}
                 className="meme-image"
            />

        </main>
    )
}