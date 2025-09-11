export const Order = ( { order } ) => {
    return (
        <section className="order">
            <header>Order {order.id}</header>
            <div>Customer Name: {order.customerName}</div>
            <div>Order Status: {order.delivery ? "Delivered" : "In Progress"}</div>
        </section>
    )
}