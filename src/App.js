// Created by Lucia Ma
import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import Images from './assets/index';
import TableData from './data/table-data.json';
import 'react-dropdown/style.css';
import './styles/css/custom.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterValue: '',
      filterOptions: ['State', 'District', 'Township'],
      searchValue: '',
    };
  }

  componentDidMount() {
    if (TableData) {
      this.setState({ data: TableData });
    }
  }

  getInitState = () => {
    const { data } = this.state;

    data.map((state) => {
      state.visible = true;
      if (state.districts) {
        state.districts.map((district) => {
          district.visible = false;
          if (district.townships) {
            district.townships.map((township) => {
              township.visible = false;
            });
          }
        });
      }
    });
  }

  toggleDistrict = (data, id) => {
    const { districts } = data;

    if (document.getElementById(id).src == Images.expandIcon) {
      document.getElementById(id).src = Images.collapseIcon;
    } else {
      document.getElementById(id).src = Images.expandIcon;
    }

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

  toggleTownship = (data, id) => {
    const { townships } = data;

    if (document.getElementById(id).src == Images.expandIcon) {
      document.getElementById(id).src = Images.collapseIcon;
    } else {
      document.getElementById(id).src = Images.expandIcon;
    }

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

  buildStateRow = (data, key) => {
    let districtRows;
    let townshipRows;
    const symbolId = `btn-district-${key}`;

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
        <tr style={{ display: data.visible ? 'table-row' : 'none' }} id="state-row">
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
                  onClick={() => this.toggleDistrict(data, symbolId)}
                >
                  <div className="row justify-content-between">
                    <div className="col">{`${data.districts.length} Districts`}</div>
                    <div className="col">
                      <img className="btn-icon p-0" src={Images.expandIcon} id={symbolId} alt="btn-icon" height="14" width="14" />
                    </div>
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

  buildDistrictRow = (data, key) => {
    const symbolId = `btn-township-${key}`;

    return (
      <tr style={{ display: data.visible ? 'table-row' : 'none' }} id="district-row">
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
                onClick={() => this.toggleTownship(data, symbolId)}
              >
                <div className="row justify-content-between">
                  <div className="col">{`${data.townships.length} Townships`}</div>
                  <div className="col">
                    <img className="btn-icon p-0" src={Images.expandIcon} id={symbolId} alt="btn-icon" height="14" width="14" />
                  </div>
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
    );
  }


  buildTownshipRow = (data) => (
    <tr style={{ display: data.visible ? 'table-row' : 'none' }} id="township-row">
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

  filterTable = (e) => {
    const { data } = this.state;

    this.setState({ filterValue: e.value });

    this.getInitState();

    if (e.value === 'State') {
      data.map((state) => {
        state.visible = true;
        if (state.districts) {
          state.districts.map((district) => {
            district.visible = false;
          });
        }
      });
    }
    if (e.value === 'District') {
      data.map((state) => {
        state.visible = false;
        if (state.districts) {
          state.districts.map((district) => {
            district.visible = true;
          });
        }
      });
    }
    if (e.value === 'Township') {
      data.map((state) => {
        state.visible = false;
        if (state.districts) {
          state.districts.map((district) => {
            district.visible = false;
            if (district.townships) {
              district.townships.map((township) => {
                township.visible = true;
              });
            }
          });
        }
      });
    }
  }

  searchTable = () => {
    const { data, searchValue } = this.state;

    data.map((state) => {
      if (state.region.toLowerCase().includes(searchValue)) {
        state.visible = true;
      } else {
        state.visible = false;
      }
      if (state.districts) {
        state.districts.map((district) => {
          if (district.region.toLowerCase().includes(searchValue)) {
            district.visible = true;
          } else {
            district.visible = false;
          }
          if (district.townships) {
            district.townships.map((township) => {
              if (township.region.toLowerCase().includes(searchValue)) {
                township.visible = true;
              } else {
                township.visible = false;
              }
            });
          }
        });
      }
    });
    this.forceUpdate();
  }

  handleSearchInput = (e) => {
    this.setState({ searchValue: e.target.value });

    if (e.target.value === '') {
      this.getInitState();
    }

    // Detect Enter keypress event to search keyword
    document.getElementById('search-input').onkeypress = (event) => {
      if (!event) event = window.event;
      const keyCode = event.keyCode || event.which;
      if (keyCode == '13') {
        this.searchTable();
      }
    };
  }

  render() {
    const {
      data, filterOptions, filterValue, searchValue,
    } = this.state;
    const tableRows = data.map(this.buildStateRow);

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
                <td colSpan="5">
                  <div className="row">

                    <div className="col-1 filter-select">
                      <Dropdown
                        options={filterOptions}
                        value={filterValue}
                        placeholder="Filter"
                        onChange={this.filterTable}
                      />
                    </div>

                    <div className="col-5 search-container">
                      <input
                        className="search-input"
                        id="search-input"
                        placeholder="Search"
                        value={searchValue}
                        onChange={this.handleSearchInput}
                      />

                      <button
                        className="search-icon"
                        type="button"
                        onClick={this.searchTable}
                      >
                        <img className="search-img" src={Images.searchIcon} alt="search" height="20" width="20" />
                      </button>
                    </div>
                  </div>
                </td>
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
