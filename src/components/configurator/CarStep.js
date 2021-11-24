import React, {useState, useEffect} from 'react'

function CarStep({closeModal, goForward, addFormData}) {

	useEffect(() => {
		// primjer
		addFormData({
			carMaker: 'toyota'
		})
	}, []);

	const car = [
		{model: "Peugeot"},
		{model: "Opel"},
		{model: "Volkswagen"},
		{model: "Toyota"},
		{model: "Dacia"},
		{model: "Ford"},
		{model: "BMW"},
		{model: "Seat"},
		{model: "Alfa Romeo"},
		{model: "Kia"},
		{model: "Honda"},
	];

	const [checked, setChecked] = useState([]);

	const handleChange = (item, checked) =>
    checked
      ? setChecked((prev) => [...prev, item])
      : setChecked((prev) =>
          prev.filter((c) => c.model !== item.model)
        );

	return (
		<>
			<h2>Korak 1: Odaberite proizvođača vašeg vozila</h2>

			<div className="modal_car-input">
				{car.map((c) => {
					return (
						<ul>
							<li>
								<input type="radio" onChange={(e) => handleChange(c, e.target.selected)} />
								{` ${c.model}`}
							</li>
						</ul>
        			);
      			})}
			</div>
			<div className="btns">
				<button className="btns back_btn" onClick={closeModal}>Odustani</button>
				<button className="btns fwd_btn" onClick={goForward}>Nastavi</button>
			</div>
		</>
	)
}

export default CarStep