import { useState } from "react";
import "./new_order.css"

export default function New_Order() {

    const [supply_name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [date, setDate] = useState("")
    const [temp, setTemp] =useState("")


    function submitForm(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault()

        alert(`Supply Name: ${supply_name}\n Quantity: ${quantity}\n Date: ${date}\n Temp:${temp}`)

    }

    return (
        <div className="new-order">

            <div></div>

            <form onSubmit={submitForm}>

                <div>Add New Supply Order</div>

                <div className="new-order-q-name">
                    <label htmlFor="new-order-input-name">Supply Name</label>
                    <input type="text" className="new-order-input-name" id="new-order-input-name" placeholder="Ex: Pipet Tips" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="new-order-q-quantity">
                    <label htmlFor="new-order-input-quantity" >Quantity</label>
                    <input type="number" className="new-order-input-quantity" id="new-order-input-quantity" placeholder="0" onChange={(e) => setQuantity(e.target.value)}/>
                </div>

                <div className="new-order-q-date">
                    <label htmlFor="new-order-input-date">Date Ordered</label>
                    <input type="date" name="new-order-input-date" id="new-order-input-date" className="new-order-input-date" onChange={(e) => setDate(e.target.value)}/>
                </div>

                <div className="new-order-q-temp">
                    <label htmlFor="">Temperature Sensitive</label>
                    <select name="new-order-input-temp" id="new-order-input-temp" className="new-order-input-temp" onChange={(e) => setTemp(e.target.value)}>
                        <option value="">-- Please Select an Option --</option>
                        <option value="Freezer">Freezer</option>
                        <option value="fridge">Fridge</option>
                        <option value="no">No</option>
                    </select>

                </div>

                <button type="submit" className="new-order-form-submit">Add Item to Inventory</button>

            </form>
        </div>

    )
}
