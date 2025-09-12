export const Order = ( { order } ) => {
    return (
        <section className="max-w-sm rounded overflow-hidden shadow-lg p-4 [&_*]:p-1">
            <header className="text-xl">Order #{order.id}</header>
            <div className="text-gray-700 text-base">Customer Name: {order.customerName}</div>
            <div className="text-gray-700 text-base">Order Status: {order.delivery ? "Delivered" : "In Progress"}</div>
        </section>
    )
}