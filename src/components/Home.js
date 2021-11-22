import React, {useState} from 'react'
import './Home.css'
import ConfiguratorModal from './ConfiguratorModal';

function Home() {
  const [carModal, setCarModal] = useState(false);
  const closeModal = () => setCarModal(false);

  return (
    <div className="home">
      <h3>Pritisnite gumb kako biste pokrenuli konfigurator</h3>
      <button className="start_btn" onClick={() => {setCarModal(true)}}>
        Pokreni konfigurator
      </button>
      {/* prikaz modala */}
      {carModal && <ConfiguratorModal closeModal={closeModal} />}

    </div>
  )
}

export default Home