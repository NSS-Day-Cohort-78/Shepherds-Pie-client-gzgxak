import { useEffect, useState } from "react"

export const MonthlyDropdownMenu = ({ setFilter }) => {
	// State to track if dropdown is open or closed
	const [isOpen, setIsOpen] = useState(false)

	// State to track the selected option
	const [selectedOption, setSelectedOption] = useState("Select an option")

	// List of options for our dropdown
	const options = [
		"January",
		"Feburary",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]

	// Function to toggle dropdown open/closed
	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = (option) => {
		setSelectedOption(option)
		setIsOpen(false) // Close dropdown after selection
	}

	useEffect(() => {
		let option = ""
		if (selectedOption === "January") {
			option = "01"
		}
		if (selectedOption === "Feburary") {
			option = "02"
		}

		if (selectedOption === "March") {
			option = "03"
		}

		if (selectedOption === "April") {
			option = "04"
		}

		if (selectedOption === "May") {
			option = "05"
		}

		if (selectedOption === "June") {
			option = "06"
		}

		if (selectedOption === "July") {
			option = "07"
		}

		if (selectedOption === "August") {
			option = "08"
		}

		if (selectedOption === "September") {
			option = "09"
		}

		if (selectedOption === "October") {
			option = "10"
		}

		if (selectedOption === "November") {
			option = "11"
		}

		if (selectedOption === "December") {
			option = "12"
		}

		setFilter(option)
	}, [selectedOption])

	return (
		<div className="relative inline-block w-64">
			{/* Dropdown button */}
			<button
				onClick={toggleDropdown}
				className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			>
				<span>{selectedOption}</span>
				<span className="float-right">{isOpen ? "▲" : "▼"}</span>
			</button>

			{/* Dropdown menu - only shows when isOpen is true */}
			{isOpen && (
				<div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
					{options.map((option, index) => (
						<button
							key={index}
							onClick={() => handleOptionClick(option)}
							className="block w-full px-4 py-2 text-left hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:bg-blue-50"
						>
							{option}
						</button>
					))}
				</div>
			)}
		</div>
	)
}
