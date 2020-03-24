import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TableHeader from "./components/tableHeader";
import DropFilter2 from "./components/dropFilter2";
import State from "./components/state";
import District from "./components/district";
import Township from "./components/township";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLevel = this.handleLevel.bind(this);

    this.state = {
      selectedRegLevel: "State"
    };
  }

  // componentDidMount() {
  //   this.setState({ selectedRegLevel: "State" });
  // }

  handleLevel(level) {
    this.setState({ selectedRegLevel: level });

    console.log("currentLevel is   " + this.state.selectedRegLevel);
  }

  render() {
    const selectedLevel = this.state.selectedRegLevel;
    let renderRegion = [];

    if (selectedLevel === "State") {
      renderRegion = <State />;
    } else if (selectedLevel === "District") {
      renderRegion = null;
      // renderRegion.map(town => <Township town={town} />);
      // renderRegion = <District district={district} />;
    } else {
      renderRegion = null;
      // renderRegion.map(town => <Township town={town} />);
    }

    return (
      <React.Fragment>
        <Navbar />

        {/* <select onChange={event => this.handleLevel(event.target.value)}>
          <option value="State">State</option>
          <option value="District">District</option>
          <option value="Township">Township</option>
        </select> */}

        <DropFilter2
          // selectedLevel={this.state.selectedRegLevel}
          // onLevelSelect={selLevel => this.handleLevel(selLevel)}
          handleLevel={selLevel => this.handleLevel(selLevel)}
        />

        <TableHeader />

        {renderRegion}

        {/* <State /> */}
      </React.Fragment>
    );
  }
}

export default App;
