import React, { Component } from "react";
import ErrorInd from "../error-ind";
import Spinner from "../spiner";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };
    update() {
      this.setState({
        loading: true,
        error: false,
      });
      this.props
        .getData()
        .then((data) => {
          this.setState({
            data,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    }
    componentDidMount() {
      this.update();
    }
    componentDidUpdate(prevProps) {
      if (prevProps.getData !== this.props.getData) this.update();
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorInd />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
