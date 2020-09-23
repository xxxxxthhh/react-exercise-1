import React, { Component } from 'react';
import EductionRow from './EductionRow';

class EducationTable extends Component {
  state = {
    rows: [
      {
        id: 1,
        year: 1990,
        title: 'I was born in Katowice',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
      },
      {
        id: 2,
        year: 2005,
        title: 'Secondary school specializing in artistic',
        content:
          'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
      },
      {
        id: 3,
        year: 2009,
        title: 'First level graduation in Graphic Design',
        content:
          'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde' +
          '          repel lat.',
      },
      {
        id: 4,
        year: 2012,
        title: 'Second level graduation in Graphic Design',
        content: 'Ducimus, aliquam tempore autem itaque et accusantium!',
      },
    ],
  };
  render() {
    return (
      <table className="row">
        {this.state.rows.map((row) => (
          <EductionRow
            key={row.id}
            year={row.year}
            title={row.title}
            content={row.content}
          />
        ))}
      </table>
    );
  }
}
export default EducationTable;
