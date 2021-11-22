import React, {useEffect} from 'react'

function EndStep({closeModal, addFormData}) {
    useEffect(() => {
		// primjer
		addFormData({
			endingData: 'something'
		})
	}, []);

    return (
        <>
            <h2>Vaša prijava je uspješno poslana</h2>
            <p>Vaša prijava je poslana i zaprimljena. <br/> Kontaktirati ćemo Vas u najkraćem mogućem roku. <br/> Hvala Vam</p>

            <button className="btns back_btn close_btn" onClick={closeModal}> Zatvori </button>
        </>
    )
}

export default EndStep