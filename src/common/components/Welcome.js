import React from 'react'

const Welcome = ({ userName, profile, loggedIn }) => {
  return (
    <div>
      <h2>
        {`Hello ${userName}!${loggedIn ? '' : ' Please Login.'}`}
      </h2>
      {profile && (
        <h3>
          Your id is: {profile.id}
        </h3>
      )}
    </div>
  )
}

export default Welcome