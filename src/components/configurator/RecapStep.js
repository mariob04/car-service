import React, {useEffect} from 'react'

function RecapStep({goBack, goForward, sendData, addFormData}) {
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

            <button onClick={goBack}>Nazad</button>
            <button onClick={goForward}>Posalji</button>
        </>
    )
}

export default RecapStep