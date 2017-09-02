import React from 'react'
import _ from 'lodash'

const Orders = ({ orders }) => {
  if (_.isEmpty(orders)) {
    return null
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <h2>Your Orders:</h2>
      <ul>
        {orders.map(order => (
          <li key={order}>{order}</li>
        ))}
      </ul>
    </div>
  )
}

export default Orders