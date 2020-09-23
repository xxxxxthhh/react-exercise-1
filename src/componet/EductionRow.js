import React, { Component } from 'react';
import * as propTypes from 'prop-types';

class EductionRow extends Component {
  // state = {
  //   year: 0,
  //   title: '',
  //   content: '',
  // };

  render() {
    return (
      <tr>
        <td className="year">
          <b>{this.props.year}</b>
        </td>
        <td className="eduContent">
          <div>
            <p>
              <b>{this.props.title}</b>
            </p>
            <p>{this.props.content}</p>
          </div>
        </td>
      </tr>
    );
  }
}

EductionRow.propTypes = {
  year: propTypes.string,
  title: propTypes.string,
  content: propTypes.string,
};

export default EductionRow;
