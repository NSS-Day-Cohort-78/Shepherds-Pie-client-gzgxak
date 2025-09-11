export const createNewOrder = (newOrder) => {
	return fetch(`http://localhost:8088/orders`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newOrder)
	})
}

export const getAllOrders = () => {
	return fetch(`http://localhost:8088/orders`).then((res) => res.json())
}
