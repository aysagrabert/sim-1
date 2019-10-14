import React from "react";
import Form from '../Form/Form.css'

function form() {
  return (
    <div className='Form'>
    Form
    <p>Image url:</p>
    <input/>

    <p> Product name:</p>
    <input/>

    <p>Price:</p>
    <input/>

    <br/>

    <button>Cancel</button>
    <button>Add to Inventory</button>
    </div>
  );
}

export default form;