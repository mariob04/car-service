import React, {useEffect} from 'react'

function ContactStep({goBack, goForward, addFormData}) {
    useEffect(() => {
		// primjer
		addFormData({
			endingData: 'something'
		})
	}, []);

    return (
        <>
            <h2>Korak 3: Vaši kontakt podaci</h2>
            <div className="form_input">
                <input type="text" id="name" name="name" placeholder="Ime i prezime" required />
                <input type="number" id="phone" name="phone" placeholder="Broj telefona" required />
                <input type="email" id="email" name="email" placeholder="E-mail" required />

                <textarea id="desc" name="desc" rows="4" cols="50" placeholder="Napomena (opcionalno)"></textarea>
            </div>

            <div className="btns">
                <button className="back_btn" onClick={goBack}>Nazad</button>
                <button className="fwd_btn" onClick={goForward}>Nastavi</button>
            </div>
        </>
    )
}

export default ContactStep