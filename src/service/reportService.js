export const getOrdersWithPizzas = () => {
	return fetch(`http://localhost:8088/orders?_embed=orderPizzas`).then((res) =>
		res.json()
	)
}

export const getPizzas = (id) => {
	return fetch(
		`http://localhost:8088/orderPizzas?_embed=assignedToppings&_expand=size&_expand=cheese&_expand=sauce&_expand=order`
	).then((res) => res.json())
}

export const getPizzaToppings = () => {
	return fetch(
		`http://localhost:8088/assignedToppings?_expand=topping&_expand=orderPizza`
	).then((res) => res.json())
}

export const getAllToppings = () => {
	return fetch(`http://localhost:8088/toppings`).then((res) => res.json())
}

export const getAllSizes = () => {
	return fetch(`http://localhost:8088/sizes`).then((res) => res.json())
}

export const getAllCheeses = () => {
	return fetch(`http://localhost:8088/cheeses`).then((res) => res.json())
}

export const getAllSauces = () => {
	return fetch(`http://localhost:8088/sauces`).then((res) => res.json())
}
