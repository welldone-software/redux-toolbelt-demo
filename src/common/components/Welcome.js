import React from 'react'

const Welcome = ({ userName, loggedIn }) => {
  return (
    <h2>
      {`Hello ${userName}!${loggedIn ? '' : ' Please Login.'}`}
    </h2>
  )
}

export default Welcome