import React from 'react'
import { useState } from 'react/cjs/react.development'

function ContactStep({goBack, goForward}) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }
    
    return (
        <>
            <h2>Korak 3: Vaši kontakt podaci</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_input">
                    <input type="text" value={name} placeholder="Ime i prezime" required 
                    onChange={e => setName(e.target.value)} />
                </div>
                <div className="form_input">
                    <input type="text" value={phone} placeholder="Broj telefona" required
                    onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="form_input">
                    <input type="email" value={email} placeholder="E-mail" required
                    onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form_input">
                    <textarea value={text} rows="4" cols="50" placeholder="Napomena (opcionalno)"
                    onChange={e => setText(e.target.value)} ></textarea>
                </div>
            </form>

            <div className="btns">
                <button className="back_btn" onClick={goBack}>Nazad</button>
                <button className="fwd_btn" onClick={goForward}>Nastavi</button>
            </div>
        </>
    )
}

export default ContactStep