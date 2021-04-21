import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

class Layout extends React.Component {
  navigate() {
    console.log(this.props.history);
    this.props.history.push("/");
  }
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
