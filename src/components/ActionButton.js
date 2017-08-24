import React from 'react'

const ActionButton = ({ connected, loading, logout, login }) => {
  return (
    <button disabled={loading} onClick={connected ? logout : login}>
      {loading ? 'loading...' : (connected ? 'Disconnect' : 'Connect')}
    </button >
  )
}

export default ActionButton