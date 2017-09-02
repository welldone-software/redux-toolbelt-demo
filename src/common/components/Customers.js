import React from 'react'
import _ from 'lodash'

const Customers = ({ customers }) => {
  if (_.isEmpty(customers)) {
    return null
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <h2>Your Customers:</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer}>{customer}</li>
        ))}
      </ul>
    </div>
  )
}

export default Customers