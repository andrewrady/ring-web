import React, { Component } from 'react';

class Ring extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      activeRings: [],
      upcomingRings: []
    }
  }

  getRings = () => {
    this.setState({
      isLoading: true
    });

    fetch('https://guarded-earth-10858.herokuapp.com/rings')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        activeRings: responseJson.filter(x => x.Status),
        upcomingRings: responseJson.filter(x => !x.Status)
      })
    });
  }

  componentDidMount() {
    this.getRings();
  }

  render() {
    return (
      <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-9">
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Active</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Upcoming</a>
              </div>
              { this.activeRings }
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Age</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Division</th>
                    <th scope="col">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>boys</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Girls</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Women</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
    )
  }
}

export default Ring