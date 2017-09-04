export const fetchUserProfile = (userNam) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id: 'some_user_id'})
    }, 1200)
  })
}

export const fetchOrders = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['order1', 'order2'])
    }, 1300)
  })
}

export const fetchCustomers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['customer1', 'customer2'])
    }, 1500)
  })
}