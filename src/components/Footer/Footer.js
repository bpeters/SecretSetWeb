import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className= {s.footer}>
        <ul className= {s.footerList}>
          <li> <a className= {s.blog} href="https://medium.com/@secretset">blog</a></li>
          <li> <a href="https://twitter.com/@secret_set">#SecretSet</a></li>
          <li> <a href="/legal">legal</a></li>
        </ul>
      </div>
    );
  }

}

export default withStyles(Footer, s);
