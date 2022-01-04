import './home.css'
import React, { useState } from "react";
import axios from "axios";


function Home() {
     
    const [text, setText] = useState("");
const [name, setName] = useState("");
const getQuote = () => {
  axios
    .get("http://lebowski.me/api/quotes/random")
    .then((res) => {
      setText(res.data.quote.lines[0].text);
      setName(res.data.quote.lines[0].character.name);
    })
    .catch((err) => {
      console.log(err);
    });
};
    return (
    <div className="home">
        <div className="capsule">
                <div className="left">
                    <img src="https://www.nicepng.com/png/full/159-1594155_episode-11-the-big-lebowski-big-lebowski-movie.png" alt="" className="title" />
                </div>
                <div className="right">
                    <img src="https://w0.peakpx.com/wallpaper/248/489/HD-wallpaper-the-big-lebowski-jeff-bridges-jeff-lebowski-john-goodman-the-dude.jpg" alt="" className="portraitsLg" />
                    <img src="https://wallpapercave.com/wp/IQfiVZf.jpg" alt="" className="portraitsSm" />
                </div>
                <div className="quoteGen">
                    <div className="card">
                        <h2 className="text">{text}</h2>
                        <h4 className="name">
                            <b>-{name}</b>
                            </h4>
                    </div>
                </div>
                <div className="cta">
                <img onClick={getQuote} className="ball" src="https://www.transparentpng.com/thumb/bowling/die7q2-bowling-wonderful-picture-images.png" alt="red bowling ball" />
                <span>Get Quote</span>
                </div>
               
        </div>   
    </div>




         
    )
}
export default Home;
