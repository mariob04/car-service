import React, {useEffect} from 'react'

function CarStep({closeModal, goForward, addFormData}) {
	useEffect(() => {
		// primjer
		addFormData({
			carMaker: 'toyota'
		})
	}, []);

	return (
		<>
			<h2>Korak 1: Odaberite proizvođača vašeg vozila</h2>

			<div className="modal_input">
				<input type="radio" id="" name="" value="peugeot" checked/>
				<label htmlFor="">Peugeot</label>
				<input type="radio" id="" name="" value="opel" />
				<label htmlFor="">Opel</label>
				<input type="radio" id="" name="" value="volkswagen" />
				<label htmlFor="">Volkswagen</label>
				<input type="radio" id="" name="" value="toyota" />
				<label htmlFor="">Toyota</label>
				<input type="radio" id="" name="" value="dacia" />
				<label htmlFor="">Dacia</label>
				<input type="radio" id="" name="" value="ford" />
				<label htmlFor="">Ford</label>
				<input type="radio" id="" name="" value="BMW" />
				<label htmlFor="">BMW</label>
				<input type="radio" id="" name="" value="seat" />
				<label htmlFor="">Seat</label>
				<input type="radio" id="" name="" value="alfa Romeo" />
				<label htmlFor="">Alfa Romeo</label>
				<input type="radio" id="" name="" value="kia" />
				<label htmlFor="">Kia</label>
				<input type="radio" id="" name="" value="honda" />
				<label htmlFor="">Honda</label>
			</div>
			<button onClick={closeModal}>Odustani</button>
			<button onClick={goForward}>Nastavi</button>
		</>
	)
}

export default CarStep