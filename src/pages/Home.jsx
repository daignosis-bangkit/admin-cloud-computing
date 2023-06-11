import React from "react";
import { withRouter } from "react-router-dom";

import { keepLogin } from "../helper";

class Home extends React.Component {
  state = {};

  redirect = () => {
    const { history } = this.props;

    return history.push(`/login`);
  };

  componentDidMount() {
    if (!keepLogin()) this.redirect();
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default withRouter(Home);
