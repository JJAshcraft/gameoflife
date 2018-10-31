import React, {
  Component
} from 'react';
// import ReactInterval from 'react-interval';
import PropTypes from 'prop-types';
import GameSquare from "./GameSquare.js";
import './gameboard.css';
let rowId = -1;
let next = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentBuffer: {
      //   1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   11: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   12: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   13: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   14: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   15: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      // },
      // nextBuffer: {
      //   1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   11: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   12: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   13: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   14: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //   15: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      // }

      //set current and next buffers with array of arrays, set all to 0.
      currentBuffer: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      nextBuffer: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]


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

  updateBtnNextArray = (current, row, btn) => {
    rowId = -1;
    console.log('updating button');
    console.log('row', row);
    console.log('btn',btn);
    current = Number(current);
    console.log('current', current)
    let newCurrentBuffer = this.state.currentBuffer.slice();
    newCurrentBuffer[row][btn] = current
    this.setState({currentBuffer: newCurrentBuffer})
    console.log('new next', this.state.currentBuffer);
  }

  boardUpdate = () => {
    var i, j;
    for (i = 0; i < this.state.currentBuffer.length; i++) {
      // console.log(this.state.currentBuffer[i])

      //check to see if its the first row

      //dont check for cells in previous row.
      let neighborCount = 0;
      for (j = 0; j < this.state.currentBuffer[i].length; j++) {
        console.log('***START****');
        let currentRow = this.state.currentBuffer[i];
        let currentValue = this.state.currentBuffer[i][j];
        console.log('current value', this.state.currentBuffer[i][j])

        //checks previous row
        if (i !== 0) {
          if (this.state.currentBuffer[i - 1][j - 1] === 1) {
            neighborCount += 1;
          }
          if (this.state.currentBuffer[i - 1][j] === 1) {
            neighborCount += 1;
          }
          if (this.state.currentBuffer[i - 1][j + 1] === 1) {
            neighborCount += 1;
          }
        }
        //check cells in the same row
        if (this.state.currentBuffer[i][j - 1] === 1) {
          neighborCount += 1;
        }
        if (this.state.currentBuffer[i][j + 1] === 1) {
          neighborCount += 1;
        }

        //check next row
        if (i !== 14) {
          if (this.state.currentBuffer[i + 1][j - 1] === 1) {
            neighborCount += 1;
          }
          if (this.state.currentBuffer[i + 1][j] === 1) {
            neighborCount += 1;
          }

          if (this.state.currentBuffer[i + 1][j + 1] === 1) {
            neighborCount += 1;
          }
        }


        console.log('neighbor count', neighborCount);
        console.log('***END****');
        if (currentValue === 0 && neighborCount === 3) {
          next[i][j] = 1;
        } else if (currentValue === 1 && (neighborCount === 2 || neighborCount === 3)) {
          next[i][j] = 1;
        } else if (currentValue === 1 && (neighborCount < 2 || neighborCount > 3)) {
          next[i][j] = 0;
        }

        neighborCount = 0;
        rowId = -1;
      }

      //check to see if its the last row



    }
    console.log("$$$$NEXT$$$$$")
    console.log(next);
    window.setTimeout(
      this.setState({
        currentBuffer: next
      }), 5000);
    console.log('nextbuffer...');
    console.log(this.state.currentBuffer);
    this.forceUpdate();
    
  }

  render() {
    return ( 
      <div><button onClick={this.boardUpdate}>Step Forward</button>
      <div className = "gameboard" >
      

      {
        
        this.state.currentBuffer.map(row => {
          let buttonCount = -1;
        
          rowId++
          return row.map((square, index) => {
            
            if (square === 1) {
              buttonCount++
             
              return <GameSquare updateBtnNextArray={this.updateBtnNextArray} alive = {
                1
              } buttonId = {buttonCount}
              rowId ={rowId}
              key = {
                Math.random()
              }
              />
            } else {
              buttonCount++
             
              return <GameSquare updateBtnNextArray={this.updateBtnNextArray} alive = {
                0
              }
              buttonId = {buttonCount}
              rowId ={rowId}
              key = {
                Math.random()
              }
              />
            }

          })
        })
      }

      <
      /div>
    </div>);
  }
}

BoardContainer.propTypes = {

};

export default BoardContainer;