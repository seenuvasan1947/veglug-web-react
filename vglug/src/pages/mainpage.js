import React, { Component } from "react";
import "../App.css";
// import styles from "../styles/stylemain.css";
import "../styles/stylemain.css";
// import Card from 'react-bootstrap/Card';
// import {Container ,Card, Col, Button} from 'react-bootstrap'; 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import spinimg1 from "../assets/airline_logo.png";
import swipbtn from "../assets/swipbutton.png";
import triangleimg from "../assets/triangleimg.png";
import discuss from '../assets/discuss.png';
import tools from '../assets/tools.png';
import ladyimg from '../assets/lady.png';
import { WiLightning } from 'react-icons/wi';
import { FaBuffer } from 'react-icons/fa';
// import { IconName, WiLightning } from 'react-icons/wi';
// import card1 from "../assets/card1.png";


const styles = {
  section: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#292b2c",
    backgroundColor: "#ff0",
    padding: "0 2em"
  },
  wrapper: {
    textAlign: "center",
    maxWidth: "950px",
    margin: "0 auto",
    border: "1px solid #e6e6e6",
    padding: "40px 25px",
    marginTop: "50px"
  },
  avatar: {
    margin: "-90px auto 30px",
    width: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0"
  },
  quote: {
    lineHeight: 1.5,
    fontWeight: 300,
    marginBottom: "25px",
    fontSize: "1.375rem"
  },
  name: {
    marginBottom: "0",
    fontWeight: 600,
    fontSize: "1rem"
  },
  position: { fontWeight: 400 }
};


