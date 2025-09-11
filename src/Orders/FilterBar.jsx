export const FilterBar = ( { allOrders, setFilteredOrders } ) => {
    
    const filterOrders = (event) => {
        const filteredOrders = allOrders.filter((order) => 
            order.dateTimeCreated === event.target.value)

        setFilteredOrders(filteredOrders)
    }

    // add/map other date options when available
    return (
        <div className="filter-bar">
            <label>Filter by Date: </label>

            <select name="date" onChange={filterOrders}>
                <option value="">Select date option</option>
                {allOrders.map((order) => {
                    const date = new Date(order.dateTimeCreated)
                    const formattedDate = date.toDateString()
                    return <option key={order.id} value={order.dateTimeCreated}>{formattedDate}</option>   
                })}
                
            </select>
            
        </div>
    )
}