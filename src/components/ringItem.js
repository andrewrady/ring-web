import React, { Component } from 'react';

class RingItem extends Component {
  render() {
    return (
      <tr>
        <td>{ this.props.ring.RingNumber }</td>
        <td>{ this.props.ring.Age }</td>
        <td>{ this.props.ring.Rank }</td>
        <td>{ this.props.ring.Division }</td>
        <td>{ this.props.ring.Gender }</td>
      </tr>
    )
  }
}

export default RingItem