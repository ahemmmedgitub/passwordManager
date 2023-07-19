import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import EachUserDetails from './eachUser'

import './userDetails.css'

class PasswordManager extends Component {
  state = {
    intialList: [],
    count: 0,
    userWebsite: '',
    userName: '',
    userPassword: '',
    isTrue: true,
    showPassword: true,
    userValue: '',
  }

  onChangeWebsite = event => {
    this.setState({userWebsite: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({userPassword: event.target.value})
  }

  onAddUserDetails = event => {
    const {count, intialList, userWebsite, userName, userPassword} = this.state
    event.preventDefault()

    const newUserList = {
      id: uuidv4(),
      webSite: userWebsite,
      name: userName,
      password: userPassword,
    }

    this.setState(prevState => ({
      intialList: [...prevState.intialList, newUserList],
      count: count + 1,
      userWebsite: '',
      userName: '',
      userPassword: '',
    }))

    if (intialList.length < 0) {
      this.setState({isTrue: true})
    } else {
      this.setState({isTrue: false})
    }
  }

  onDeleteExistingUser = id => {
    this.setState(prevState => ({
      intialList: prevState.intialList.filter(user => id !== user.id),
      count: prevState.count - 1,
    }))
  }

  hideAndShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  userSearchValue = event => {
    this.setState({
      userValue: event.target.value,
    })
  }

  DisplayWebSite = webSite => {
    console.log(webSite)
  }

  render() {
    const {isTrue, count, intialList, showPassword} = this.state

    return (
      <div className="bg-container">
        <div className="manager-logo-text">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="aap-logo"
          />
          <div className="user-details-main-container">
            <div className="form-container">
              <form className="user-form-details">
                <h1 className="new-password">Add New Password</h1>
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-logo"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input"
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-logo"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input"
                    onChange={this.onChangeUserName}
                  />
                </div>
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-logo"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input"
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="button-container">
                  <button
                    type="submit"
                    className="add-btn"
                    onClick={this.onAddUserDetails}
                    data-testid="delete"
                  >
                    Add
                  </button>
                </div>
              </form>
              <div className="desktop-lock-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                  alt="password manager"
                  className="desktop-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="user-details-main-container op-container">
          <div className="search-your-password-container">
            <div className="psdText-count-container">
              <h1 className="password-style">Your Passwords</h1>
              <p className="password-style">{count}</p>
            </div>
            <div className="search-bar-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                className="user-find-input"
                onChange={this.userSearchValue}
              />
            </div>
          </div>
          <hr className="hori" />
          <div className="check-box-label-show">
            <input type="checkbox" id="passwordCheck" className="check-box" />
            <label
              htmlFor="passwordCheck"
              onClick={this.hideAndShowPassword}
              className="show-password"
            >
              Show passwords
            </label>
          </div>
          <div className="result-container">
            {isTrue ? (
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="result-img"
                />
                <p className="no-passwords">No Passwords</p>
              </div>
            ) : (
              <ul className="ul-element-container">
                {intialList.map(eachUser => (
                  <EachUserDetails
                    eachDetails={eachUser}
                    DeleteUser={this.onDeleteExistingUser}
                    key={eachUser.id}
                    showPassword={showPassword}
                    getDisplayWebSite={this.DisplayWebSite}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
