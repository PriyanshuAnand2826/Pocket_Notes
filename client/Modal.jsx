import React from 'react'
import ReactDom from 'react-dom'
import styles from './Modal.module.css'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'white',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '48%',
  width: '40%',
  borderRadius: '20px',
}

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const BTN_STYLE ={
  marginLeft: "90%", 
  marginTop: "13px" ,
  cursor:"pointer",
  width:"20px",
  height:"20px",
  color:"#979797",
  background:"none",
  border:"none",
  fontSize:"20px",

}


function Modal({children,onClose,modalRef}) {
  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div ref={ modalRef} className={styles.modal}>
        <button style={BTN_STYLE} onClick={onClose}> X </button>
        {children}
      </div>
    </>,
    document.getElementById('class-root')
  )
}

export default Modal