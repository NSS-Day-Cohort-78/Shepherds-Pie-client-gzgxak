import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOrderById } from "../service/orderService"

export const OrderDetails = () => {
    const [order, setOrder] = useState({})
    const [pizzas, setPizzas] = useState({})
    const { orderId } = useParams()

    useEffect(() => {
        getOrderById(orderId).then((obj) => {
            const orderObj = obj[0]
            setOrder(orderObj)
        })
    }, [])

    return (
    <>
    <section>
        <header>Order Details</header>
        <div>
            <span>Order ID: </span>
            {order.id}
        </div>
        <div>
            <span>Order Submitted: </span>
            {order.dateCreated}
        </div>
        <div>
            <h3>Customer Info: </h3>
            {customerName}
            {customerPhoneNumber}
            {customerEmail}
            {customerAddress}
        </div>
        <div>
            <h3>Assigned Employee: </h3>
            {assignedDeliveryEmployees}
            <button>Assign Delivery Driver</button>
        </div>
    </section>
    <section>
        <div>
            <span>Pizzas in Order: </span>
            <div>{}</div>
        </div>
        <div>
            <span>Total Price: </span>
        </div>
    </section>
    </>
    )
}