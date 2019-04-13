import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import * as selectors from "./data/selectors";
import { withStyles } from "@material-ui/core/styles";

import SearchContainer from "./components/SearchContainer";
import LoadContent from "./components/LoadContent";
import ComplexList from "./components/ComplexList";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbols: [],
      count: 0
    };
  }

  getSymbols = () => {
    let responseList = {
      symbols: []
    };
    let symbol = {};
    for (let i = 1; i <= 10000; i++) {
      symbol = {};
      symbol.id = i;
      symbol.currency = "Record :::  " + i;
      symbol.name = "Record :::  " + i;
      responseList.symbols.push(symbol);
    }
    console.log(responseList.symbols);
    const symbolsData = responseList.symbols;
    console.log(symbolsData);
    this.setState({ symbols: symbolsData });
    // this.props.getSymbolsList();
  };
  componentDidMount() {
    this.getSymbols();
  }
  updateCounter = event => {
    event.preventDefault();
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        I am the default home page
        <butoon onClick={this.updateCounter}>add</butoon>
        <p> {this.state.count}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => {
          return (
            <div>
              {" "}
              {item}
              <LoadContent url="https://5cab33cdc85e05001452e651.mockapi.io/data/flags">
                {({ loading, error, data }) => {
                  if (loading) return <span>Loading...</span>;
                  if (error) return <span>Error loading</span>;

                  return (
                    <div>
                      <ComplexList
                        data={this.state.symbols}
                        renderHeader={() => (
                          <span>
                            {loading ? "Loading..." : "Header Content"}
                          </span>
                        )}
                        renderListItem={item => <div>{item.name}</div>}
                      >
                        <div>We have {data.length} items</div>
                      </ComplexList>
                      {/* <SearchContainer data={data}>
                  {({ data, filteredData }) => {
                    console.log(data);
                    console.log(filteredData);
               
                  }}
                </SearchContainer> */}
                    </div>
                  );
                }}
              </LoadContent>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    symbols: selectors.getSybmbols(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSymbolsList: () => {
      dispatch(actions.getSymbolsList());
    }
  };
}
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
