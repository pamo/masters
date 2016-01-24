import React from 'react';
import styles from './styles/index.scss';

const Hello = React.createClass({
  render (){
    return <div>Hello, {this.props.name}</div>
  }
});

React.render(<Hello name="Pam"/>, document.body);
