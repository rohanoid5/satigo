import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';

let slideIndex = 1;

class App extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      clientIndex: 0,
      candidateIndex: 0,
      sliderImageStyle:[
        {display: 'none'},
        {display: 'none'},
        {display: 'none'}
      ],
      slideCount: 1,
      assignmentIndex: 0,
    }
  }

  componentDidMount() {
    this.showSlides(slideIndex);
    this.interval = setInterval(() => {
      this.plusSlides(1);
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  plusSlides(n) {
    this.showSlides(slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides = this.state.sliderImageStyle;
    if (n > 3) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = 3;
    }
    for (i = 0; i < 3; i++) {
      let sliderImageStyle = this.state.sliderImageStyle;
      sliderImageStyle[i] = {display: 'none'};
      this.setState({
        sliderImageStyle
      })
    }
    let sliderImageStyle = this.state.sliderImageStyle;
    sliderImageStyle[slideIndex - 1] = {display: 'block'};
    this.setState({
      sliderImageStyle
    })
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="App">
        <nav className="navbar navbar-inverse navbar-fixed-top navbar-white" id="nav">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar_main" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img src="images_logo.png" width="80" alt="Satigo"/>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar_main">
              <ul id="navbar-txt" className="nav navbar-nav navbar-right">
                <li>
                  <a id='home' data-toggle="collapse" data-target=".navbar-collapse" href="#section_home">HOME</a>
                </li>
                <li>
                  <a id='about' data-toggle="collapse" data-target=".navbar-collapse" href="#section_about">ABOUT</a>
                </li>
                <li>
                  <a id='enterprise' data-toggle="collapse" data-target=".navbar-collapse" href="#section_enterprise">ENTERPRISE</a>
                </li>
                <li>
                  <a id='clients' data-toggle="collapse" data-target=".navbar-collapse" href="#section_clients">CLIENTS</a>
                </li>
                <li>
                  <a id='candidates' data-toggle="collapse" data-target=".navbar-collapse" href="#section_candidates">CANDIDATES</a>
                </li>
                <li>
                  <a id='team' data-toggle="collapse" data-target=".navbar-collapse" href="#section_team">TEAM</a>
                </li>
                <li>
                  <a id='contact' data-toggle="collapse" data-target=".navbar-collapse" href="#section_contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="section_home">
          <div className="slideshow-container">
            <div className="mySlides xfade" style={this.state.sliderImageStyle[0]}>
              <img className="slide_image" src="https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            </div>
            <div className="mySlides xfade" style={this.state.sliderImageStyle[1]}>
              <img className="slide_image" src="https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            </div>
            <div className="mySlides xfade" style={this.state.sliderImageStyle[2]}>
              <img className="slide_image" src="https://res.cloudinary.com/getignitor/image/upload/q_10/v1524468756/image_two-min_xgpk1w.jpg"/>
            </div>
          </div>
          <div className="container">
            <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
          </div>
          <div className="title">
            We are Satigo
          </div>
          <div className="subtitle">
            Leaders in Technology Recruitment
          </div>
          <div className="subsubtitle">
            Unrivalled industry expertise and world class service
          </div>
          <div className="slider-buttons">
            <a href="" className="btn btn-primary">
              Our expertise
            </a>
            <a href="" className="btn btn-trasparent">
              Browse jobs
            </a>
          </div>
        </section>
        <section className="section" style={{backgroundColor: '#414141'}}>
          <div className="container">
            <div className="available-jobs">
              <a href="" className="btn btn-primary">
                Latest Jobs
              </a>
              <span className="latest-job-details">
                Window server Engineer -Windows Server, Exchange, Citrix, Permanent
              </span>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="companies">
            <img src="vodafone.jpg" className="company-icons"/>
            <img src="cts.png" className="company-icons"/>
            <img src="vodafone.jpg" className="company-icons"/>
            <img src="cts.png" className="company-icons"/>
            <img src="vodafone.jpg" className="company-icons"/>
            <img src="cts.png" className="company-icons"/>
          </div>
        </section>
        <section className="section-title" id="section_about">
          About us
        </section>
        <section className="section section-about-us">
          <div className="triangle-bottom"><div></div></div>
          <div style={{	padding: '48px 0px'}} className="container">
            <div className="row about-us-content">
              <div className="about-us-paragraph-unordered">
                <div className="about-us-title">Who we are</div>
                <p className="about-us-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="about-us-logo-unordered">
                <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                  <i className="material-icons md-64">
                    perm_contact_calendar
                  </i>
                </div>
              </div>
            </div>
            <div className="row about-us-content">
              <div className="about-us-logo">
                <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                  <i className="material-icons md-64">
                    perm_contact_calendar
                  </i>
                </div>
              </div>
              <div className="about-us-paragraph">
                <div className="about-us-title">What we do</div>
                <p className="about-us-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="row about-us-content">
              <div className="about-us-paragraph-unordered">
                <div className="about-us-title">How we do it</div>
                <p className="about-us-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="about-us-logo-unordered">
                <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                  <i className="material-icons md-64">
                    perm_contact_calendar
                  </i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-title" id="section_enterprise">
          Our enterprise
        </section>
        <section className="section section-expertise">
          <div className="triangle-bottom"><div></div></div>
          <div style={{	padding: '48px 0px'}} >
            <div className="container">
              <div className="row">
                <div className="expertise-title">The full spectrum of recruitment solutions</div>
              </div>
              <div className="row">
                <div className="expertise-bubble-container">
                  <div className="expertise-bubble">
                    <div style={{fontSize: 13, textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold'}}>
                      Permanent
                    </div>
                  </div>
                  <div className="expertise-bubble"></div>
                  <div className="expertise-bubble"></div>
                  <div className="expertise-bubble"></div>
                  <div className="expertise-bubble"></div>
                </div>
              </div>
              <div className="row">
                <div className="expertise-title">Led by experts</div>
                <div className="expertise-subtitle">We're committed to building strategic and long term partnership with our clients and candidates. Our vertical subject matter expertise - together with our solid industry network - means we always deliver when it comes to connecting the best talent to the best position.</div>
              </div>
              <div className="row extra-padding about-us-content">
                <div className="about-us-paragraph-unordered">
                  <div className="about-us-title title-black">Infrastructure</div>
                  <p className="about-us-content content-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="about-us-logo-unordered">
                  <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                    <i className="material-icons md-64">
                      perm_contact_calendar
                    </i>
                  </div>
                </div>
              </div>
              <div className="row extra-padding about-us-content">
                <div className="about-us-logo">
                  <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                    <i className="material-icons md-64">
                      perm_contact_calendar
                    </i>
                  </div>
                </div>
                <div className="about-us-paragraph">
                  <div className="about-us-title title-black">Digital</div>
                  <p className="about-us-content content-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="row extra-padding about-us-content">
                <div className="about-us-paragraph-unordered">
                  <div className="about-us-title title-black">Change & Transformation</div>
                  <p className="about-us-content content-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="about-us-logo-unordered">
                  <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                    <i className="material-icons md-64">
                      perm_contact_calendar
                    </i>
                  </div>
                </div>
              </div>
              <div className="row extra-padding about-us-content">
                <div className="about-us-logo">
                  <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                    <i className="material-icons md-64">
                      perm_contact_calendar
                    </i>
                  </div>
                </div>
                <div className="about-us-paragraph">
                  <div className="about-us-title title-black">Enterprise sales</div>
                  <p className="about-us-content content-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-about-us section-assignment">
          <div className="container">
            <div className="row">
              <div className="expertise-title title-white">RECENTLY COMPLETED ASSIGNMENTS</div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div style={{display: 'flex', flexDirection: 'row-reverse', marginBottom: 16}}>
                  <div
                    className={ this.state.assignmentIndex == 1 ?
                    "indicator-enabled indicator-disabled" : "indicator-enabled"
                    }
                    onClick={() => this.setState({assignmentIndex: 1})}>
                    &#10095;
                  </div>
                  <div onClick={() => this.setState({assignmentIndex: 0})} style={{marginRight: 8}}
                    className={ this.state.assignmentIndex == 0 ?
                    "indicator-enabled indicator-disabled" : "indicator-enabled"
                    }>
                    &#10094;
                  </div>
                </div>
              </div>
              { this.state.assignmentIndex == 0 ?
                <div className="col-md-6">
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: 18}}>
                      Practice:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Enterprise Sales
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: '18px', display: 'flex', alignItems: 'center'}}>
                      Requirements:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at. Sapien nec sagittis aliquam malesuada.
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: 18}}>
                      Solution:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Permanent
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: '18px', display: 'flex', alignItems: 'center'}}>
                      Delivery:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Nulla pharetra diam sit amet. Posuere ac ut consequat semper. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.
                    </div>
                  </div>
                </div> : null}
              { this.state.assignmentIndex == 0 ?
                <div className="col-md-6">
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: 18}}>
                      Practice:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Enterprise Sales
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: '18px', display: 'flex', alignItems: 'center'}}>
                      Requirements:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at. Sapien nec sagittis aliquam malesuada.
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: 18}}>
                      Solution:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Permanent
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: '18px', display: 'flex', alignItems: 'center'}}>
                      Delivery:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Nulla pharetra diam sit amet. Posuere ac ut consequat semper. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.
                    </div>
                  </div>
                </div> : null}
              { this.state.assignmentIndex == 1 ?
                <div className="col-md-6">
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: 18}}>
                      Requirements:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Ut enim ad minim veniam
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: '18px', display: 'flex', alignItems: 'center'}}>
                      Delivery:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      A eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at. Sapien nec sagittis aliquam malesuada.
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: 18}}>
                      Solution:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Permanent
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: '18px', display: 'flex', alignItems: 'center'}}>
                      Practice:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Posuere ac ut consequat semper.
                    </div>
                  </div>
                </div> : null}
              { this.state.assignmentIndex == 1 ?
                <div className="col-md-6">
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: 18}}>
                      Requirements:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: '18px', display: 'flex', alignItems: 'center'}}>
                      Practice:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Duis aute irure dolor, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at. Sapien nec sagittis aliquam malesuada.
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: 18}}>
                      Delivery:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      On time
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginBottom: 4}}>
                    <div style={{flex: 3, backgroundColor: '#424044', color: '#FFFFFF', padding: '18px', display: 'flex', alignItems: 'center'}}>
                      Solution:
                    </div>
                    <div style={{flex: 7, backgroundColor: '#98D3DB', color: '#FFFFFF', padding: 18}}>
                      Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.
                    </div>
                  </div>
                </div> : null}
            </div>
          </div>
        </section>
        <section className="section-title" id="section_clients">
          Clients
        </section>
        <section
          className="section"
          id="section_features"
          style={{
            background: 'url("office-png.png")',
            height: 'auto'
          }}>
          <div className="triangle-bottom"><div></div></div>
          <div style={{padding: '48px 0px'}} >
            <div className="container">
              <div className="row about-us-content">
                <div className="about-us-paragraph-unordered">
                  <div className="expertise-title title-white client-title">Consultive approach and bespoke delivery</div>
                  <div className="client-subtitle">
                    Preferred Supplier Status and World Class Delivery Ratios
                  </div>
                  <div className="client-subtitle-content">
                    Dolor sit amet consectetur adipiscing elit. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Suspendisse faucibus interdum posuere lorem ipsum dolor sit.
                  </div>
                  <div className="client-subtitle">
                    Working in True Partnership as Trusted Advisors
                  </div>
                  <div className="client-subtitle-content">
                    Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Sit amet luctus venenatis lectus magna. Nullam ac tortor vitae purus faucibus ornare. Amet volutpat consequat mauris nunc congue nisi vitae. Enim sed faucibus turpis in. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget. Nisi lacus sed viverra tellus in hac habitasse. Scelerisque felis imperdiet proin fermentum leo vel orci porta non.
                  </div>
                </div>
                <div className="about-us-logo-unordered">
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 200, height: 200, backgroundColor: '#000000', borderRadius: '100px'}}>
                    <i className="material-icons md-white md-128">
                      chat_bubble
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-testimonial">
          <div className="container">
            <div style={{marginBottom: '20px'}} className="expertise-title title-white">Client testimonials</div><div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span style={{fontSize: 100, color: '#6BB5C0', fontWeight: 'bold'}}>&#8220;</span>
              { this.state.clientIndex == 0 ?
                <div className="client-testimony">
                  <div className="testimonial-title title-white">HR Manager at Global Technology Consultancy</div>
                  <div className="testimonial-content title-white">
                    Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Sit amet luctus venenatis lectus magna. Nullam ac tortor vitae purus faucibus ornare. Amet volutpat consequat mauris nunc congue nisi vitae. Enim sed faucibus turpis in. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget. Cum sociis natoque penatibus et. Nulla at volutpat diam ut venenatis tellus in metus. Nunc sed id semper risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id.
                  </div>
                </div> : null}
              { this.state.clientIndex == 1 ?
                <div className="client-testimony">
                  <div className="testimonial-title title-white">IT Manager at CTS</div>
                  <div className="testimonial-content title-white">
                    Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Sit amet luctus venenatis lectus magna. Nullam ac tortor vitae purus faucibus ornare. Amet volutpat consequat mauris nunc congue nisi vitae. Enim sed faucibus turpis in. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget. Cum sociis natoque penatibus et. Nulla at volutpat diam ut venenatis tellus in metus. Nunc sed id semper risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id.
                  </div>
                </div> : null}
              { this.state.clientIndex == 2 ?
                <div className="client-testimony">
                  <div className="testimonial-title title-white">Talent Head at IBM</div>
                  <div className="testimonial-content title-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id.
                  </div>
                </div> : null}
              { this.state.clientIndex == 3 ?
                <div className="client-testimony">
                  <div className="testimonial-title title-white">Assistant Sales Manager at Amazon</div>
                  <div className="testimonial-content title-white">
                    Enim lobortis scelerisque Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Dolor morbi non arcu risus quis varius quam quisque id.
                  </div>
                </div> : null}
              <span style={{fontSize: 100, color: '#6BB5C0', fontWeight: 'bold'}}>&#8221;</span>
            </div>
            <div style={{float: 'right', marginTop: '16px'}}>
              <div
                onClick={() => this.setState({clientIndex: 0})}
                className={ this.state.clientIndex != 0 ?
                "indicator-slider-enabled" : "indicator-slider-enabled indicator-slider-disabled"
                }></div>
              <div
                onClick={() => this.setState({clientIndex: 1})}
                style={{marginLeft: 8}}
                className={ this.state.clientIndex != 1 ?
                "indicator-slider-enabled" : "indicator-slider-enabled indicator-slider-disabled"
                }></div>
              <div
                onClick={() => this.setState({clientIndex: 2})}
                style={{marginLeft: 8}} className={ this.state.clientIndex != 2 ?
                "indicator-slider-enabled" : "indicator-slider-enabled indicator-slider-disabled"
                }></div>
              <div
                onClick={() => this.setState({clientIndex: 3})}
                style={{marginLeft: 8}} className={ this.state.clientIndex != 3 ?
                "indicator-slider-enabled" : "indicator-slider-enabled indicator-slider-disabled"
                }></div>
            </div>
          </div>
        </section>
        <section className="section-title" id="section_candidates">
          candidates
        </section>
        <section className="section section-about-us">
          <div className="triangle-bottom"><div></div></div>
          <div style={{	padding: '48px 0px'}} >
            <div className="container">
              <div className="row about-us-content">
                <div className="about-us-paragraph-unordered">
                  <div className="about-us-title">Who we are</div>
                  <p className="about-us-content">
                    Nisi lacus sed viverra tellus in hac habitasse. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Sit amet luctus venenatis lectus magna. Nullam ac tortor vitae purus faucibus ornare. Amet volutpat consequat mauris nunc congue nisi vitae. Enim sed faucibus turpis in. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget.
                  </p>
                </div>
                <div className="about-us-logo-unordered">
                  <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                    <i className="material-icons md-64">
                      perm_contact_calendar
                    </i>
                  </div>
                </div>
              </div>
              <div className="row about-us-content">
                <div className="about-us-logo">
                  <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                    <i className="material-icons md-64">
                      people
                    </i>
                  </div>
                </div>
                <div className="about-us-paragraph">
                  <div className="about-us-title">How We do it</div>
                  <p className="about-us-content">
                    Nunc sed id semper risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id. Sit amet luctus venenatis lectus magna. Nullam ac tortor vitae purus faucibus ornare. Amet volutpat consequat mauris nunc congue nisi vitae. Enim sed faucibus turpis in. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget.
                  </p>
                </div>
              </div>
              <div className="row about-us-content">
                <div className="about-us-paragraph-unordered">
                  <div className="about-us-title">candidate services</div>
                  <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                    <div style={{ flex: 1}}>
                      <div className="service-icon">
                        <i className="material-icons md-white">
                          email
                        </i>
                      </div>
                    </div>
                    <div style={{flex: 8}}>
                      <div className="candidate-subtitle">
                        CV Critique
                      </div>
                      <div className="candidate-subtitle-content">
                        We will review your CV and make suggestions on how it could be better
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                    <div style={{ flex: 1}}>
                      <div className="service-icon">
                        <i className="material-icons md-white">
                          attach_money
                        </i>
                      </div>
                    </div>
                    <div style={{flex: 8}}>
                      <div className="candidate-subtitle">
                        Salary Advice
                      </div>
                      <div className="candidate-subtitle-content">
                        Find out what you're really worth
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                    <div style={{ flex: 1}}>
                      <div className="service-icon">
                        <i className="material-icons md-white">
                          face
                        </i>
                      </div>
                    </div>
                    <div style={{flex: 8}}>
                      <div className="candidate-subtitle">
                        Interview Preparation
                      </div>
                      <div className="candidate-subtitle-content">
                        Give yourself a competetive advantage with some tips and advice
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                    <div style={{ flex: 1}}>
                      <div className="service-icon">
                        <i className="material-icons md-white">
                          account_balance
                        </i>
                      </div>
                    </div>
                    <div style={{flex: 8}}>
                      <div className="candidate-subtitle">
                        Offer management
                      </div>
                      <div className="candidate-subtitle-content">
                        We will work with you to negotiate the best terms for you
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                    <div style={{ flex: 1}}>
                      <div className="service-icon">
                        <i className="material-icons md-white">
                          show_chart
                        </i>
                      </div>
                    </div>
                    <div style={{flex: 8}}>
                      <div className="candidate-subtitle">
                        Market Trends
                      </div>
                      <div className="candidate-subtitle-content">
                        What's goin on in the job market? Understanding the bigger picture helps you focus more on what's right for you
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                    <div style={{ flex: 1}}>
                      <div className="service-icon">
                        <i className="material-icons md-white">
                          check_circle
                        </i>
                      </div>
                    </div>
                    <div style={{flex: 8}}>
                      <div className="candidate-subtitle">
                        Training and skills advice
                      </div>
                      <div className="candidate-subtitle-content">
                        We will help you develope and expand your skillset, to increase the amount of Opportunities open up for you
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-logo-unordered">
                  <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', border: '3px solid #FFFFFF', width: 150, height: 150, backgroundColor: '#000000', borderRadius: '100px'}}>
                    <i className="material-icons md-64">
                      mail
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-testimonial section-candidate-testimonial">
          <div className="container">
            <div style={{marginBottom: '20px'}} className="expertise-title title-white">Candidate testimonials</div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span style={{fontSize: 100, color: '#000000', fontWeight: 'bold'}}>&#8220;</span>
              { this.state.candidateIndex == 0 ?
                <div className="client-testimony">
                  <div className="testimonial-title title-white">Country Manager</div>
                  <div className="testimonial-content title-white">
                    Nunc sed id semper risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id. Nullam ac tortor vitae purus faucibus ornare. Amet volutpat consequat mauris nunc congue nisi vitae. Enim sed faucibus turpis in. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget. Cum sociis natoque penatibus et. Nulla at volutpat diam ut venenatis tellus in metus. Nunc sed id semper risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id.
                  </div>
                </div> : null}
              { this.state.candidateIndex == 1 ?
                <div className="client-testimony">
                  <div className="testimonial-title title-white">State Manager</div>
                  <div className="testimonial-content title-white">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc sed id semper risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id.
                  </div>
                </div> : null}
              { this.state.candidateIndex == 2 ?
                <div className="client-testimony">
                  <div className="testimonial-title title-white">City Manager</div>
                  <div className="testimonial-content title-white">
                    Nunc sed id semper risusExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id. Nullam ac tortor vitae purus faucibus ornare. Amet volutpat consequat mauris nunc congue nisi vitae. Enim sed faucibus turpis in. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget. Cum sociis natoque penatibus et. Nulla at volutpat diam ut venenatis tellus in metus. Nunc sed id semper risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id.
                  </div>
                </div> : null}
              { this.state.candidateIndex == 3 ?
                <div className="client-testimony">
                  <div className="testimonial-title title-white">District Manager</div>
                  <div className="testimonial-content title-white">
                    Nunc sed id semper risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id. Nullam ac tortor vitae purus faucibus ornare. Amet volutpat consequat mauris nunc congue nisi vitae. Enim sed faucibus turpis in. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget. Cum sociis natoque penatibus et. Nulla at volutpat diam ut venenatis tellus in metus. Nunc sed id semper risus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi. Dictum sit amet justo donec enim diam. Dolor morbi non arcu risus quis varius quam quisque id.
                  </div>
                </div> : null}
              <span style={{fontSize: 100, color: '#000000', fontWeight: 'bold'}}>&#8221;</span>
            </div>
            <div style={{float: 'right', marginTop: '16px'}}>
              <div
                onClick={() => this.setState({candidateIndex: 0})}
                className={ this.state.candidateIndex != 0 ?
                "indicator-slider-enabled" : "indicator-slider-enabled indicator-slider-disabled"
                }></div>
              <div onClick={() => this.setState({candidateIndex: 1})} style={{marginLeft: 8}}
                className={ this.state.candidateIndex != 1 ?
                "indicator-slider-enabled" : "indicator-slider-enabled indicator-slider-disabled"
                }></div>
              <div onClick={() => this.setState({candidateIndex: 2})} style={{marginLeft: 8}} className={ this.state.candidateIndex != 2 ?
              "indicator-slider-enabled" : "indicator-slider-enabled indicator-slider-disabled"
              }></div>
              <div onClick={() => this.setState({candidateIndex: 3})} style={{marginLeft: 8}} className={ this.state.candidateIndex != 3 ?
              "indicator-slider-enabled" : "indicator-slider-enabled indicator-slider-disabled"
              }></div>
            </div>
          </div>
        </section>
        <section className="section-title" id="section_team">
          Meet The Team
        </section>
        <section className="section setion-team">
          <div className="triangle-bottom"><div></div></div>
          <div style={{	padding: '48px 0px'}} >
            <div className="container">
              <div className="expertise-title">The secret of our success</div>
              <div className="expertise-subtitle team-subtitle">We're a strong team of professional recruiters, problem solvers and thinkers who are enthusiastic about every project that we take on</div>
              <div className="row team-wrapper">
                <div className="col-sm-3">
                  <div className="card">
                    <div className="content card-content">
                      <div className="front">
                        <img style={{width: '100%', height: '99%'}} src="man1.jpg" />
                      </div>
                      <div className="back" style={{fontSize: 22}}>
                        <div className="team-name">Matt Sellwood</div>
                        <div className="team-job">Managing Director</div>
                        <div className="team-info">
                          <a href=""><img src="linkedin-48.png" width="16px" height="16px"/></a>
                          <a href=""><img src="facebook-48.png" width="16px" height="16px"/></a>
                          <a href=""><span style={{fontSize: 10, color: '#FFFFFF'}}>233 558 999</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="content">
                      <div className="front">
                        <img style={{width: '100%', height: '99%'}} src="man1.jpg" />
                      </div>
                      <div className="back">
                        <div className="team-name">Matt Sellwood</div>
                        <div className="team-job">Managing Director</div>
                        <div className="team-info">
                          <a href=""><img src="linkedin-48.png" width="16px" height="16px"/></a>
                          <a href=""><img src="facebook-48.png" width="16px" height="16px"/></a>
                          <a href=""><span style={{fontSize: 10, color: '#FFFFFF'}}>233 558 999</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="content">
                      <div className="front">
                        <img style={{width: '100%', height: '99%'}} src="man1.jpg" />
                      </div>
                      <div className="back">
                        <div className="team-name">Matt Sellwood</div>
                        <div className="team-job">Managing Director</div>
                        <div className="team-info">
                          <a href=""><img src="linkedin-48.png" width="16px" height="16px"/></a>
                          <a href=""><img src="facebook-48.png" width="16px" height="16px"/></a>
                          <a href=""><span style={{fontSize: 10, color: '#FFFFFF'}}>233 558 999</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="content">
                      <div className="front">
                        <img style={{width: '100%', height: '99%'}} src="man1.jpg" />
                      </div>
                      <div className="back">
                        <div className="team-name">Matt Sellwood</div>
                        <div className="team-job">Managing Director</div>
                        <div className="team-info">
                          <a href=""><img src="linkedin-48.png" width="16px" height="16px"/></a>
                          <a href=""><img src="facebook-48.png" width="16px" height="16px"/></a>
                          <a href=""><span style={{fontSize: 10, color: '#FFFFFF'}}>233 558 999</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div style={{padding: 8}}></div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="content">
                      <div className="front">
                        <img style={{width: '100%', height: '99%'}} src="man1.jpg" />
                      </div>
                      <div className="back">
                        <div className="team-name">Matt Sellwood</div>
                        <div className="team-job">Managing Director</div>
                        <div className="team-info">
                          <a href=""><img src="linkedin-48.png" width="16px" height="16px"/></a>
                          <a href=""><img src="facebook-48.png" width="16px" height="16px"/></a>
                          <a href=""><span style={{fontSize: 10, color: '#FFFFFF'}}>233 558 999</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="content">
                      <div className="front">
                        <img style={{width: '100%', height: '99%'}} src="man1.jpg" />
                      </div>
                      <div className="back">
                        <div className="team-name">Matt Sellwood</div>
                        <div className="team-job">Managing Director</div>
                        <div className="team-info">
                          <a href=""><img src="linkedin-48.png" width="16px" height="16px"/></a>
                          <a href=""><img src="facebook-48.png" width="16px" height="16px"/></a>
                          <a href=""><span style={{fontSize: 10, color: '#FFFFFF'}}>233 558 999</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="content">
                      <div className="front">
                        <img style={{width: '100%', height: '99%'}} src="man1.jpg" />
                      </div>
                      <div className="back">
                        <div className="team-name">Matt Sellwood</div>
                        <div className="team-job">Managing Director</div>
                        <div className="team-info">
                          <a href=""><img src="linkedin-48.png" width="16px" height="16px"/></a>
                          <a href=""><img src="facebook-48.png" width="16px" height="16px"/></a>
                          <a href=""><span style={{fontSize: 10, color: '#FFFFFF'}}>233 558 999</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="content">
                      <div className="front">
                        <img style={{width: '100%', height: '99%'}} src="man1.jpg" />
                      </div>
                      <div className="back">
                        <div className="team-name">Matt Sellwood</div>
                        <div className="team-job">Managing Director</div>
                        <div className="team-info">
                          <a href=""><img src="linkedin-48.png" width="16px" height="16px"/></a>
                          <a href=""><img src="facebook-48.png" width="16px" height="16px"/></a>
                          <a href=""><span style={{fontSize: 10, color: '#FFFFFF'}}>233 558 999</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-team-join">
          <div className="container">
            <div className="expertise-title">We're always looking for exceptional people to join us</div>
            <div className="row extra-margin">
              <div className="col-sm-6">
                <div className="about-us-title title-black">Career Enhancement</div>
                <p className="about-us-content content-black">
                  Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Sit amet luctus venenatis lectus magna. Nullam ac tortor vitae purus faucibus ornare. Amet volutpat consequat mauris nunc congue nisi vitae. Enim sed faucibus turpis in. Sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget. Nisi lacus sed viverra tellus in hac habitasse. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Cum sociis natoque penatibus et. Nulla at volutpat diam ut venenatis tellus in metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a style={{marginTop: 14, marginBottom: 32}} href="" className="btn btn-primary">
                  Join Us
                </a>
              </div>
              <div className="col-sm-6">
                <div className="about-us-title title-black">Benefits and rewards</div>
                <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                  <div style={{ flex: 1}}>
                    <div className="benefit-icon">
                      <i className="material-icons md-blue">
                        wb_sunny
                      </i>
                    </div>
                  </div>
                  <div style={{flex: 8}}>
                    <div className="team-join-subtitle">
                      Satigo Bank Holidays
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                  <div style={{ flex: 1}}>
                    <div className="benefit-icon">
                      <i className="material-icons md-blue">
                        access_alarm
                      </i>
                    </div>
                  </div>
                  <div style={{flex: 8}}>
                    <div className="team-join-subtitle">
                      Duvet Days
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                  <div style={{ flex: 1}}>
                    <div className="benefit-icon">
                      <i className="material-icons md-blue">
                        fastfood
                      </i>
                    </div>
                  </div>
                  <div style={{flex: 8}}>
                    <div className="team-join-subtitle">
                      Lunch clubs
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                  <div style={{ flex: 1}}>
                    <div className="benefit-icon">
                      <i className="material-icons md-blue">
                        mood
                      </i>
                    </div>
                  </div>
                  <div style={{flex: 8}}>
                    <div className="team-join-subtitle">
                      Gym membership
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                  <div style={{ flex: 1}}>
                    <div className="benefit-icon">
                      <i className="material-icons md-blue">
                        person_pin_circle
                      </i>
                    </div>
                  </div>
                  <div style={{flex: 8}}>
                    <div className="team-join-subtitle">
                      Elite trips
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', padding: '8px 0px', alignItems: 'center'}}>
                  <div style={{ flex: 1}}>
                    <div className="benefit-icon">
                      <i className="material-icons md-blue">
                        event_available
                      </i>
                    </div>
                  </div>
                  <div style={{flex: 8}}>
                    <div className="team-join-subtitle">
                      Quaterly team events
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-title" id="section_contact">
          Contact
        </section>
        <section className="section section-contact">
          <div className="triangle-bottom"><div></div></div>
          <div style={{	padding: '48px 0px'}} >
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <form>
                    <div className="form-group">
                      <label style={{color: '#FFFFFF', textTransform: 'uppercase', fontSize: 13}}>Your name</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label style={{color: '#FFFFFF', textTransform: 'uppercase', fontSize: 13, fontWeight: 600}}>Your email</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label style={{color: '#FFFFFF', textTransform: 'uppercase', fontSize: 13, fontWeight: 600}}>Your phone number</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label style={{color: '#FFFFFF', textTransform: 'uppercase', fontSize: 13, fontWeight: 600}}>Your message</label>
                      <textarea type="text" className="form-control" rows="3"/>
                    </div>
                    <a style={{marginTop: 8, marginBottom: 16}} href="" className="btn btn-black">
                      Send
                    </a>
                  </form>
                </div>
                <div className="col-sm-6 col-md-5 col-md-offset-1">
                  <div style={{ height: '280px', width: '100%', marginBottom: 16}}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg'}}
                      defaultCenter={this.props.center}
                      defaultZoom={this.props.zoom}
                    >

                    </GoogleMapReact>
                  </div>
                  <div className="social-links">
                    <div style={{flex: 1}}>
                      <div style={{color: '#FFFFFF', textTransform: 'uppercase', fontSize: 14, fontWeight: 600}}>Address</div>
                      <p style={{color: '#FFFFFF', lineHeight: 1.5}}>30 St Mary Ave <br/>London,<br/>London<br/>EC3A 55,<br/>UK</p>
                      <div style={{color: '#FFFFFF', textTransform: 'uppercase', fontSize: 14, fontWeight: 600, marginTop: 32}}>Email</div>
                      <p style={{color: '#FFFFFF', lineHeight: 1.5}}>hello@satigo.com</p>
                    </div>
                    <div style={{flex: 1}}>
                      <div style={{color: '#FFFFFF', textTransform: 'uppercase', fontSize: 14, fontWeight: 600}}>Call us</div>
                      <p style={{color: '#FFFFFF', lineHeight: 1.5}}>02053 363 478</p>
                      <div style={{color: '#FFFFFF', textTransform: 'uppercase', fontSize: 14, fontWeight: 600, marginTop: 32}}>
                        Be social
                      </div>
                      <div>
                        <img src="facebook-48.png" style={{width: 16, marginRight: 8}} />
                        <span style={{color: '#FFFFFF'}}><a hrf="">Facebook</a></span>
                      </div>
                      <div>
                        <img src="twitter-48.png" style={{width: 16, marginRight: 8}} />
                        <span style={{color: '#FFFFFF'}}><a hrf="">Twitter</a></span>
                      </div>
                      <div>
                        <img src="linkedin-48.png" style={{width: 16, marginRight: 8}} />
                        <span style={{color: '#FFFFFF'}}><a hrf="">LinkedIn</a></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-btn-wrapper">
                    <a style={{marginTop: 16}} href="" className="btn btn-primary">
                      Book a meeting
                    </a>
                    <a style={{marginTop: 16}} href="" className="btn btn-secondary">
                      Download our Vcard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="section">
          <div className="section_footer">
            <div className="container tweet-flex">
              <img src="twitter-64.png" className="tweet-icon"/>
              <span className="triangle-left"></span>
              <div className="tweet-box">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span className="tweet-comma">&#8220;</span>
                  <div className="tweet-content">
                    <div className="title-white tweet-content">
                      Please send your cv at veronica.haldi@satigo.com to be included into our database and considered for any relevant IT roles we have.
                    </div>
                    <div className="tweet-info">Time ago <span style={{color: '#4169E1'}}>130 days</span> via <span style={{color: '#4169E1'}}>Twitter</span></div>
                  </div>
                  <span className="tweet-comma">&#8221;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section_copyright">
            <div style={{textAlign: 'center', color: '#CF842D'}}>&copy; Copyright 2013 Satigo Ltd. All right reserved.</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
