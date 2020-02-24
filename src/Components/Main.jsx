import React, { Component } from "react"
import spotifyLogo from "../logo/Spotify_Logo.png"
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import {fetchAlbums} from "../Actions/Album.js"

const mapStateToProps = state => {
    return state;
  };

const mapDispatchToProps=dispatch=>({
    fetchAlbumsThunk:()=>dispatch(fetchAlbums())
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount=()=>{
        this.props.fetchAlbumsThunk();
    }

    render() {
        return (
            <>
                <div className="containerMain">
                    {/* <div class="red">Header</div> */}
                    <div className="orange"><img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <ul className="ulList" >
                            <Link to={"/"} ><a className="li" href="/" >Home</a></Link>
                            <Link to={"/album"} ><a className="li" href="/album" >Search</a></Link>
                            <li className="li">Categories</li>
                            <li className="li">New Releases</li>
                        </ul>
                    </div>
                    <div className="yellow">
                        <div
                            className="nav-link flex-column  mt-4  "
                            id="v-pills-tab"
                            aria-orientation="vertical" >
                            <a className="nav-item nav-link" href="/">Home</a>
                            <a className="nav-item nav-link" href="/album">Search</a>
                        </div>
                        <div className="container">
                            <ul className="cards">
                                <li className="cards__item">
                                    <div className="card">
                                        <div className="card__image card__image--fence"></div>
                                        <div className="card__content">
                                            <div className="card__title">Flex</div>
                                            <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                                            <button className="btn btn--block card__btn">Button</button>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards__item">
                                    <div className="card">
                                        <div className="card__image card__image--fence"></div>
                                        <div className="card__content">
                                            <div className="card__title">Flex</div>
                                            <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                                            <button className="btn btn--block card__btn">Button</button>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards__item">
                                    <div className="card">
                                        <div className="card__image card__image--fence">
                                            <img src="" alt="m" ></img>
                                        </div>
                                        <div className="card__content">
                                            <div className="card__title">Flex</div>
                                            <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                                            <button className="btn btn--block card__btn">Button</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> </div>
                    <div className="green">
                        <a href="/">
                            <img src={btnNext} id="btnNext" alt="shuffle" />
                        </a>
                        <a href="/">
                            <img src={btnPrevious} id="btnPrevious" alt="shuffle" />
                        </a>
                        <a href="/">
                            <img src={btnPlay} id="btnPlay" alt="shuffle" />
                        </a>
                        <a href="/">
                            <img src={btnNext} id="btnShuffle" alt="shuffle" />
                        </a>
                        <a href="/">
                            <img src={btnRepeat} id="btnRepeat" alt="shuffle" />
                        </a>
                    </div>

                </div>
                {/*START <div className="wrapper">
                    <div className="box header">Header</div>
                    <div className="boxSideBar sidebar">
                        <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <ul className="ulList" >
                            <li className="li" >Home</li>
                            <li className="li">Search</li>
                            <li className="li">Categories</li>
                            <li className="li">New Releases</li>
                        </ul>
                    </div>
                    <div className="box content">Content
                  <br /> More content than we had before so this column is now quite tall.
                  More content than we had before so this column is now quite tall.
                  More content than we had before so this column is now quite tall.
                  More content than we had before so this column is now quite tall.
                  More content than we had before so this column is now quite tall.
                  More content than we had before so this column is now quite tall.
                  </div>
                    <div className="box footer">Footer</div>
                </div> END*/}
                {/* <div className="container">
                    <header class="header">Header</header>
                    <aside className="LeftCol">
                        <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <ul className="ulList" >
                            <li className="liHome" >Home</li>
                            <li className="li">Search</li>
                            <li className="li">Library</li>
                        </ul>
                    </aside>
                    <div class="wrapper">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <div class="push"></div>
                    </div>
                    <footer class="EndRow">kiii</footer>
                </div>
                */}

                {/* <Container fluid>
                    <Row>
                        <Col md={12} xs={12} >
                            <Row >
                                <Col xs={2} className="LeftCol" >
                                    <Row>
                                        <Col style={{ textAlign: "center" }}>
                                            <img src={spotifyLogo} id="imgLogo" ></img>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ textAlign: "center" }}>
                                            <ul className="ulList">
                                                <li className="liHome" >Home</li>
                                                <li className="li">Search</li>
                                                <li className="li">Library</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={10} >
                                    <Row>
                                        <Col className="ColNavBar">
                                            <Navbar color="dark" dark expand="md" className="NavBar" >
                                                <NavbarBrand href="/">reactstrap</NavbarBrand>
                                                <NavbarToggler />
                                                <Collapse navbar>
                                                    <Nav className="mr-auto" navbar>
                                                    </Nav>
                                                    <NavbarText>Simple Text</NavbarText>
                                                </Collapse>
                                            </Navbar>
                                        </Col>
                                    </Row>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <div className="cards">
                                                    <div className="card">
                                                        ONE
                                           </div>
                                                    <div className="card">
                                                        ONE
                                           </div>
                                                    <div className="card">
                                                        ONE
                                           </div>
                                                    <div className="card">
                                                        ONE
                                           </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="EndRow">
                        koo
               </Row>
                </Container> */}
            </>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
