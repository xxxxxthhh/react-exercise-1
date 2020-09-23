import React, { Component } from 'react';
import avatar from '../assets/avatar.jpg';

class Pic extends Component {
  render() {
    return (
      <div className="userPic">
        <img src={avatar} alt="userPic" />
      </div>
    );
  }
}

export default Pic;
