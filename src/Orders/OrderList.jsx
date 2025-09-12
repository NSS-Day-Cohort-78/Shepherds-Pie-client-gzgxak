import { useEffect, useState } from "react"
import { Order } from "./Order"
import { FilterBar } from "./FilterBar"
import { getAllOrders } from "../service/newOrderService"

export const OrderList = () => {
	const [allOrders, setAllOrders] = useState([])
	const [filteredOrders, setFilteredOrders] = useState([])

	const todaysDate = new Date()
	const todaysDateWithoutTime = todaysDate.toDateString()

	const getAndSetOrders = () => {
		getAllOrders().then((orderArr) => setAllOrders(orderArr))
        console.log("Today's date:", todaysDateWithoutTime)
	}

	///
	useEffect(() => {
		getAndSetOrders()
	}, [])

	useEffect(() => {
		if (filteredOrders) {
			const orderFilter = allOrders.filter(order => {
                    const orderDate = new Date(order.dateTimeCreated)
                    return orderDate.toDateString() === todaysDateWithoutTime
        })
			setFilteredOrders(orderFilter)
		}
	}, [allOrders])
	///

	return (
		<div className="m-5 [&_*]:p-2">
            {/* <div className="flex [&_*]:p-4 items-center"> */}
                <h1 className="text-2xl ">Orders</h1>
                <FilterBar className="" allOrders={allOrders} setFilteredOrders={setFilteredOrders} todaysDate={todaysDate} todaysDateWithoutTime={todaysDateWithoutTime}/>
            {/* </div> */}
			<div className="p-4">
				{filteredOrders.map((order) => {
					return <Order order={order} key={order.id}/>
				})}
			</div>
		</div>
	)
}
