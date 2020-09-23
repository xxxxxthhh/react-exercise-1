import React, { Component } from 'react';
import './App.scss';
import './assets/avatar.jpg';
import Pic from './componet/pic';
import EducationTable from './componet/EducationTable';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Pic />
        <p className="profile1">HELLO,</p>
        <p className="profile2">
          MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV
        </p>
        <hr />
        <section>
          <h3>ABOUT ME</h3>
          <p className="aboutMe">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus, non, dolorem, cumque distinctio magni quam expedita
            velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores
            voluptatem dolorum! Quasi.
          </p>
          <h3>EDUCATION</h3>
          <EducationTable />
        </section>
      </main>
    );
  }
}

export default App;
