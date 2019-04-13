import React, { Component } from "react";
import { List, CellMeasurerCache, CellMeasurer } from "react-virtualized";

export default class ComplexList extends Component {
  // rowRenderer = ({
  //   key, // Unique key within array of rows
  //   index, // Index of row within collection
  //   isScrolling, // The List is currently being scrolled
  //   isVisible, // This row is visible within the List (eg it is not an overscanned row)
  //   style // Style object to be applied to row (to position it)
  // }) {
  //   return (
  //     <div key={key} style={style}>
  //       {this.props.data[index].name}
  //     </div>
  //   );
  // }
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      filteredData: []
    };
  }
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
  rowRenderer = ({ key, index, isScrolling, isVisible, style }) => {
    if (this.state.searchValue === "") {
      return (
        <div key={key} style={style}>
          {this.props.data[index].name}
        </div>
      );
    } else {
      return (
        <div key={key} style={style}>
          {this.state.filteredData[index].name}
        </div>
      );
    }
  };
  render() {
    console.log(this.props);
    console.log(this.state);
    const renderedData =
      this.state.searchValue !== "" ? this.state.filteredData : this.props.data;
    return (
      <div>
        <input onChange={this.handleSearch} value={this.state.searchValue} />
        <div className="header">{this.props.renderHeader(this.props)}</div>
        <List
          width={300}
          height={300}
          rowCount={renderedData.length}
          rowHeight={20}
          rowRenderer={this.rowRenderer}
        />
        {/* <div className="footer">
          {this.props.data.map(item => this.props.renderListItem(item))}
        </div> */}
        <div className="footer">{this.props.children}</div>
      </div>
    );
  }
}
