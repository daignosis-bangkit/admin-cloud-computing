import React from "react";

class Header extends React.Component {
  state = {
    menu: false,
  };

  menu = () => {
    if (this.state.menu) this.setState({ menu: false });
    else this.setState({ menu: true });
  };

  render() {
    return (
      <>
        <div className="header">
          <div
            className={`hamburger d-inline-block ${
              this.state.menu ? "hamburger-active" : null
            }`}
            onClick={this.menu}
          >
            <i className="bi bi-list d-inline-block"></i>
          </div>
          <h5 className="mx-3 d-inline-block">DAIGNOSIS</h5>
        </div>
        <div
          className={`header-menu ${
            this.state.menu ? "header-menu-active" : null
          }`}
        >
          <div className="menu">
            <li
              className={`li ${
                window.location.pathname === "/stats" ? "li-active" : null
              }`}
            >
              <a href="/stats">Stats</a>
            </li>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
