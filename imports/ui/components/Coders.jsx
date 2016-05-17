import React from 'react';
import Coder from './Coder.jsx';

export default class Coders extends React.Component {
  getCoders() {
    const data = this.props.data;
    return data.length ? data : [
      { id: 1, email: 'armando@codetlan.com', login: 'Armando Gonzalez', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 2, email: 'armando@codetlan.com', login: 'Peter Anguila', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 3, email: 'armando@codetlan.com', login: 'Awesome Perez', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 4, email: 'armando@codetlan.com', login: 'Armando Gonzalez', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 5, email: 'armando@codetlan.com', login: 'Peter Anguila', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 6, email: 'armando@codetlan.com', login: 'Awesome Perez', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 11, email: 'armando@codetlan.com', login: 'Armando Gonzalez', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 12, email: 'armando@codetlan.com', login: 'Peter Anguila', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 13, email: 'armando@codetlan.com', login: 'Awesome Perez', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 14, email: 'armando@codetlan.com', login: 'Armando Gonzalez', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 15, email: 'armando@codetlan.com', login: 'Peter Anguila', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' },
      { id: 16, email: 'armando@codetlan.com', login: 'Awesome Perez', avatar_url:"./img/coder.png", score:10, html_url:'https://github.com/manduks' }
    ];
  }

  renderCoders() {
    return this.getCoders().map((coder) => (
      <Coder key={coder.id} coder={coder} />
    ));
  }

  render() {
    return (
      <ul className='qc-items-list'>
        {this.renderCoders()}
      </ul>
    );
  }
}
