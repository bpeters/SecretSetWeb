import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Landing.scss';



class Landing extends Component {

  render() {
    return (
      <div className= 'landing'>
        <img
        classname='logo'
        src='../../Logo.png'
        />
        <div className= 'about'>
          Lets help you send better messages to avoid a
          fight, after all its not a fight club! Type a message
          get a sentiment score. Green is great,  anything
          else and you are on your own
        </div>
        <img
        className='phone'
        src='../../App-Store-Logo.png'
        />
        <img
        className='phone'
        src='../../Phone.png'
        />
      </div>
    );
  }

}

export default withStyles(Landing, s);