import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Landing.scss';

import Footer from '../Footer';

class Landing extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    this.context.onSetTitle('Secret Set');

    return (
      <div className={s.landing}>
        <img
          className= {s.logo}
          src='../../logo@3x.png'
        />
        <div className={s.about}>
          Sharing listening parties in real time with all your fans.
        </div>
        <a href='/'>
          <img
            className={s.apple}
            src='../../app-store-badge-coming.png'
          />
        </a>
        <Footer />
      </div>
    );
  }

}

export default withStyles(Landing, s);
