import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createNewOrder } from "../../service/newOrderService"

export const NewOrderForm = ({ currentUser }) => {
	const navigate = useNavigate()
	const [order, setOrder] = useState({
		userId: "",
		customerName: "",
		customerPhoneNumber: "",
		customerEmail: "",
		customerAddress: "",
		delivery: false,
		tip: ""
	})

	const handleNewOrder = () => {
		if (
			order.delivery === true &&
			order.customerName &&
			order.customerPhoneNumber &&
			order.customerEmail &&
			order.customerAddress
		) {
			const newOrder = {
				userId: currentUser.id,
				customerName: order.customerName,
				customerPhoneNumber: order.customerPhoneNumber,
				customerEmail: order.customerEmail,
				customerAddress: order.customerAddress,
				delivery: order.delivery,
				tip: order.tip,
				dateTimeCreated: new Date()
			}
			createNewOrder(newOrder).then(() => {
				navigate("/orderDetails")
			})
		} else if (
			order.delivery === false &&
			order.customerName &&
			order.customerPhoneNumber &&
			order.customerEmail
		) {
			const newOrder = {
				userId: currentUser.id,
				customerName: order.customerName,
				customerPhoneNumber: order.customerPhoneNumber,
				customerEmail: order.customerEmail,
				customerAddress: order.customerAddress,
				delivery: order.delivery,
				tip: order.tip,
				dateTimeCreated: new Date()
			}
			createNewOrder(newOrder).then(() => {
				navigate("/orderDetails")
			})
		} else {
			window.alert("Please fill out fields!")
		}
	}

	return (
		<form>
			<h2>Create Order</h2>
			<fieldset>
				<div>
					<label>Name:</label>
					<input
						type="text"
						name="customer-name"
						placeholder="Name"
						onChange={(event) => {
							const orderCopy = { ...order }
							orderCopy.customerName = event.target.value
							setOrder(orderCopy)
						}}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div>
					<label>Phone Number:</label>
					<input
						type="text"
						name="customer-phone"
						placeholder="Phone Number"
						onChange={(event) => {
							const orderCopy = { ...order }
							orderCopy.customerPhoneNumber = event.target.value
							setOrder(orderCopy)
						}}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div>
					<label>Email:</label>
					<input
						type="text"
						name="customer-email"
						placeholder="Email"
						onChange={(event) => {
							const orderCopy = { ...order }
							orderCopy.customerEmail = event.target.value
							setOrder(orderCopy)
						}}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div>
					<label>Address:</label>
					<input
						type="text"
						name="customer-address"
						placeholder="Address"
						onChange={(event) => {
							const orderCopy = { ...order }
							orderCopy.customerAddress = event.target.value
							setOrder(orderCopy)
						}}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div>
					<label>Delivery?</label>
					<input
						type="checkbox"
						name="delivery-option"
						onChange={(event) => {
							const orderCopy = { ...order }
							orderCopy.delivery = event.target.checked
							setOrder(orderCopy)
						}}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div>
					<label>Tip Amount:</label>
					<input
						type="text"
						name="customer-tip"
						placeholder="Tip Amount"
						onChange={(event) => {
							const orderCopy = { ...order }
							orderCopy.tip = event.target.value
							setOrder(orderCopy)
						}}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div>
					<button onClick={handleNewOrder}>Save Order</button>
				</div>
			</fieldset>
		</form>
	)
}
