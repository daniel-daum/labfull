import axios from "axios";
import { useEffect, useState } from "react";
import "./new_order.css"

function New_Order() {

    // const [supply_name, setName] = useState("")
    // const [quantity, setQuantity] = useState("")
   

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault()
        
        const res = await axios.get("http://localhost:3001/data")

        alert(res)

    }





    return (
        <div className="new-order">

            <div className="new-order-title">Add New Order</div>

            <form className="new-order-form" onSubmit={submitForm} >

                <label htmlFor="nametest">Supply Name: </label>
                {/* <input type="text"  id="nametest" onChange={(e) => setName(e.target.value)}/> */}

                {/* <div>
                    <label htmlFor="new-order-suply-name">Supply Name:</label>
                    <input type="text" placeholder="Product Name" id="new-order-suply-name" />
                </div>

                <div>
                    <label htmlFor="new-order-supply-date">Date Ordered:</label>
                    <input type="date" placeholder="Item Name" id="new-order-supply-date" />
                </div>

                <div>
                    <label htmlFor="new-order-supply-quantity">Quantity Ordered:</label>
                    <input type="number" placeholder="0" id="new-order-supply-quantity" />
                </div> */}

                <button className="new-order-submit" type="submit">Add Supply</button>

            </form>




        </div>
    )
}

export default New_Order;