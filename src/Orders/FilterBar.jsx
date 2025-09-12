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
    //    <div className="filter-bar">
    //         <label>Filter by Date: </label>

    //         <select className="inline-flex  justify-center gap-x-1.5 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold inset-ring-1 inset-ring-white/5 hover:bg-white/20" name="date" onChange={filterOrders}>
    //             <option value={todaysDateWithoutTime}>Select date option</option>
    //             <option value={todaysDateWithoutTime}>Today, {todaysDate.toDateString()}</option>
    //             {allOrders.map((order) => {
    //                 const date = new Date(order.dateTimeCreated);const formattedDate = date.toDateString()
    //                 if (formattedDate != todaysDateWithoutTime)  {
    //                     return <option key={order.id} value={formattedDate}>{formattedDate}</option>
    //                 }   
    //             })}
                
    //         </select>
            
    //     </div>
<el-dropdown class="inline-block">
  <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
    Filter by Date
    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
      <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
    </svg>
  </button>

  <el-menu anchor="bottom end" popover class="w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Account settings</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Support</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">License</a>
    </div>
  </el-menu>
</el-dropdown>

    )
}