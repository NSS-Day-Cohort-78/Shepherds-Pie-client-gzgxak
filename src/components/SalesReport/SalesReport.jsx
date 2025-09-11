import { useEffect, useState } from "react"
import {
	getAllCheeses,
	getAllSauces,
	getAllSizes,
	getOrdersWithPizzas,
	getPizzas,
	getPizzaToppings,
	getAllToppings
} from "../../service/reportService"
import { MonthlyDropdownMenu } from "./MonthlyDropdownMenu"
import { DailySales } from "./DailySales"
import { PopularItems } from "./PopularItems"

export const SalesReport = ({ currentUser }) => {
	const [salesData, setSalesData] = useState([])
	const [pizzaData, setPizzaData] = useState([])
	const [toppingData, setToppingData] = useState([])
	const [allToppingsData, setAllToppingsData] = useState([])
	const [sizeData, setSizeData] = useState([])
	const [cheeseData, setCheeseData] = useState([])
	const [sauceData, setSauceData] = useState([])
	const [detailedData, setDetailedData] = useState([])
	const [filteredData, setFilteredData] = useState([])

	useEffect(() => {
		// Fetch sales data from database
		getOrdersWithPizzas().then((data) => setSalesData(data))
		getPizzas().then((data) => setPizzaData(data))
		getPizzaToppings().then((data) => setToppingData(data))
		getAllSizes().then((data) => setSizeData(data))
		getAllCheeses().then((data) => setCheeseData(data))
		getAllSauces().then((data) => setSauceData(data))
		getAllToppings().then((data) => setAllToppingsData(data))
	}, [])

	useEffect(() => {
		if (
			salesData.length > 0 &&
			pizzaData.length > 0 &&
			sizeData.length > 0 &&
			cheeseData.length > 0 &&
			sauceData.length > 0 &&
			toppingData.length > 0 &&
			allToppingsData.length > 0
		) {
			const ordersWithPizzasAndToppings = salesData.map((order) => {
				const pizzasForThisOrder = pizzaData.filter(
					(pizza) => pizza.orderId === order.id
				)

				const enhancedPizzas = pizzasForThisOrder.map((pizza) => {
					const size = sizeData.find((s) => s.id === pizza.sizeId)
					const cheese = cheeseData.find((c) => c.id === pizza.cheeseId)
					const sauce = sauceData.find((s) => s.id === pizza.sauceId)

					const toppingsForThisPizza = toppingData.filter(
						(at) => at.orderPizzaId === pizza.id
					)

					const enhancedToppings = toppingsForThisPizza.map(
						(assignedTopping) => {
							const topping = allToppingsData.find(
								(t) => t.id === assignedTopping.toppingId
							)
							return {
								id: topping?.id,
								name: topping?.name,
								price: topping?.price
							}
						}
					)

					return {
						...pizza,
						size: size,
						cheese: cheese,
						sauce: sauce,
						toppings: enhancedToppings
					}
				})

				return {
					...order,
					pizzas: enhancedPizzas
				}
			})

			setDetailedData(ordersWithPizzasAndToppings)
		}
	}, [
		salesData,
		pizzaData,
		sizeData,
		cheeseData,
		sauceData,
		toppingData,
		allToppingsData
	])

	return (
		<>
			<MonthlyDropdownMenu
				currentUser={currentUser}
				setFilteredData={setFilteredData}
				detailedData={detailedData}
			/>
			<DailySales currentUser={currentUser} filteredData={filteredData} />
			<PopularItems currentUser={currentUser} detailedData={detailedData} />
		</>
	)
}

//TODO: Add functionality to select month from dropdown
//TODO: Create Daily Sales Section
//TODO: Create Popular Items Section
//TODO: Create MonthlyDropdownmenu component
//TODO: Create DetailsButton component
//TODO: Style the report with CSS

/*Sales Report Section
Monthly Dropdown Menu
# of Orders: $
# Total Sales: $
Avg. Order Value: $
*/
/*Daily Sales (Based on selected month)
Date: $: 
 */
/*Popular Items
Size: Details button with amount of sales and the percentage of total orders it represents
Cheese: Details button with amount of sales and the percentage of total orders it represents
Sauce: Details button with amount of sales and the percentage of total orders it represents
Top 3 Toppings: Details button with amount of sales and the percentage of total orders it represents
*/
