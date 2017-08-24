import React from 'react'

const Welcome = ({ name, loading }) => {
  return (
    <h2>
      {loading ? 'Loading...' : (
        name ? `Hi ${name}!` : 'Please Login.'
      )}
    </h2>
  )
}

export default Welcome