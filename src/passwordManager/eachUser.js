import './eachUser.css'

const EachUserDetails = props => {
  const {eachDetails, DeleteUser, showPassword, getDisplayWebSite} = props
  const {webSite, name, password, id} = eachDetails

  const fstLetter = webSite[0]

  getDisplayWebSite(webSite)

  const onDeleteUser = () => {
    DeleteUser(id)
  }

  const securredPassword = showPassword ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  ) : (
    <p className="input-values">{password}</p>
  )

  return (
    <li className="list-container">
      <p className="first-letter">{fstLetter}</p>
      <div className="user-details">
        <p className="input-values">{webSite}</p>
        <p className="input-values">{name}</p>
        {securredPassword}
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
        className="delete-logo"
        onClick={onDeleteUser}
      />
    </li>
  )
}

export default EachUserDetails
