import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    userOption: countryAndCapitalsList[0].id,
  }

  onChangeCountry = event => {
    this.setState({userOption: event.target.value})
  }

  getCountry = () => {
    const {userOption} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === userOption,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {userOption} = this.state
    const country = this.getCountry(userOption)

    return (
      <div className="app-container">
        <div className="inner-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdown-container">
            <select
              className="dropdown-menu"
              onChange={this.onChangeCountry}
              value={userOption}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  className="option"
                  key={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <span className="question">is capital of which country?</span>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
