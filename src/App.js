import React, { Component } from 'react';
import items from "./items.json"
import './App.css';
import Wiper from "./components/wiper";
import Logo from './svg/logo.svg'
import Showcase from './components/showcase';
import Legend from './components/legend';
import Cta from './components/cta';
import IG from './svg/ig.svg'
import LI from './svg/linkedin.svg'
import FB from './svg/fb.svg'
import TT from './svg/twitter.svg'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentActive: 0,
      menuOpen: false,
      sideOpen: false,
      showButton: false,
      currentFilter: ''
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    if ((document.body.scrollHeight - window.scrollY) > 900 && window.scrollY > 600) {
      this.setState({ showButton: true })
    }
    else {
      this.setState({ showButton: false })
    }
  }

  onFilter = index => {
    this.setState({ currentActive: index })
    if (index === 0) {
      this.setState({ currentFilter: "" })
    }
    else {
      this.setState({ currentFilter: this.categories[index] })
    }

  }

  categories = ["All",
    "Food & Beverage",
    "Media",
    "Transport & Logistics",
    "Banking & Finance",
    "Lifestyle",
    "Co-incubation",
    "Healthcare",
    "Retail & Entertainment",
    "Telco",
    "Others",
    "Start-ups"]

  render() {
    if (this.state.isLoading) {
      return <Wiper />
    }
    else {
      var filteredList = items.filter((item, i) => item.category.includes(this.state.currentFilter))
      return (
        <div className={this.state.menuOpen ? "blocked" : ""}>
          <div
            onClick={() => this.setState({ sideOpen: !this.state.sideOpen })}
            className={this.state.sideOpen ? "sideMenu openSide" : "sideMenu"}>
            {this.categories.map((each, i) => {
              return (<div onClick={() => this.onFilter(i)}
                key={i}
                className={i === this.state.currentActive ? "active" : "inactive"}
              >
                <p>
                  {each}
                </p>
              </div>
              )
            }

            )}

            <Legend />
          </div>
          {
            this.state.showButton &&
            <div className={this.state.sideOpen ? "moved filterButton" : "filterButton"}
              onClick={() => this.setState({ sideOpen: !this.state.sideOpen })}>
              <p>
                Filter
            </p>
            </div>
          }


          {
            this.state.menuOpen &&
            <div className="links"
              onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}>
              <div>
                <a href="https://www.codigo.co/work">
                  Work
                  </a>
              </div>
              <div>
                <a href="https://www.codigo.co/solutions">
                  Solutions
                </a>
              </div>
              <div>
                <a href="https://www.codigo.co/services">
                  Services
                </a>
              </div>
              <div>
                <a href="https://www.codigo.co/about-us">
                  About Us
                </a>
              </div>
              <div>
                <a href="https://www.codigo.co/blog">
                  Blog
                </a>
              </div>
              <div>
                <a href="https://www.codigo.co/blog">
                  Request a quote
                </a>
              </div>
              <div>
                <a href="https://www.codigo.co/blog">
                  Let's chat!
                </a>
              </div>
            </div>
          }
          <div className="parent"
            onScroll={() => this.onScroll()}>
            <div className="menu-bar">
              <div onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
                className="burger">
                <div
                  className={this.state.menuOpen ? "opened circle" : "circle"}>
                </div>

                <div className={this.state.menuOpen ? "lines cross" : "lines"}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <img src={Logo} className="logo" alt="Codigo Logo" />
              <ul className="nav-links">
                <li>
                  <a className="active" href="https://www.codigo.co/work">
                    Work
                </a>
                </li>
                <li>
                  <a href="https://www.codigo.co/solutions">
                    Solutions
                </a>
                </li>
                <li>
                  <a href="https://www.codigo.co/services">
                    Services
                </a>
                </li>
                <li>
                  <a href="https://www.codigo.co/blog">
                    Blog
                </a>
                </li>
                <li>
                  <div className="button">
                    Request a quote
                </div>
                </li>
              </ul>
            </div>
            <div className="top-container">
              <h2>
                Here's 5% of <br />our published work.
            </h2>
              <div className="selections">
                <div className="filters">
                  {this.categories.map((each, i) => {
                    return (<div onClick={() => this.onFilter(i)}
                      key={i}
                      className={i === this.state.currentActive ? "active" : "inactive"}
                    >
                      <p>
                        {each}
                      </p>
                    </div>)
                  }
                  )}
                </div>
                <Legend />
              </div>
            </div>
            <div className="showcase-container">
              {filteredList.map((item, i) => <Showcase key={i} item={item} />)}
            </div>
            <div className="footer">
              <p className="footer-top">
                Let's have a chat
            </p>
              <div className="ctas">
                <Cta text={["Build", "Help you build something"]} />
                <Cta text={["Co-incubate", "Co-incubate on an idea together"]} />
                <Cta text={["Customise", "Customise a solution for your business"]} />
                <Cta text={["Organise", "Organise learning sessions with us"]} />
              </div>
              <div className="socials">
                <img src={FB} alt="Facebook" />
                <img src={TT} alt="Twitter" />
                <img src={IG} alt="Instagram" />
                <img src={LI} alt="LinkedIn" />
              </div>
              <div className="final">
                Copyright © Codigo - Mobile App Developer Singapore
                <br />
                +65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971
              </div>

            </div>
          </div>
        </div >
      )

    }
  }
}
