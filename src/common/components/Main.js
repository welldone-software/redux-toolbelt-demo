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

const Main = ({ loggedIn, loading, userName, customers, orders, title, actions }) => {
  return (
    <div style={styles}>
      <Welcome userName={userName} loading={loading} />
      <h3>{title}</h3>
      {!loggedIn && !loading && (
        <div style={{marginBottom: 10}}>
          <span>User Name: </span>
          <input value={userName} onChange={e => actions.changeUserName(e.target.value)}/>
        </div>
      )}
      <ActionButton
        loggedIn={loggedIn}
        loading={loading}
        login={actions.login}
        logout={actions.logout}
      />
      {loggedIn && <Customers customers={customers}/>}
      {loggedIn && <Orders orders={orders}/>}
    </div>
  )
}

export default connect(
  state => ({
    userName: _.get(state, 'userName'),
    customers: _.get(state, 'customers.data'),
    orders: _.get(state, 'orders.data'),
    loggedIn: (
      _.get(state, 'profile.data') &&
      _.get(state, 'customers.data') &&
      _.get(state, 'orders.data')
    ),
    loading: (
      _.get(state, 'profile.loading') ||
      _.get(state, 'customers.loading') ||
      _.get(state, 'orders.loading')
    )
  })
)(Main)
