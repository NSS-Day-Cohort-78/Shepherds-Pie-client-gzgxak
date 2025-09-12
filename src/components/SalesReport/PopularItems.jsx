import { useEffect, useState } from "react"
import { DetailsButton } from "./DetailsButton"

export const PopularItems = ({
	sizeData,
	cheeseData,
	sauceData,
	allToppingsData,
	salesData
}) => {
	const [mostPopularSize, setMostPopularSize] = useState([])
	const [mostPopularCheese, setMostPopularCheese] = useState([])
	const [mostPopularSauce, setMostPopularSauce] = useState([])
	const [mostPopularToppings, setMostPopularToppings] = useState([])
	const [itemDetailsView, setItemDetailsView] = useState({})

	useEffect(() => {
		if (
			sizeData.length > 0 &&
			cheeseData.length > 0 &&
			sauceData.length > 0 &&
			allToppingsData.length > 0
		) {
			setMostPopularSize(
				sizeData.sort((a, b) => b.orderCount - a.orderCount).slice(0, 1)
			)
			setMostPopularCheese(
				cheeseData.sort((a, b) => b.orderCount - a.orderCount).slice(0, 1)
			)
			setMostPopularSauce(
				sauceData.sort((a, b) => b.orderCount - a.orderCount).slice(0, 1)
			)
			setMostPopularToppings(
				allToppingsData.sort((a, b) => b.orderCount - a.orderCount).slice(0, 3)
			)
		}
	}, [sizeData, cheeseData, sauceData, allToppingsData])

	return (
		<div className="mb-12 space-y-6">
			<h1>Popular Items</h1>
			{mostPopularSize.map((size) => (
				<div className="bg-white shadow-md rounded-lg p-4" key={size.id}>
					<h1>
						{size.name}: {size.orderCount} orders
					</h1>
					<DetailsButton item={size} setItemDetailsView={setItemDetailsView} />
				</div>
			))}
			{mostPopularCheese.map((cheese) => (
				<div className="bg-white shadow-md rounded-lg p-4" key={cheese.id}>
					<h1>
						{cheese.name}: {cheese.orderCount} orders
					</h1>
					<DetailsButton
						item={cheese}
						setItemDetailsView={setItemDetailsView}
					/>
				</div>
			))}
			{mostPopularSauce.map((sauce) => (
				<div className="bg-white shadow-md rounded-lg p-4" key={sauce.id}>
					<h1>
						{sauce.name}: {sauce.orderCount} orders
					</h1>
					<DetailsButton item={sauce} setItemDetailsView={setItemDetailsView} />
				</div>
			))}
			{mostPopularToppings.map((topping) => (
				<div className="bg-white shadow-md rounded-lg p-4" key={topping.id}>
					<h1>
						{topping.name}: {topping.orderCount} orders
					</h1>
					<DetailsButton
						item={topping}
						setItemDetailsView={setItemDetailsView}
					/>
				</div>
			))}
			<div className="bg-white shadow-md rounded-lg p-4">
				<h1>Item Details:</h1>
				<h1>Orders: {itemDetailsView.orderCount}</h1>
				<h1>
					Percentage of Orders:{" "}
					{salesData.length > 0 && itemDetailsView.orderCount
						? ((itemDetailsView.orderCount / salesData.length) * 100).toFixed(1)
						: 0}
					%
				</h1>
			</div>
		</div>
	)
}
