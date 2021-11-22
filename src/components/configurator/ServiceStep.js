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

				<div className="service">
					<ul >
						<li>
							<label htmlFor="">Zamjena ulja i filtera (500 kn)<input type="checkbox" id="ulje" name="ulje" value="500" /></label>
						</li>
						<li>
							<label htmlFor="">Promjena pakni (300 kn)<input type="checkbox" id="pakne" name="pakne" value="300" /></label>
						</li>
						<li>
							<label htmlFor="">promjena guma (100 kn)<input type="checkbox" id="guma" name="guma" value="100" /></label>
						</li>
						<li>
						<label htmlFor="">Balansiranje guma (200 kn)<input type="checkbox" id="balans" name="balans" value="200" /></label>
						</li>
						<li>
						<label htmlFor="">Servis klima uređaja (300 kn)<input type="checkbox" id="klima" name="klima" value="300" /></label>
						</li>
						<li>
						<label htmlFor="">Zamjena ulja u kočnicama (350 kn)<input type="checkbox" id="kocnice" name="kocnice" value="350" /></label>
						</li>
					</ul>

					<div className="service_coupon">
						<button>Imam kupon</button>
					</div>
				</div>
				<div className="service_total">
					<h1>UKUPNO: 7616 kn</h1>
				</div>

				

				<div className="btns">
					<button className="back_btn" onClick={goBack}>Nazad</button>
					<button className="fwd_btn" onClick={goForward}>Nastavi</button>
				</div>
			</>
    )
}

export default ServiceStep