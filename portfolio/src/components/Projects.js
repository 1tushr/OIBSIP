import React, { useState } from 'react';
import {Dialog} from '@material-ui/core';
import "../project.css";

const Projects = ({ imageSrc, iframeSrc, title }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="mac-window">
      <div className="mac-window-header"onClick={handleOpenModal}>
        <div className="mac-window-controls">
          <div className="mac-window-control mac-window-control-red"onClick={handleOpenModal}></div>
          <div className="mac-window-control mac-window-control-yellow"onClick={handleOpenModal}></div>
          <div className="mac-window-control mac-window-control-green" onClick={handleOpenModal}></div>
        </div>
      </div>
      <div className="mac-window-content">
        <img className="mock" src={imageSrc} alt="Mock" onClick={handleOpenModal} />
      </div>
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-controls">
                <div className="modal-control modal-control-red"onClick={handleCloseModal}></div>
                <div className="modal-control modal-control-yellow"onClick={handleCloseModal}></div>
                <div className="modal-control modal-control-green" onClick={handleCloseModal}></div>
              </div>
            </div>
            <div className="modal-body" >
              <iframe src={iframeSrc} title={title} allow='geolocation'></iframe>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Projects;














