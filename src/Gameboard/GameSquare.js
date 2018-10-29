import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./gamesquare.css";
class GameSquare extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    var btnClass = 'gamesquare';
     if (this.props.alive === true) btnClass += ' alive';
     else if (this.props.alive === false) btnClass += ' dead';
    return (
 <button className = {btnClass} ></button>
    );
  }
}

GameSquare.propTypes = {

};

export default GameSquare;