import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

import logoDefault from "../../assets/images/logo/logo.png";
import logoLight from "../../assets/images/logo/logo-light.png";
import logoDark from "../../assets/images/logo/logo-dark.png";
import logoSymbolDark from "../../assets/images/logo/logo-symbol-dark.png";
import logoSymbolLight from "../../assets/images/logo/logo-symbol-light.png";
import logoAllDark from "../../assets/images/logo/logo-all-dark.png";


class HeaderFive extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    const { logo, color, headerPosition } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = <img src={logoLight} alt="Trydo" />;
    } else if (logo === "dark") {
      logoUrl = <img src={logoDark} alt="Trydo" />;
    } else if (logo === "symbol-dark") {
      logoUrl = <img src={logoSymbolDark} alt="Trydo" />;
    } else if (logo === "all-dark") {
      logoUrl = <img src={logoAllDark} alt="Trydo" />;
    } else if (logo === "symbol-light") {
      logoUrl = <img src={logoSymbolLight} alt="Trydo" />;
    } else {
      logoUrl = <img src={logoDefault} alt="Trydo" />;
    }

    return (
      <header
        className={`header-area formobile-menu ${headerPosition} ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="header-left">
                  <div className="logo">
                    <a href="/">{logoUrl}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-6">
                <div className="header-right justify-content-end">
                  <nav className="mainmenunav d-lg-block">
                    <ul className="mainmenu">
                      <li className="has-droupdown">
                        <Link to="#">Home</Link>
                      
                      </li>
                      <li className="has-droupdown">
                        <Link to="/">Service</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/contact">Homecare Physiotherapy</Link>
                          </li>
                          <li>
                            <Link to="/contact"> Pediatric Physiotherapy</Link>
                          </li>
                          <li>
                            <Link to="/contact">Pre and Post Surgery Rehabilitation</Link>
                          </li>
                        </ul>
                      </li>
                      
                     
                    </ul>
                  </nav>
                  <div className="header-btn">
                    <Link
                      className="rn-btn"
                      to="/contact"
                    >
                      <span>Contact us</span>
                    </Link>
                  </div>
                  {/* Start Humberger Menu  */}
                  <div className="humberger-menu d-block d-lg-none pl--20">
                    <span
                      onClick={this.menuTrigger}
                      className="menutrigger text-white"
                    >
                      <FiMenu />
                    </span>
                  </div>
                  {/* End Humberger Menu  */}
                  <div className="close-menu d-block d-lg-none">
                    <span
                      onClick={this.CLoseMenuTrigger}
                      className="closeTrigger"
                    >
                      <FiX />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderFive;
