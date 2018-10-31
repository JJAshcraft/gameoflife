import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import "./gamesquare.css";
class GameSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alive: this.props.alive,

      
    }

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

  lifeOrDeathToggle = (e) => {
    e.preventDefault();
    let row = this.props.rowId;
    let btn = this.props.buttonId;
    let current = !this.state.alive;
    this.setState({alive: !this.state.alive,})
    this.props.updateBtnNextArray(current, row, btn);
    this.forceUpdate();
    
  }

  render() {
    var btnClass = 'gamesquare';
    if (this.state.alive === 1) btnClass = 'gamesquare alive';
    else if (this.state.alive === 0) btnClass = 'gamesquare dead';
    return ( <
      button onClick = {(e)=>{this.lifeOrDeathToggle(e)}} className = {
        btnClass
      } > </button>
    );
  }
}

GameSquare.propTypes = {

};

export default GameSquare;