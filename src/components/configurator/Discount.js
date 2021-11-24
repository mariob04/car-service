import React, {useState} from 'react'
import '../Modal.css'

function Discount () {

    const [coupon, setCoupon] = useState('')

    return (
        <form className="discount_input" >
            <input type="text" 
                value={coupon} 
                onChange={setCoupon}
            ></input>
            <button>Potvrdi</button>
        </form>
        )   
    }

export default Discount
