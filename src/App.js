import React, { Component } from 'react';
import './styles/css/custom.css';
import Images from './assets/index';
import TableData from './data/table-data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    if (TableData) {
      this.setState({ data: TableData });
    }
  }

  onClickDistrict = (data) => {
    const { districts } = data;

    districts.map((district) => {
      // If expand districts onClick, show districts
      if (district.visible === false) {
        district.visible = true;
      } else if (district.visible === true) {
        // If collapse districts onClick, hide districts
        district.visible = false;

        // Hide all townships
        if (district.townships) {
          district.townships.map((township) => {
            township.visible = false;
          });
        }
      }
    });
    this.forceUpdate();
  }

  onClickTownship = (data) => {
    const { townships } = data;

    townships.map((township) => {
      // If expand townships onClick, show townships
      if (township.visible === false) {
        township.visible = true;
      } else if (township.visible === true) {
        // If collapse townships onClick, show townships
        township.visible = false;
      }
    });
    this.forceUpdate();
  }

  buildStateRow = (data) => {
    let districtRows;
    let townshipRows;

    if (data.districts) {
      districtRows = data.districts.map(this.buildDistrictRow);

      data.districts.forEach((district) => {
        if (district.townships) {
          townshipRows = district.townships.map(this.buildTownshipRow);
        }
      });
    }

    return (
      <tbody>
        <tr>
          <td className="state">
            <div className="row justify-content-between">
              <div>
                <img src={Images.stateIcon} alt="state" height="20" />
                <span>{data.region}</span>
                <img src={Images.downloadIcon} alt="download" height="20" width="20" />
              </div>

              {data.districts && (
                <button
                  className="btn-row"
                  type="button"
                  onClick={() => this.onClickDistrict(data)}
                >
                  <div className="row justify-content-between">
                    <div>{`${data.districts.length} Districts `}</div>
                    <div>+</div>
                  </div>
                </button>
              )}

            </div>

          </td>
          <td>{data.lastInput}</td>
          <td>{data.numberOfForms}</td>
          <td>{data.numberOfVoters}</td>
          <td>{data.update}</td>
        </tr>
        {districtRows}
        {townshipRows}
      </tbody>
    );
  }

  buildDistrictRow = (data) => (
    <tr style={{ display: data.visible ? 'table-row' : 'none' }}>
      <td className="district">
        <div className="row justify-content-between">
          <div>
            <img src={Images.districtIcon} alt="district" height="20" />
            <span>{data.region}</span>
            <img src={Images.downloadIcon} alt="download" height="20" width="20" />
          </div>

          {data.townships && (
            <button
              className="btn-row"
              type="button"
              onClick={() => this.onClickTownship(data)}
            >
              <div className="row justify-content-between">
                <div>{`${data.townships.length} Townships`}</div>
                <div>+</div>
              </div>

            </button>
          )}
        </div>
      </td>
      <td>{data.lastInput}</td>
      <td>{data.numberOfForms}</td>
      <td>{data.numberOfVoters}</td>
      <td>{data.update}</td>
    </tr>
  )


  buildTownshipRow = (data) => (
    <tr style={{ display: data.visible ? 'table-row' : 'none' }}>
      <td className="township">
        <img src={Images.townshipIcon} alt="township" height="20" />
        <span>{data.region}</span>
        <img src={Images.downloadIcon} alt="download" height="20" width="20" />
      </td>
      <td>{data.lastInput}</td>
      <td>{data.numberOfForms}</td>
      <td>{data.numberOfVoters}</td>
      <td>{data.update}</td>
    </tr>
  )

  render() {
    const { data } = this.state;
    const tableRows = data.map(this.buildStateRow);

    // console.log(data);

    return (
      <div className="container">

        <div className="navbar">
          <div className="row">
            <div className="col">
              <div className="navbar-logo">
                <img src={Images.navbarLogo} alt="navbar-logo" height="32" width="32" />
              </div>
            </div>
            <div className="col-4">
              <div className="navbar-header">Reports</div>
            </div>
            <div className="navbar-tab bg-color-tab">Overall</div>
            <div className="navbar-tab">Specific</div>
          </div>
        </div>

        <div className="body">
          <div className="row justify-content-center">
            <table>
              <tr className="filter-search" colSpan="5">
                <td className="px-2" colSpan="5">Filter and search</td>
              </tr>
              <tr>
                <th className="text-left px-2">Region</th>
                <th>Last input</th>
                <th>Number of forms</th>
                <th>Number of Voters</th>
                <th>Update</th>
              </tr>
              {tableRows}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
