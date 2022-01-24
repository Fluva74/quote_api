import "./warning.css"

export default function Warning() {
    return (
        <div className="warning">
            <h1 className="header">
                The Big Lebowski Quote Generator
            </h1>
            <div className="container2">
                <div className="box">
                    <div className="left2">
                   
                <img className="stranger" src="http://static.businessinsider.com/image/5936d781b74af4f83d8b6612" alt="Sam Elliot as The Stranger" />
                </div>
                   
                    <div className="right2">
                  
                    <h2>
                        Well, hello. Good to see ya' again. I've gotta tell you somethin' important.
                    </h2>
                    <p>
                        I'm glad you've come by to spend some time with The Dude and all his...well, let's just call 'em "colorful" friends. I hope you'll keep in mind that this group, they don't mind throwin' around a few cuss words...especially The Dude. More than I care to partake in, but what can you do? Not much you can say bad about a man of his time. Enjoy your time and take 'er easy.
                    </p>
                </div>
               
                
            </div>
            <div className="advisory">
                <img  className="label" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Parental_Advisory_label.svg/1200px-Parental_Advisory_label.svg.png" alt="parental advisory label" />
                </div>
                <div className="bowl">
                    <a href="/home">
                    <img  className="pins" src="https://www.pngarts.com/files/3/Bowling-Strike-PNG-Transparent-Image.png" alt="bowling ball and pins" />
                
                    </a>
                    <span className="letsGo">Let's Go Bowling!</span>
                </div>
               
           
            </div>
            </div>
    )
}
