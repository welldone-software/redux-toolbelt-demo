export const fetchUserProfile = userName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: `id_${userName}_${new Date().getTime()}` })
    }, 1200)
  })
}

export const fetchOrders = userName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([`order1_of_${userName}`, `order2_of_${userName}`])
    }, 1300)
  })
}

export const fetchCustomers = userName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([`customer1_of_${userName}`, `customer2_of_${userName}`])
    }, 1500)
  })
}
