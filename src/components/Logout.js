import React from 'react';
import Modal from 'react-modal';
import "./logout.css"
const Logout = ({ isOpen, onClose, onConfirm }) => {
        return (
          <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Logout"
          >
            <h2 id="logoutheading">Are you sure you want to logout?</h2>
            <div>
            <button className="modalprimary" onClick={onConfirm}>Yes</button>
            <button className="modalsecandary" onClick={onClose}>No</button>
            </div>
          </Modal>
        );
      };
  


export default Logout