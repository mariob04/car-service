import React, {useState, useEffect} from 'react'
import Discount from './Discount';

function ServiceStep({goBack, goForward, addFormData}) {

	const [priceDiscount, setPriceDiscount] = useState(false)
	//const onClick = () => setPriceDiscount(true)
	//const [coupon, setCoupon] = useState('')

	useEffect(() => {
		// primjer podataka
		addFormData({
			selectedServices: ['filterChange', 'tireChange']
		})
	}, []);

	const items = [
		{service: "Zamjena ulja i filtera", price: 500},
		{service: "Promjena pakni", price: 300},
		{service: "Promjena guma", price: 100},
		{service: "Balansiranje guma", price: 100},
		{service: "Servis klima uređaja", price: 250},
		{service: "Zamjena ulja u kočnicama", price: 100},
	];

	const [checked, setChecked] = useState([]);
	const handleChange = (item, checked) => {
    checked
      ? setChecked((prev) => [...prev, item])
      : setChecked((prev) =>
          prev.filter((c) => c.service !== item.service && c.price !== item.price)
    	);
	}
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// }
	// const Discount = () => (
	// 	<form className="discount_input" >
    //         <input type="text" 
	// 			name="coupon"
    //             value={coupon} 
    //             onChange={event => setCoupon(event.target.value)}
    //         ></input>
    //         <input type="submit" value="Submit" />
    //     </form>
	// )
	
    return (
		<>
			<h2>Korak 2: Odaberite usluge potrebne na Vašem vozilu</h2>

			<div className="service">
				{items.map((c) => {
					return (
						<ul>
							<li>
								<input type="checkbox" onChange={(e) => handleChange(c, e.target.checked)} />
								{` ${c.service} (${c.price} kn)`}
							</li>
						</ul>
        			);
      			})}
				
				<div>
					<button className="service_coupon" onClick={() => {setPriceDiscount(true)}}>Imam kupon</button>
					{/* <input className="service_coupon" type="submit" value="Imam kupon" onClick={onClick}/> */}
					{ priceDiscount === true && <Discount /> }
				</div>
				
				
				{/* <div>
					{ (this.state.value === "Tokic123") 				
						? <h1>UKUPNO: {checked.reduce((sum, { price }) => (sum + price) * 0.7, 0)} kn</h1>
						: <h1>UKUPNO: {checked.reduce((sum, { price }) => (sum + price), 0)} kn</h1>
					}		 
					
				</div> */}
				
			</div>
			<div>
				<h1>UKUPNO: {checked.reduce((sum, { price }) => (sum + price), 0)} kn</h1>
			</div>

			<div className="btns">
				<button className="back_btn" onClick={goBack}>Nazad</button>
				<button className="fwd_btn" onClick={goForward}>Nastavi</button>
			</div>
		</>
    )
}

export default ServiceStep