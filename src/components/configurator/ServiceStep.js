import React, {useState, useEffect} from 'react'
import Discount from './Discount';

function ServiceStep({goBack, goForward, addFormData}) {
	const [priceDiscount, setPriceDiscount] = useState(false);

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
	const handleChange = (item, checked) =>
    checked
      ? setChecked((prev) => [...prev, item])
      : setChecked((prev) =>
          prev.filter((c) => c.service !== item.service && c.price !== item.price)
        );

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
				
				<div className="service_coupon">
					<button onClick={() => {setPriceDiscount(true)}}>Imam kupon</button>
				</div>
				<div>
					{
						priceDiscount === true && <Discount />
					}						
				</div>
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