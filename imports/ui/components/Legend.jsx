import React from 'react';
import { browserHistory } from 'react-router';

export default class Legend extends React.Component {
  onClick() {
    browserHistory.push('/');
  }

  render() {
    return (
      <section className="qc-legend" onClick={this.onClick.bind(this)}>
        <img src="./img/logo.svg"/>
        <section> <b>Query</b> the right <b>Coders</b> for your project</section>
      </section>
    );
  }
}