class MainPage extends Component {
  render = () => {
    return (
      <div>
        <h2 style={styles.wrapper}> </h2>

        <div className="row">
          <div className="column1" >
            <h2>We create digital products that export sillicon <br />
              valley to the world</h2>
            <h4>
              we design and create tailor-made business <br />
              applications focussed on Customer <br />
              Experience and long term-Business Growth
              on Web,Mobile & Blockchain,We use <br />
              technology based on your project <br />
              requiement with less development & <br />
              maintanance cost
            </h4>
            <button className="button1">  Lets'Talk
            </button>
            <button className="button2">  Explore more
            </button>

          </div>
          <div className="column2" ></div>
          <div className="column3" >

            <img src={spinimg1} className="App-logo" alt="logo" />
            {/* <image src ={spinimg1} alt = "no"> </image> */}
          </div>
        </div>
        <div className="row">
          <h2 style={styles.wrapper}>
            nav

          </h2>
        </div>
        <div className="row">
          <div className="column4a" >
            <h2 id="title">Minimum Viable Product</h2>
            <h4>
              MVP is a product with enough features to <br />
              attract early-adopter customer and validate <br />
              a product idea early in thae product <br />
              development cycle<br /> <br />
              MVP is a product with enough features to <br />
              attract early-adopter customer and validate <br />
              a product  <br /> <br />
              MVP is a product with enough features to <br />
              attract early-adopter customer and validate <br />
              a product idea early in thae product <br />
              development cycle<br /> <br />
              MVP is a product with enough features to <br />
              attract early-adopter customer and validate <br />
              a product  <br /> <br />
            </h4>


          </div>
          {/* <div className="column5" ></div> */}
          <div className="column4" >
            <h2> without MVP
              <img src={swipbtn} className="spinbtn" alt="spinbtn" /> with MVP</h2>
            <img src={triangleimg} className="triangleimg" alt="triangleimg" height={300} width={350} />
          </div>
        </div>
        <div className="row">
          <h2 style={styles.wrapper}>
            Learn about sagasoft expertise

          </h2>
        </div>


        <div className="row">
          <div className="column7" >
            <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>
            <h4>
              We focus on the core feature-the  <br />
              thigs your products need to exist <br />
              And by eleminating unnecessary <br />
              details from Mvp, we shorten <br />
              production duration by 3-4 times <br />

            </h4>


          </div>
          {/* <div className="column5" ></div> */}
          <div className="column8" >

            <h1 id="title"> Fast shipment <span className="spantag"> < FaBuffer height={100} width={100} /> </span></h1>
            <h4>
              We focus on the core feature-the  <br />
              thigs your products need to exist <br />
              And by eleminating unnecessary <br />
              details from Mvp, we shorten <br />
              production duration by 3-4 times <br />

            </h4>

          </div>
        </div>
        <div className="row">
          <div className="column7" >
            <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>
            <h4>
              We focus on the core feature-the  <br />
              thigs your products need to exist <br />
              And by eleminating unnecessary <br />
              details from Mvp, we shorten <br />
              production duration by 3-4 times <br />

            </h4>


          </div>
          {/* <div className="column5" ></div> */}
          <div className="column8" >

            <h1 id="title"> Fast shipment <span className="spantag"> < FaBuffer height={100} width={100} /> </span></h1>
            <h4>
              We focus on the core feature-the  <br />
              thigs your products need to exist <br />
              And by eleminating unnecessary <br />
              details from Mvp, we shorten <br />
              production duration by 3-4 times <br />

            </h4>

          </div>
        </div>

        <div className="row">
          <div className="columnfullp1" >
            <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>
            <h4>
              We focus on the core feature-the  <br />
              thigs your products need to exist <br />
              And by eleminating unnecessary <br />
              details from Mvp, we shorten <br />
              production duration by 3-4 times <br />

            </h4>


          </div>
          {/* <div className="column5" ></div> */}
          <div className="columnfullp2" >

            <img src={discuss} className="discussimg" alt="discussimg" height={250} width={440} />
          </div>
        </div>
        <div className="row">
          <div className="rowtext">
            <h1 id="title"> Our experts in the industry </h1>
            <br />
            <h4>
              We focus on the core feature-the
              thigs your products need to exist
              And by eleminating unnecessary
              details from Mvp, we shorten
              production duration by 3-4 times

            </h4>
          </div>


        </div>
        <div className="row">
          <div className="rowtext">

            <img src={tools} className="discussimg" alt="discussimg" height={200} width={1085} />

          </div>


        </div>
        {/* <div className="row">

          <div className="column9" >
            <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>
            <h4>
              We focus on the core feature-the  <br />
              thigs your products need to exist <br />
              And by eleminating unnecessary <br />
              details from Mvp, we shorten <br />
              production duration by 3-4 times <br />

            </h4>


          </div>


        </div> */}
        <div className="row">
          {/* <table>
              <tr className="column9">
                <td>
                <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>

                  <h4>
                    We focus on the core feature-the  <br />
                    thigs your products need to exist <br />
                    And by eleminating unnecessary <br />
                    details from Mvp, we shorten <br />
                    production duration by 3-4 times <br />

                  </h4>
                </td>
              </tr>
              <tr className="column9">
                <td>
                <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>

                  <h4>
                    We focus on the core feature-the  <br />
                    thigs your products need to exist <br />
                    And by eleminating unnecessary <br />
                    details from Mvp, we shorten <br />
                    production duration by 3-4 times <br />

                  </h4>
                </td>
              </tr>
            
            </table> */}
          <table>
            <tr>
              <td >
                <div className="column9">
                  <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>

                  <h4>
                    We focus on the core feature-the  <br />
                    thigs your products need to exist <br />
                    And by eleminating unnecessary <br />
                    details from Mvp, we shorten <br />


                  </h4>
                </div>
                <div className="column9">
                  <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>

                  <h4>
                    We focus on the core feature-the  <br />
                    thigs your products need to exist <br />
                    And by eleminating unnecessary <br />
                    details from Mvp, we shorten <br />


                  </h4>
                </div>
              </td>
              <td>
                <div className="column10" >
                  <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>
                  <h4>
                    We focus on the core feature-the  <br />
                    thigs your products need to exist <br />
                    And by eleminating unnecessary <br />
                    details from Mvp, we shorten <br />
                    production duration by 3-4 times <br />

                  </h4>


                </div>

              </td>
              <td>
                <div className="column10" >
                  <h1 id="title">Fast shipment  <span className="spantag">  < WiLightning height={100} width={100} /></span></h1>
                  <h4>
                    We focus on the core feature-the  <br />
                    thigs your products need to exist <br />
                    And by eleminating unnecessary <br />
                    details from Mvp, we shorten <br />
                    production duration by 3-4 times <br />

                  </h4>


                </div>
              </td>
            </tr>
          </table>



        </div>
        <div className="row">
          <div className="columnfullp1" >
            <img src={discuss} className="discussimg" alt="discussimg" height={250} width={600} />



          </div>
          {/* <div className="column5" ></div> */}
          <div className="columnfullp2" >
            <br />
            <h1 id="title">Stay updated  </h1>
            <form>
              <label id="titlesub">
                Subcribe 
                <input type="text" name="name" />
              </label>
              
            </form>


            <h4>
              We focus on the core feature-the  <br />
              thigs your products need to exist <br />
              And by eleminating unnecessary <br />
              details from Mvp, we shorten <br />
              production duration by 3-4 times <br />

            </h4>

          </div>
        </div>

      </div>


    );
  };
}

export default MainPage;
