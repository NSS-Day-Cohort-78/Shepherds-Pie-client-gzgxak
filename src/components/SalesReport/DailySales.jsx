import { useEffect, useState } from "react"

export const DailySales = ({ filteredData }) => {
	const [salesGroupedByDates, setSalesGroupedByDates] = useState([])

	useEffect(() => {
		if (filteredData.length > 0) {
			const copiedFilteredData = [...filteredData]
			for (const data of copiedFilteredData) {
				const convertedDate = new Date(data.dateTimeCreated).toDateString()
				data.date = convertedDate
			}

			const groupedByDate = copiedFilteredData.reduce((groups, order) => {
				const date = order.date

				if (!groups[date]) {
					groups[date] = []
				}

				groups[date].push(order)
				return groups
			}, {})

			const dailyGroups = Object.entries(groupedByDate).map(
				([date, orders]) => ({
					date: date,
					orders: orders,
					orderCount: orders.length,
					totalSales: orders.reduce((dayTotal, order) => {
						const orderTotal = order.orderPizzas.reduce(
							(pizzaSum, pizza) => pizzaSum + pizza.price,
							0
						)
						return dayTotal + orderTotal
					}, 0)
				})
			)
			setSalesGroupedByDates(dailyGroups)
		}
	}, [filteredData])

	if (filteredData.length > 0) {
		return (
			<div className="bg-white shadow-md rounded-lg p-4">
				<h1>Daily Sales</h1>
				{salesGroupedByDates.map((dayData, index) => (
					<div key={index}>
						<h2>
							{dayData.date} Orders: {dayData.orderCount} Total Sales: $
							{dayData.totalSales}
						</h2>
					</div>
				))}
			</div>
		)
	}
}
