import { useEffect, useState } from "react"

export const MonthlySales = ({ filteredData }) => {
	const [totalPrice, setTotalPrice] = useState(0)
	const [averagePrice, setAveragePrice] = useState(0)

	useEffect(() => {
		if (filteredData && filteredData.length > 0) {
			setTotalPrice(
				filteredData.reduce((sum, filteredData) => {
					const orderTotal = filteredData.orderPizzas.reduce(
						(pizzaSum, pizza) => pizzaSum + pizza.price,
						0
					)
					return sum + orderTotal
				}, 0)
			)
		} else {
			setTotalPrice(0)
			setAveragePrice(0)
		}
	}, [filteredData])

	useEffect(() => {
		if (totalPrice != 0) {
			setAveragePrice(totalPrice / filteredData.length)
		}
	}, [totalPrice])

	return (
		<div className="bg-white shadow-md rounded-lg p-4">
			<h1>Number of Orders: {filteredData.length}</h1>
			<h1>Total Sales: ${totalPrice}</h1>
			<h1>Average Order Value: ${averagePrice}</h1>
		</div>
	)
}
