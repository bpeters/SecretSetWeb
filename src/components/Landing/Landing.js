import React, { Component, PropTypes } from 'react';
import request from 'superagent';
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
    handleTextFieldChange: PropTypes.func,
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
        labelColor= "#D033E3"
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
        <div className = {s.textbox}>
        <TextField
          floatingLabelText={'Enter Phone Number'}
          floatingLabelStyle={{
            fontSize: 14,
            color: '#FFFFFF',
          }}
          errorText={this.state.error}
          errorStyle={{
            color: '#FFFFFF'
          }}
          hintText="555 555 5555"
          style= {{
            borderRadius: 3,
            fontSize: 20,
          }}
          inputStyle= {{
            marginLeft: "25%",
            color: "#FFFFFF",
            fontFamily: "Next-Medium",
          }}
          underlineStyle={{
            color: "#8902B3",
          }}
          hintStyle={{
            color: "#8902B3",
            fontFamily: "Next-Medium",
            marginLeft: "25%",
            fontSize: 20,
          }}
          onEnterKeyDown={this.showApp}
          value={this.state.textFieldValue}
          onChange={this.handleTextFieldChange}
        />
        </div>
        <RaisedButton
          label="Send Link"
          labelColor= "#D033E3"
          style={{
            fontFamily: "Next-Medium",
            fontSize: 20,
          }}
          onClick={this.showApp}
        />
      </div>
    );
  }

  showApp() {

    var number = this.state.textFieldValue;
    var clean = number.match(/\d/g);
    clean = clean.join("");

    if (clean.length === 10) {
      request
        .post('/app')
        .set('Content-Type', 'application/json')
        .send(
          JSON.stringify({
            number: this.state.textFieldValue,
            content: 'Welcome to SecretSet, text this number with a 6 digit secret code to claim.\n\nOnce the iOS app is launched you will get a link to download.\n\nThanks!'
          })
        )
        .end((err, res) => {

          if (res.ok && JSON.parse(res.text)) {
            this.setState({
              showApp: true,
              getForm: false,
              getApp: false,
              error: null,
            });
          } else {
            this.setState({
              error: 'Oops! try again',
            });
          }
        });
      } else {
        this.setState({
          error: 'Only US numbers, include area code',
        });
      }
  }

  _renderAppLink () {
    if (!this.state.showApp) {
      return null;
    }

    return (
      <div className={s.download}>
        Awesome, SMS sent! <br></br><br></br>
        Artists will send out secret set codes, once you find one use the app to claim the secret!
      </div>
    );
  }

  render() {
    this.context.onSetTitle('SecretSet');

    return (
      <div className={s.landing}>
        <img
          className= {s.logo}
          src='../../logo.png'
        />
        <div className={s.about}>
          Connect with your favorite artists in a exclusive and unique way.
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
