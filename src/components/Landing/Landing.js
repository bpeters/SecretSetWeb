import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Landing.scss';

import Footer from '../Footer';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class Landing extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};

    this._onSubmitForm = this._onSubmitForm.bind(this);

  };

  _renderForm () {
    return (
      <div className={s.form}>
          <TextField
            hintText="555-555-5555"
            style= {{
              borderRadius: 3,
              fontSize: 20,
            }}
            inputStyle= {{
              marginLeft: "25%",
              color: "#2AF09C",
              fontFamily: "Next-Medium",
            }}
            underlineStyle={{
              color: "#F0AF2A",
            }}
            hintStyle={{
              color: "#2AF09C",
              fontFamily: "Next-Medium",
              marginLeft: "25%",
              fontSize: 20,
            }}

          />
          <RaisedButton
            label="Join the Set"
            labelColor= "#8902B3"
            style={{
              fontFamily: "Next-Medium",
              fontSize: 20,
            }}
            onMouseDown={this._onSubmitForm}
          />
        </div>
      );
  }

  render() {
    this.context.onSetTitle('Secret Set');

    return (
      <div className={s.landing}>
        <img
          className= {s.logo}
          src='../../logo@3x.png'
        />
        <div className={s.about}>
          Secret Sets for Super fans.
        </div>


        <Footer />
      </div>
    );
  }

}

export default withStyles(Landing, s);
