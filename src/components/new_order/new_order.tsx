import "./new_order.css"

function New_Order() {

    return (
        <div className="new-order">

            <h1 className="new-order-title">Add New Order</h1>


            <form className="new-order-wrapper" action="#">

                <div>
                    <label htmlFor="new-order-item-name">Product Name</label>
                    <input type="text" placeholder="Product Name" id="item-name" />
                </div>

                <div>
                    <label htmlFor="new-order-item-date">Order Date</label>
                    <input type="date" placeholder="Item Name" id="item-name"  />
                </div>

                <div>
                    
                </div>




                <input type="text" placeholder="Item Name" id="item-name" />
                <input type="text" placeholder="Item Name" id="item-name" />
                <input type="text" placeholder="Item Name" id="item-name" />



            </form>




        </div>
    )
}

export default New_Order;