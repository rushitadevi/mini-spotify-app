import React from 'react';
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="bottomContainer">
                        <div className="footer" style={{display:"flex"}} >
                            <a href="/">
                                <img src={btnShuffle} id="btnNext" alt="shuffle" />
                            </a>
                            <a href="/">
                                <img src={btnPrevious} id="btnPrevious" alt="Previous" />
                            </a>
                            <a href="/">
                                <img src={btnPlay} id="btnPlay" alt="Play" />
                            </a>
                            <a href="/">
                                <img src={btnNext} id="btnShuffle" alt="Next" />
                            </a>
                            <a href="/">
                                <img src={btnRepeat} id="btnRepeat" alt="Repeat" />
                            </a>
                        </div>
                    </div>
         );
    }
}
 

export default Footer;
