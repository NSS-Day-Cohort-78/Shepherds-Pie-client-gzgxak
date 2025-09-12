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

    return (
       <div className="filter-bar">
            <label>Filter by date: </label>

            <select className="inline-flex justify-center gap-x-1.5 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold inset-ring-1 inset-ring-white/5 hover:bg-white/20" name="date" onChange={filterOrders}>
                <option value={todaysDateWithoutTime}>Select date option</option>
                <option value={todaysDateWithoutTime}>Today, {todaysDate.toDateString()}</option>
                {allOrders.map((order) => {
                    const date = new Date(order.dateTimeCreated);const formattedDate = date.toDateString()
                    if (formattedDate != todaysDateWithoutTime)  {
                        return <option key={order.id} value={formattedDate}>{formattedDate}</option>
                    }   
                })}
                
            </select>
            
        </div>

     
) }  
