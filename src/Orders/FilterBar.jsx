export const FilterBar = ( { allOrders, setFilteredOrders } ) => {
    
    const filterOrders = (event) => {
        const filteredOrders = allOrders.filter((order) => 
            order.dateCreated.includes(event.target.value))

        setFilteredOrders(filteredOrders)
    }

    // add/map other date options when available
    return (
        <div className="filter-bar">
            <label>Filter by Date: </label>

            <select name="date" onChange={filterOrders}>
                <option value="">Select date option</option>
                <option value="2025-09-10">2025-09-10</option>
            </select>
            
        </div>
    )
}