import React, { Component } from "react";
import "./styles/App.scss";
import Navbar from "./components/navbar";
import DropFilter from "./components/dropFilter";
import SearchBox from "./components/searchBox";
import TableHeader from "./components/tableHeader";
import State from "./components/state";
import District from "./components/district";
import Township from "./components/township";
import data from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLevel = this.handleLevel.bind(this);

    this.state = {
      selectedRegLevel: "State",
    };
  }

  //Change selected level based on what user selects in dropFilter
  handleLevel(level) {
    this.setState({ selectedRegLevel: level });
  }

  render() {
    const selectedLevel = this.state.selectedRegLevel;
    const onlyDistArr = data.map(({ subRegions }) => subRegions).flat();
    const onlyTownArr = onlyDistArr.map(({ subRegions }) => subRegions).flat();
    let renderRegion = [];

    //Renders State or District or Township component based on what user selects in DropFilter
    if (selectedLevel === "State") {
      console.log(data);
      renderRegion = <State />;
    } else if (selectedLevel === "District") {
      renderRegion = onlyDistArr.map((district) => (
        <District district={district} />
      ));
    } else {
      renderRegion = onlyTownArr.map((town) => <Township town={town} />);
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="tableFilter">
          <DropFilter
            // selectedLevel={this.state.selectedRegLevel}
            handleLevel={(selLevel) => this.handleLevel(selLevel)}
          />
          <SearchBox />
        </div>
        <table>
          <TableHeader />
          <tbody>{renderRegion}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
