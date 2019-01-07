import React, {Component, CSSProperties, MouseEvent} from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import './App.css';
import './w3.css';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            scroll: 0
        };
        this.setScroll = this.setScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.setScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.setScroll);
    }

    setScroll() {
        this.setState({
            scroll: document.documentElement.scrollTop
        });
    }

    render() {
        /*function getNavbarClass() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                return "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
            } else {
                return "";
            }
        }*/

        // Modal Image Gallery
        function expandImage(event: MouseEvent) {
            /*document.getElementById("img01").src = element.src;
            document.getElementById("modal01").style.display = "block";
            let captionText = document.getElementById("caption");
            captionText.innerHTML = element.alt;*/
        }

        function hideImage(event: MouseEvent) {
            //this.style.display='none'
        }


        // Used to toggle the menu on small screens when clicking on the menu button
        function toggleFunction() {/*
          let x = document.getElementById("navDemo");
          if (x.className.indexOf("w3-show") == -1) {
              x.className += " w3-show";
          } else {
              x.className = x.className.replace(" w3-show", "");
          }*/
        }

        const fullWidth = {
            width: '100%'
        };

        const width90 = {
            width: '90%'
        };

        const width85 = {
            width: '85%'
        };

        const width75 = {
            width: '75%'
        };

        const whiteNoWrap = {
            whiteSpace: "nowrap"
        } as CSSProperties;

        const marginTop64 = {
            marginTop: '64px'
        };

        const marginBox = {
            margin: '0 -16px 8px -16px'
        };

        return (
            <div className="main">
                {/* Navbar (sit on top) */}
                <div className="w3-top">
                    <div className={"w3-bar" + (this.state.scroll > 100 ?
                        " w3-card w3-animate-top w3-white" : "")} id="myNavbar">
                        <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
                           href="javascript:void(0);" onClick={toggleFunction} title="Toggle Navigation Menu">
                            <i className="fa fa-bars"></i>
                        </a>
                        <a href="#home" className="w3-bar-item w3-button">HOME</a>
                        <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i
                            className="fa fa-user"></i> ABOUT</a>
                        <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small"><i
                            className="fa fa-th"></i> PORTFOLIO</a>
                        <a href="#contact" className="w3-bar-item w3-button w3-hide-small"><i
                            className="fa fa-envelope"></i> CONTACT</a>
                        <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                            <i className="fa fa-search"></i>
                        </a>
                    </div>

                    {/* Navbar on small screens */}
                    <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                        <a href="#about" className="w3-bar-item w3-button" onClick={toggleFunction}>ABOUT</a>
                        <a href="#portfolio" className="w3-bar-item w3-button" onClick={toggleFunction}>PORTFOLIO</a>
                        <a href="#contact" className="w3-bar-item w3-button" onClick={toggleFunction}>CONTACT</a>
                        <a href="#" className="w3-bar-item w3-button">SEARCH</a>
                    </div>
                </div>

                {/*
                // @ts-ignore */}
                <Parallax pages={3} ref={ref => this.parallax = ref}>
                    <ParallaxLayer offset={0} speed={0} factor={3} />
                    <ParallaxLayer offset={0} speed={0.75}>
                        <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                            <ParallaxLayer offset={0} speed={0.5}>
                                <div className="w3-display-middle" style={whiteNoWrap}>
                                <span
                                    className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MY <span
                                    className="w3-hide-small">WEBSITE</span> LOGO</span>
                                </div>
                            </ParallaxLayer>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.99} speed={0.5}>
                        {/*Container (About Section) */}
                        <div className="w3-content w3-container w3-padding-64" id="about">
                            <h3 className="w3-center">ABOUT ME</h3>
                            <p className="w3-center"><em>I love photography</em></p>
                            <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby
                                photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="w3-row">
                                <div className="w3-col m6 w3-center w3-padding-large">
                                    <p><b><i className="fa fa-user w3-margin-right"></i>My Name</b></p><br></br>
                                    <img src="/w3images/avatar_hat.jpg"
                                         className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me"
                                         width="500" height="333"/>
                                </div>

                                {/*Hide this text on small devices */}
                                <div className="w3-col m6 w3-hide-small w3-padding-large">
                                    <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
                            <p className="w3-wide"><i className="fa fa-camera"></i>Photography</p>
                            <div className="w3-light-grey">
                                <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={width90}>90%</div>
                            </div>
                            <p className="w3-wide"><i className="fa fa-laptop"></i>Web Design</p>
                            <div className="w3-light-grey">
                                <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={width85}>85%</div>
                            </div>
                            <p className="w3-wide"><i className="fa fa-photo"></i>Photoshop</p>
                            <div className="w3-light-grey">
                                <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={width75}>75%</div>
                            </div>
                        </div>
                    </ParallaxLayer>
                </Parallax>

                {/*<div className="w3-row w3-center w3-dark-grey w3-padding-16">
                    <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">14+</span><br></br>
                        Partners
                    </div>
                    <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">55+</span><br></br>
                        Projects Done
                    </div>
                    <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">89+</span><br></br>
                        Happy Clients
                    </div>
                    <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">150+</span><br></br>
                        Meetings
                    </div>
                </div>

                Second Parallax Image with Portfolio Text
                <div className="bgimg-2 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
                    </div>
                </div>

                Container (Portfolio Section)
                <div className="w3-content w3-container w3-padding-64" id="portfolio">
                    <h3 className="w3-center">MY WORK</h3>
                    <p className="w3-center"><em>Here are some of my latest lorem work ipsum tipsum.<br></br> Click on
                        the images to make them bigger</em></p><br></br>

                    Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width)
                    <div className="w3-row-padding w3-center">
                        <div className="w3-col m3">
                            <img src="/w3images/p1.jpg" style={fullWidth} onClick={expandImage}
                                 className="w3-hover-opacity" alt="The mist over the mountains"/>
                        </div>

                        <div className="w3-col m3">
                            <img src="/w3images/p2.jpg" style={fullWidth} onClick={expandImage}
                                 className="w3-hover-opacity" alt="Coffee beans"/>
                        </div>

                        <div className="w3-col m3">
                            <img src="/w3images/p3.jpg" style={fullWidth} onClick={expandImage}
                                 className="w3-hover-opacity" alt="Bear closeup"/>
                        </div>

                        <div className="w3-col m3">
                            <img src="/w3images/p4.jpg" style={fullWidth} onClick={expandImage}
                                 className="w3-hover-opacity" alt="Quiet ocean"/>
                        </div>
                    </div>

                    <div className="w3-row-padding w3-center w3-section">
                        <div className="w3-col m3">
                            <img src="/w3images/p5.jpg" style={fullWidth} onClick={expandImage}
                                 className="w3-hover-opacity" alt="The mist"/>
                        </div>

                        <div className="w3-col m3">
                            <img src="/w3images/p6.jpg" style={fullWidth} onClick={expandImage}
                                 className="w3-hover-opacity" alt="My beloved typewriter"/>
                        </div>

                        <div className="w3-col m3">
                            <img src="/w3images/p7.jpg" style={fullWidth} onClick={expandImage}
                                 className="w3-hover-opacity" alt="Empty ghost train"/>
                        </div>

                        <div className="w3-col m3">
                            <img src="/w3images/p8.jpg" style={fullWidth} onClick={expandImage}
                                 className="w3-hover-opacity" alt="Sailing"/>
                        </div>
                        <button className="w3-button w3-padding-large w3-light-grey" style={marginTop64}>LOAD MORE
                        </button>
                    </div>
                </div>

                Modal for full size images on click
                <div id="modal01" className="w3-modal w3-black" onClick={hideImage}>
                    <span className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i
                        className="fa fa-remove"></i></span>
                    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                        <img id="img01" className="w3-image"/>
                        <p id="caption" className="w3-opacity w3-large"></p>
                    </div>
                </div>

                Third Parallax Image with Portfolio Text
                <div className="bgimg-3 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
                    </div>
                </div>

                Container (Contact Section)
                <div className="w3-content w3-container w3-padding-64" id="contact">
                    <h3 className="w3-center">WHERE I WORK</h3>
                    <p className="w3-center"><em>I'd love your feedback!</em></p>

                    <div className="w3-row w3-padding-32 w3-section">
                        <div className="w3-col m4 w3-container">
                            <img src="/w3images/map.jpg" className="w3-image w3-round" style={fullWidth}/>
                        </div>
                        <div className="w3-col m8 w3-panel">
                            <div className="w3-large w3-margin-bottom">
                                <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Chicago,
                                US<br></br>
                                <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone:
                                +00 151515<br></br>
                                <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email:
                                mail@mail.com<br></br>
                            </div>
                            <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
                            <form action="/action_page.php" target="_blank">
                                <div className="w3-row-padding" style={marginBox}>
                                    <div className="w3-half">
                                        <input className="w3-input w3-border" type="text" placeholder="Name" required
                                               name="Name"/>
                                    </div>
                                    <div className="w3-half">
                                        <input className="w3-input w3-border" type="text" placeholder="Email" required
                                               name="Email"/>
                                    </div>
                                </div>
                                <input className="w3-input w3-border" type="text" placeholder="Message" required
                                       name="Message"/>
                                <button className="w3-button w3-black w3-right w3-section" type="submit">
                                    <i className="fa fa-paper-plane"></i> SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                Footer
                <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
                    <a href="#home" className="w3-button w3-light-grey"><i
                        className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
                    <div className="w3-xlarge w3-section">
                        <i className="fa fa-facebook-official w3-hover-opacity"></i>
                        <i className="fa fa-instagram w3-hover-opacity"></i>
                        <i className="fa fa-snapchat w3-hover-opacity"></i>
                        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                        <i className="fa fa-twitter w3-hover-opacity"></i>
                        <i className="fa fa-linkedin w3-hover-opacity"></i>
                    </div>
                    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank"
                                     className="w3-hover-text-green">w3.css</a></p>
                </footer>*/}
            </div>
        );
    }
}

export default App;
