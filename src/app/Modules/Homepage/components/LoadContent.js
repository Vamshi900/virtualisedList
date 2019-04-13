import React, { Component } from "react";

export default class LoadContent extends Component {
  state = {
    loading: true,
    error: false,
    data: []
  };

  componentDidMount() {
    fetch(this.props.url)
      // we should check status code here and throw for errors so our catch will work.
      .then(res => res.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(err => this.setState({ loading: false, error: true }));
  }

  render() {
    console.log(this.props.children);

    return (
      <div>
        {this.props.children({
          ...this.props,
          ...this.state
        })}
      </div>
    );
  }
}
