import { useState, useEffect } from "react"

export const OrderDetails = () => {
    const [customerDetails, setDetails] = useState({})
    
    return (
    <>
    <section>
        <header>Order Details</header>
        <div>
            <span>Order ID: </span>
            {orderId}
        </div>
        <div>
            <span>Order Submitted: </span>
            {dateTimeCreated}
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