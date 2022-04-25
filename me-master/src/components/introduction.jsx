import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: ''}}>
                <div className="overlay" />
                <div className="container-fluid">
                <br /> <br /><h4 style={{"font-family":"cursive"}}>UI Developer .Enthusiast .Explorer</h4>
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Komal</h1>
                          <h6>I am a Frontend Developer like to craft solid and scalable frontend products with great user experience.</h6>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1Oct4PP0OA4RM9TMsQnpoiWhSlrhYwyVx/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: ''}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Work</h1><br /> <h3>Dig into my works</h3>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/KomalJena" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>/
              </li>
              {/* <li style={{backgroundImage: ''}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I often <br/>Write ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://anemollientquill.wordpress.com/" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
