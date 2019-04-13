import React, { PureComponent } from "react";

import { List } from "react-virtualized";

class SerachList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ""
    };
  }

  handleSearch = searchKey => {
    this.setState({
      searchKey
    });
  };

  searchOnItems = () => {
    if (!this.state.searchKey) {
      return this.props.listItems;
    }

    return this.props.listItems.filter(
      item =>
        item[this.getDisplayName()]
          .toLowerCase()
          .indexOf(this.state.searchKey.toLowerCase()) !== -1
    );
  };

  getList = () => {
    if (this.props.isLoading) {
      return <p> Loading... </p>;
    } else if (this.props.listItems && this.props.listItems.length === 0) {
      return (
        <p className="listEmptyTitle">{this.props.emptyListMessage || ""}</p>
      );
    }
    const searchResults = this.searchOnItems();
    if (searchResults.length === 0) {
      return (
        <p className="listEmptyTitle">
          {this.props.noSearchResultsMessage
            ? this.props.emptyListMessage
            : "No results for the search"}
        </p>
      );
    }
    return (
      <List
        width={800}
        height={700}
        rowHeight={40}
        rowRenderer={this.rowRenderer}
        overscanRowCount={30}
        noRowsRenderer={this.noRowsRenderer}
      />
    );
  };
  rowRenderer = ({ index, isScrolling, key, style }) => {
    if (this.state.symbols.length > 0) {
      return (
        <div style={style} key={key}>
          {/* <div>{this.props.symbols[index].id}</div> */}
          <div>{this.state.symbols[index].currency}</div>
        </div>
      );
    }
    return <div> no data</div>;
  };

  noRowsRenderer = () => {
    return <div>No rows</div>;
  };

  render() {
    return (
      <div className="serachListContainer">
        <input onChange={this.handleSearch} />
        {this.getList()}
        serach list
      </div>
    );
  }
}

export default SearchList;
