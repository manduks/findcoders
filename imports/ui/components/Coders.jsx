import React from 'react';
import Coder from './Coder.jsx';
import Message from './Message.jsx';

export default class Coders extends React.Component {

  renderCoders() {
    return this.props.data.map((coder) => (
      <Coder key={coder.id} coder={coder} />
    ));
  }

  render() {
    return (
      <ul className="qc-items-list">
        {this.props.data.length ? this.renderCoders() : <Message title="Search for coders..." />}
      </ul>
    );
  }
}
Coders.propTypes = {
  data: React.PropTypes.array,
};
