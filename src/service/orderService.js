export const getOrderById = (orderId) => {
    return fetch(`http://localhost:8088/orders/${orderId}`)
}