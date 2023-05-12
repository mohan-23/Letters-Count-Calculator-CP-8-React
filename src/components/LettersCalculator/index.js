import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onTypeTest = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
          <div className="count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="label-input">
              <label htmlFor="myInput" className="label">
                Enter the phrase
              </label>
              <input
                id="myInput"
                type="text"
                className="input"
                placeholder="Enter the phrase"
                onChange={this.onTypeTest}
              />
            </div>
            <p className="count-increase">{`No.of letters: ${count}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
