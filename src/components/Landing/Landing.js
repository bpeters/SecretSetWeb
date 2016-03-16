import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Landing.scss';

import Footer from '../Footer';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class Landing extends Component {

  static propTypes = {
    textFieldValue: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.number,
    ]),
    handleTextFieldChange: PropTypes.func.isRequired,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      getApp: true,
      textFieldValue: '',
    };

    this.getForm = this.getForm.bind(this);
    this.showApp = this.showApp.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  };

  _renderGetApp () {
    if (!this.state.getApp) {
      return null;
    }

    return (
       <RaisedButton
        label="Get the App"
        labelColor= "#8902B3"
        labelstyle={{
          fontFamily: "Next-Medium",
          fontSize: 30,
        }}
        onMouseDown={this.getForm}
        onTouchStart={this.getForm}
      />
    );
  }

  getForm () {
    this.setState({
      getForm: true,
      getApp: false,
      showApp: false,
    });
  }

  handleTextFieldChange (e) {
    this.setState({
      textFieldValue: e.target.value,
    });
  }

  _renderForm () {
    if (!this.state.getForm) {
      return null;
    }

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
            onEnterKeyDown={this.showApp}
            value={this.state.textFieldValue}
            onChange={this.handleTextFieldChange}
          />
          <RaisedButton
            label="Join the Set"
            labelColor= "#8902B3"
            style={{
              fontFamily: "Next-Medium",
              fontSize: 20,
            }}
            onMouseDown={this.showApp}
            onTouchStart={this.showApp}
          />
      </div>
    );
  }

  showApp() {
    this.setState({
      showApp: true,
      getForm: false,
      getApp: false,
    });

  }

  _renderAppLink () {
    if (!this.state.showApp) {
      return null;
    }

    return (
      <div className={s.download}>
          Awesome! We can't for you to join the secret listening parties!
        <img
          className={s.apple}
          src='../../app-store-badge-coming.png'
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

        {this._renderGetApp()}

        {this._renderForm()}

        {this._renderAppLink()}

        <Footer />

      </div>
    );
  }

}

export default withStyles(Landing, s);
