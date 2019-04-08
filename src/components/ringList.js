import React, { Component } from 'react';
import RingItem from './ringItem';

class RingList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      activeRings: [],
      upcomingRings: [],
      currentView: 'current'
    }

    this.changeView = this.changeView.bind(this)
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

  changeView = (value) => {
    this.setState({
      currentView: value
    });
  }

  renderCurrentRing = () => {
    if(this.state.currentView === 'current') {
      return (
        this.state.activeRings.map((ring, index) => {
          return (
            <RingItem ring={ring} key={index}></RingItem>
          )
        })
      )
    }

    if(this.state.currentView === 'upcoming') {
      return (
        this.state.upcomingRings.map((ring, index) => {
          return (
            <RingItem ring={ring} key={index}></RingItem>
          )
        })
      )
    }
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
                <a 
                  className={this.state.currentView === 'current' ? "nav-item nav-link active" : "nav-item nav-link"} 
                  onClick={this.changeView.bind(this, 'current')} 
                  href="#current"
                >Active</a>
                <a 
                  className={"nav-item nav-link " + this.state.currentView === 'upcoming' ? "nav-item nav-link active" : "nav-item nav-link"} 
                  onClick={this.changeView.bind(this, 'upcoming')} 
                  id="nav-profile-tab" 
                  data-toggle="tab" 
                  href="#upcoming"
                  >Upcoming</a>
              </div>
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
                { this.renderCurrentRing() }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
  }
}

export default RingList