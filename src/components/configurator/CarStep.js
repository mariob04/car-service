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

			<div className="modal_car-input">
				<div>
					<input type="radio" id="" name="" value="peugeot" checked/>
					<label htmlFor="">Peugeot</label>
				</div>
				<div>
					<input type="radio" id="" name="" value="opel" />
					<label htmlFor="">Opel</label>
				</div>				
				<div>
					<input type="radio" id="" name="" value="volkswagen" />
					<label htmlFor="">Volkswagen</label>
				</div>				
				<div>
					<input type="radio" id="" name="" value="toyota" />
					<label htmlFor="">Toyota</label>
				</div>				
				<div>
					<input type="radio" id="" name="" value="dacia" />
					<label htmlFor="">Dacia</label>
				</div>				
				<div>
					<input type="radio" id="" name="" value="ford" />
					<label htmlFor="">Ford</label>
				</div>				
				<div>
					<input type="radio" id="" name="" value="BMW" />
					<label htmlFor="">BMW</label>
				</div>				
				<div>
					<input type="radio" id="" name="" value="seat" />
					<label htmlFor="">Seat</label>
				</div>				
				<div>
					<input type="radio" id="" name="" value="alfa Romeo" />
					<label htmlFor="">Alfa Romeo</label>
				</div>				
				<div>
					<input type="radio" id="" name="" value="kia" />
					<label htmlFor="">Kia</label>
				</div>				
				<div>
					<input type="radio" id="" name="" value="honda" />
					<label htmlFor="">Honda</label>
				</div>
				
			</div>
			<div className="btns">
				<button className="btns back_btn" onClick={closeModal}>Odustani</button>
				<button className="btns fwd_btn" onClick={goForward}>Nastavi</button>
			</div>
		</>
	)
}

export default CarStep