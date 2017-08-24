import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Welcome from './Welcome'
import ActionButton from './ActionButton'
import Customers from './Customers'
import Orders from './Orders'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

const Main = ({ name, loading, actions, customers, orders }) => {
  return (
    <div style={styles}>
      <Welcome name={name} loading={loading} />
      <ActionButton
        connected={!!name}
        loading={loading}
        login={actions.login}
        logout={actions.logout}
      />
      {!loading && <Customers customers={customers}/>}
      {!loading && <Orders orders={orders}/>}
    </div>
  )
}

export default connect(
  state => ({
    name: _.get(state, 'profile.data.name'),
    customers: _.get(state, 'customers.data'),
    orders: _.get(state, 'orders.data'),
    loading: (
      _.get(state, 'profile.loading') ||
      _.get(state, 'customers.loading') ||
      _.get(state, 'orders.loading')
    )
  })
)(Main)
