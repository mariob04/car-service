import React, {useEffect} from 'react'

function RecapStep({goBack, goForward, addFormData}) {
    useEffect(() => {
		// primjer
		addFormData({
			recapConfirmed: true
		})
	}, []);

    return (
        <>
            <h2>Korak 4: Pregled i potvrda odabira </h2>

            <p>Molimo Vas da još jednom pregledate i potvrdite unešene podatke. 
                Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje pored svake kategorije.
                Kada ste provjerili i potvrdili podatke, pritisnite gumb <b>Pošalji</b> na dnu kako bi se upit proslijedio na servis
            </p>

            <div className="recap">
                <div className="recap_data">
                    <div className="recap_info">
                        <h3>Model vozila</h3>
                        <button>Uredi</button>
                    </div>
                    <div className="recap_service">
                        <h5>Model auta</h5>
                    </div>
                </div>
                <div className="recap_data">
                    <div className="recap_info">
                        <h3>Odabrane usluge</h3>
                        <button>Uredi</button>
                    </div>
                    <div className="recap_service">
                        <ul>
                            <li>Usluga 1</li>
                            <li>Usluga 2</li>
                            <li>Usluga 3</li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className="recap_contact">
                <div className="recap_info">
                    <h3>Kontak podaci</h3>
                    <button>Uredi</button>
                </div>
                <div className="contact_info">
                        <div>
                            <h5>Ime i Prezime: </h5>
                            <h5>Broj telefona: </h5>
                        </div>
                        <div>
                            <h5>Email adresa: </h5>
                            <h5>Napomena: </h5>
                        </div>

                </div>
            </div>

            <div className="btns">
                <button className="back_btn" onClick={goBack}>Nazad</button>
                <button className="fwd_btn" onClick={goForward}>Posalji</button>
            </div>
        </>
    )
}

export default RecapStep