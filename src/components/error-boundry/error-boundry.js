import React, { Component } from "react";

import ErrorInd from "../error-ind";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorInd />;
    }

    return this.props.children;
  }
}
