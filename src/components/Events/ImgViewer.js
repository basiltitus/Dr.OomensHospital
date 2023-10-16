import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ImgViewer({show,setShow,imgUrl}) {

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} fullscreen id='modal-viewer-div'>
        <Modal.Body >
            <img src={imgUrl} id='modal-viewer'/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImgViewer;