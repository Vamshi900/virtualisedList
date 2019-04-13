import React, { Component } from "react";

export default class SearchContainer extends Component {
  state = {
    searchValue: "",
    filteredData: []
  };
  handleSearch = event => {
    const filteredData = this.props.data.filter(item => {
      return (
        item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      );
    });

    this.setState({
      filteredData,
      searchValue: event.target.value
    });
  };

  render() {
    console.log("inside serta");
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <input onChange={this.handleSearch} value={this.state.searchValue} />
        {this.props.children({
          ...this.props,
          ...this.state
        })}
      </div>
    );
  }
}
