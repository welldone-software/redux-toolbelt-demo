import React from 'react'

const ActionButton = ({ loggedIn, loading, logout, login }) => {
  return (
    <button disabled={loading} onClick={loggedIn ? logout : login}>
      {loading ? 'loading...' : (loggedIn ? 'Disconnect' : 'Connect')}
    </button >
  )
}

export default ActionButton