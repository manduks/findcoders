import React from 'react';


export default class Coder extends React.Component {
  redirectToGithubProfile() {
    var win = window.open(this.props.coder.html_url, '_blank');
    win.focus();
  }

  render() {
    const coder = this.props.coder;
    coder.email = 'armando@codetlan.com';
    return (
      <li className="qc-item">
        <img src={coder.avatar_url} onClick={this.redirectToGithubProfile.bind(this)}/>
        <section className="qc-item-info">
          <span className="qc-item-name"> {coder.login}</span>
          <span className="qc-item-email">{coder.email}</span>
        </section>
        <section className="qc-item-details">
          <span className="qc-item-score">{coder.score}/10</span>
          <img className="qc-item-star" src="./img/star.svg"/>
        </section>
      </li>
    );
  }
}
Coder.propTypes = {
   coder: React.PropTypes.object.isRequired,
 };
