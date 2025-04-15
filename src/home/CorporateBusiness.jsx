import React, { Component, Fragment } from "react";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
import Team from "../blocks/team/TeamTwo";
import Accordion01 from "../elements/Accordion";
import { Link } from "react-router-dom";
import Helmet from "../component/common/Helmet";

import {
  FiCast,
  FiLayers,
  FiUsers,
  FiChevronUp,
  FiCheck,
} from "react-icons/fi";
import { SiTrustpilot } from "react-icons/si";
import { IoAccessibility } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import CounterOne from "../elements/counters/CounterOne";
import BrandOne from "../elements/Brand";

import about from "../assets/images/about/about-4.png";
import about2 from "../assets/images/about/about-3.png";

const SlideList = [
  {
    textPosition: "text-right",
    bgImage: "bg_image--32",
    category: "",
    title: "PHYSIO CARE.",
    description:
      "India's Fastest Growing Physiotherapy & Chiropractor Services Provider",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--31",
    category: "",
    title: "THOROUGHLY VETTED EXPERTS.",
    description:
      "licensed & highly trained Physiotherapists",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const ServiceListOne = [
  {
    icon: <IoAccessibility />,
    title: "Ease of Access",
    description:
      "Pain Relief and Recovery with the best physiotherapy near you.",
  },
  {
    icon: <FiLayers />,
    title: "Result Oriented",
    description:
      "Smartcare patients are achieving breakthrough results",
  },
  {
    icon: <GiProgression />,
    title: "Trusted",
    description:
      "Team certified & trained in latest advanced physio techniques",
  },
];

const starndardService = [
  {
    image: "01",
    title: "Thinking Development",
    description: "I throw myself down among the tall grass by the stream",
  },
  {
    image: "02",
    title: "Business Consulting",
    description: "I throw myself down among the tall grass by the stream",
  },
  {
    image: "03",
    title: "Biseness Development",
    description: "I throw myself down among the tall grass by the stream",
  },
];

class CorporateBusiness extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    var namesItemOne = [
      "Interferential Therapy",
      "Chiropractic Therapy",
      "Ultrasound Therapy",
      "Laser Therapy",
      "Soft Tissue Mobilization"
    ];
    var namesItemTwo = [
      "Home Care Physiotherapy",
      "Pediatric Physiotherapy",
      "Pre and Post Surgery Rehabilitation",
    ];

    const PostList = BlogContent.slice(0, 3);

    return (
      <Fragment>
        <Helmet pageTitle="Corporate Business" />

        {/* Start Header Area  */}
        <Header
          headerPosition="header--static logoresize"
          logo="all-dark"
          color="color-black"
        />
        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div className="slider-wrapper">
          <div className="slider-activation">
            <Slider className="rn-slick-dot dot-light" {...slideSlick}>
              {SlideList.map((value, index) => (
                <div
                  className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ""}
                          {value.title ? (
                            <h1 className="title">{value.title}</h1>
                          ) : (
                            ""
                          )}
                          {value.description ? (
                            <p className="description">{value.description}</p>
                          ) : (
                            ""
                          )}
                          {value.buttonText ? (
                            <div className="slide-btn">
                              <Link
                                className="rn-button-style--2 btn-solid"
                                to={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </Link>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* End Slider Area   */}
        <div className="rn-blog-area pt--120 pb--80 bg_color--1">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center">
                  <h2 className="title">360 Degree Physio Care</h2>
                  <p>
                  We are committed to ensuring that our clients have easy access to our physiotherapy services,
                   whether it's at any of our Clinics or through scheduling a convenient Home visit.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href="/blog-details">
                        <img
                          className="w-100"
                          src={value.images}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href="/blog-details">{value.title}</a>
                      </h4>
                      <div className="blog-btn">
                        <a className="rn-btn text-white" href="/contact">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Start Service Area */}
        <div className="service-area ptb--30 bg_color--1">
          <div className="container">
            <div className="row service-one-wrapper">
              {ServiceListOne.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a className="text-center" href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Featured Service Area  */}
       
              {/* Start Single Service  */}
         
              {/* End Single Service  */}

              {/* Start Single Service  */}
              
              {/* End Single Service  */}
          
        {/* End Featured Service Area  */}

        {/* Start Counterup Area */}
        <div
          className="counterup-area pb--80 pt--40 bg_image bg_image--17 theme-text-white"
          data-black-overlay="7"
        >
          <div className="container">
            <CounterOne />
          </div>
        </div>
        {/* End Counterup Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <img className="w-100" src={about} alt="About Images" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">ADVANCED PHYSIOTHERAPY CLINICS</h2>
                    <p>
                    With expertise, our Clinics are equipped with latest approved technologies in Spine,
                     Sports & Chiropractic Care to ensure that you get the best care. Our advanced machine's include
                    </p>
                  </div>
                  <div className="accordion-wrapper mt--30">
                    <Accordion01 />
                  </div>
                  <div className="about-button mt--50">
                    <a className="rn-button-style--2 btn-solid" href="/contact">
                      See how it works
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Team Area  */}
       
         
        {/* End Team Area  */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">About</h2>
                    <p className="description">
                    We offer physiotherapy treatments across Neuro/ Ortho/ Chiro/ Pediatrics/ Geriatrics/ Sports
                     related issues covering a wide range of conditions & symptoms
                    </p>
                  </div>
                  <div className="mt--30">
                    <h4>Therapies Offered.</h4>
                    <ul className="list-style--1">
                      {namesItemOne.map((name, index) => {
                        return (
                          <li key={index}>
                            <FiCheck /> {name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="mt--30">
                    <h4>Services Offered.</h4>
                    <ul className="list-style--1">
                      {namesItemTwo.map((name, index) => {
                        return (
                          <li key={index}>
                            <FiCheck /> {name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="thumbnail position-relative">
                  <img
                    className="w-100"
                    src={about2}
                    alt="About Images"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="ZOoVOfieAF8"
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Brand Area  */}
       
        {/* End Brand Area  */}

        {/* Start Pricing Tbale Area  */}
    
        
        {/* End Pricing Tbale Area  */}

        {/* Start Blog Area */}
 
        {/* End Blog Area */}

        {/* Start call To Action  */}
        <CallAction />
        {/* End call To Action  */}

        {/* Start Footer Style  */}
       
        {/* End Footer Style  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}
export default CorporateBusiness;
