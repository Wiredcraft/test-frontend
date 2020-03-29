import React, { Component } from "react";
import "./styles/App.scss";
import Navbar from "./components/navbar2";
import TableHeader from "./components/tableHeader";
import DropFilter from "./components/dropFilter";
import State from "./components/state";
import District from "./components/district";
import Township from "./components/township";
import SearchBox from "./components/searchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLevel = this.handleLevel.bind(this);

    this.state = {
      selectedRegLevel: "State"
    };
  }

  //Default state when page is loaded
  // componentDidMount() {
  //   this.setState({ selectedRegLevel: "State" });
  // }

  handleLevel(level) {
    this.setState({ selectedRegLevel: level });
  }

  render() {
    const selectedLevel = this.state.selectedRegLevel;
    let renderRegion = [];

    if (selectedLevel === "State") {
      renderRegion = <State />;
    } else if (selectedLevel === "District") {
      renderRegion = <State />;
      // renderRegion = <District district={district} />;
    } else {
      renderRegion = <State />;
      // renderRegion.map(town => <Township town={town} />);
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="tableFilter">
          <DropFilter
            // selectedLevel={this.state.selectedRegLevel}
            handleLevel={selLevel => this.handleLevel(selLevel)}
          />
          <SearchBox />
        </div>

        <TableHeader />

        {renderRegion}

        {/* <State /> */}
      </React.Fragment>
    );
  }
}

export default App;
