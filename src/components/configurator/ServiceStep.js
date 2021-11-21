import React, {useEffect} from 'react'

function ServiceStep({goBack, goForward, addFormData}) {
	  useEffect(() => {
			// primjer podataka
			addFormData({
				selectedServices: ['filterChange', 'tireChange']
			})
		}, []);

    return (
			<>
				<h2>Korak 2: Odaberite usluge potrebne na Vašem vozilu</h2>

				<div className="modal_input">
					<input type="checkbox" id="ulje" name="ulje" value="500" />
					<label htmlFor="">Zamjena ulja i filtera (500 kn)</label>
					<input type="checkbox" id="pakne" name="pakne" value="300" />
					<label htmlFor="">Promjena pakni (300 kn)</label>
					<input type="checkbox" id="guma" name="guma" value="100" />
					<label htmlFor="">promjena guma (100 kn)</label>
					<input type="checkbox" id="balans" name="balans" value="200" />
					<label htmlFor="">Balansiranje guma (200 kn)</label>
					<input type="checkbox" id="klima" name="klima" value="300" />
					<label htmlFor="">Servis klima uređaja (300 kn)</label>
					<input type="checkbox" id="kocnice" name="kocnice" value="350" />
					<label htmlFor="">Zamjena ulja u kočnicama (350 kn)</label>
				</div>

				<button onClick={goBack}>Nazad</button>
				<button onClick={goForward}>Nastavi</button>
			</>
    )
}

export default ServiceStep