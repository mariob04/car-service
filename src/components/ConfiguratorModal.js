import React from 'react'
import { useState } from 'react'
import './Modal.css'

import CarStep from './configurator/CarStep';
import ServiceStep from './configurator/ServiceStep';
import RecapStep from './configurator/RecapStep';
import EndStep from './configurator/EndStep';
import ContactStep from './configurator/ContactStep';

function Modal({closeModal}) {
  const steps = [
		'car',
		'service',
		'contact',
		'recap',
		'end'
	]
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	// povratak nazad; minimalni korak je 0, ne moze se prebaciti u negativan korak
	const goBack = () => setCurrentStepIndex(Math.max(0, currentStepIndex - 1));
	// nastavak naprijed; ne dozvoljava prijelaz preko zadnjeg elementa.
	const goForward = () => setCurrentStepIndex(Math.min(steps.length -1, currentStepIndex + 1));

	const currentStep = steps[currentStepIndex]; // car, service, recap, end...
	const [formData, setFormData] = useState({});
	const addFormData = (data) => setFormData({...formData, ...data});
	// slanje podataka; alert window u ovom slučaju
	//const sendData = () => alert(`Posalji podatke: ${JSON.stringify(formData)}`);

	return (
		<div className="modal_backdrop">
			<div className="modal_container">
				<div className="modal_header">
					<h1>Konfigurator servisa</h1>
					<div>
						<button className="header_btn" onClick={closeModal}> X </button>
					</div>
				</div>

				{currentStep === 'car' && <CarStep closeModal={closeModal} goForward={goForward} addFormData={addFormData} />}
				{currentStep === 'service' && <ServiceStep goBack={goBack} goForward={goForward} addFormData={addFormData} />}
				{currentStep === 'contact' && <ContactStep goBack={goBack} goForward={goForward} addFormData={addFormData} />}
				{currentStep === 'recap' && <RecapStep goBack={goBack} goForward={goForward} addFormData={addFormData} />}
				{currentStep === 'end' && <EndStep closeModal={closeModal} addFormData={addFormData} />}
				
			</div>
		</div>
	)
}

export default Modal