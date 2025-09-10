import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NewOrderForm = () => {
  const [newOrder, setNewOrder] = useState({
    customerName: "",
    customerPhoneNumber: "",
    customerEmail: "",
    customerAddress: "",
    delivery: false,
    tip: "",
  });

  

  return (
    <form>
      <h2>Create Order</h2>
      <fieldset>
        <div>
          <label>Name:</label>
          <input type="text" name="customer-name" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="customer-phone" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Email:</label>
          <input type="text" name="customer-email" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Address:</label>
          <input type="text" name="customer-address" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Delivery?</label>
          <input type="checkbox" name="delivery-option" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Tip Amount:</label>
          <input type="text" name="customer-tip" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <button>Save</button>
        </div>
      </fieldset>
    </form>
  );
};
