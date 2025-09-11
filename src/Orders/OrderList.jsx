import { useEffect, useState } from "react"
import { Order } from "./Order"
import { FilterBar } from "./FilterBar"

// import service to get all orders
    // placeholder func = getAllOrders()

export const OrderList = () => {
    const [allOrders, setAllOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])

    const todaysDate = new Date()
    const todaysDateWithoutTime = todaysDate.toDateString()

    const getAndSetOrders = () => {
        getAllOrders().then((orderArr) => setAllOrders(orderArr))
    }

    useEffect(() => {
        if (filteredOrders) {
            const orderFilter = allOrders.filter(order => 
                order.dateCreated.toDateString() === todaysDateWithoutTime)
            setFilteredOrders(orderFilter)
        }   
    }, [filteredOrders, allOrders])

    return (
        <div>
            <h1>Orders</h1>
                <FilterBar allOrders={allOrders} setFilteredOrders={setFilteredOrders} />
                <div className="filtered-orders">
                    {filteredOrders.map((order) => {
                        return <Order order={order} />
                    })}
                </div>
        </div>
    )
}

// see today's orders by default
// orders should be sorted by datetime (newest first)
// date filter:
    // updates list to show orders for selected date
// if more than 20 orders:
    // orders should be paginated
    // controls to navigate between pages