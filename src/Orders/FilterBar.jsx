export const FilterBar = ( { allOrders, setFilteredOrders, todaysDate } ) => {

    const todaysDateWithoutTime = todaysDate.toDateString()

    const filterOrders = (event) => {
        const filteredOrders = allOrders.filter((order) => {
            const date = new Date(order.dateTimeCreated);
            const formattedDate = date.toDateString()
            return formattedDate === event.target.value
        })
        setFilteredOrders(filteredOrders)
    }

    // add/map other date options when available
    return (
        <div className="filter-bar">
            <label>Filter by Date: </label>

            <select name="date" onChange={filterOrders}>
                <option value={todaysDateWithoutTime}>Select date option</option>
                <option value={todaysDateWithoutTime}>Today, {todaysDate.toDateString()}</option>
                {allOrders.map((order) => {
                    const date = new Date(order.dateTimeCreated);const formattedDate = date.toDateString()
                    if (formattedDate != todaysDateWithoutTime) {
                        return <option key={order.id} value={formattedDate}>{formattedDate}</option>
                    }   
                })}
                
            </select>
            
        </div>
    )
}