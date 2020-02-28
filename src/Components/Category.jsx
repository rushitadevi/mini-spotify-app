import React from 'react';
import { connect } from "react-redux";
import { fetchCategories } from "../Actions/Album.js"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    fetchCategoriesThunk: () => dispatch(fetchCategories()) //dispatching action
});

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.fetchCategoriesThunk(); //fetching categories from API
    }
    render() {
        return (
            <>
                <div id="bodyCont">
                    <div id="bodyMainCont">
                        <div className="MainContent" >
                            <Navbar />
                            <div className="rightSideBar">
                                <div className="mainContent">
                                    {this.props.playLists.categories &&
                                        this.props.playLists.categories.map((category, id) => (
                                            <div className="displayCards" key={id}>
                                                <ul className="ulList">
                                                    <li >
                                                        <div className="card">
                                                            <div className="divImg">
                                                                <img src={category.icons["0"].url} alt="img" ></img>
                                                            </div>{/* end of divImg */}
                                                            <div className="card__content">
                                                                <b><p className="card__text"> {category.name} </p> </b>
                                                            </div> {/* end of card_content */}
                                                        </div> {/* end of card */}
                                                    </li> {/* end of li */}
                                                </ul>
                                            </div>
                                        ))}
                                </div>{/* end of mainContent */}
                            </div> {/* end of rightSideBar */}
                        </div> {/* end of main container */}
                    </div> {/* end of bodyMainCont */}
                    {/* <Footer/> */}
                    <div id="footCont">
                        <Footer />
                    </div>
                </div>{/* end of bodyCont */}
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);

