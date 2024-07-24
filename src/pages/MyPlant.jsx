// src/pages/Home.js
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ConfilmModal from './MyPlant-components/ConfirmModal';

const MyPlant = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-full h-full bg-contain bg-center" style={{background: `url(${process.env.PUBLIC_URL}/asset/questions_plant_size/40-60.png)`}}>
      <Button variant="primary" onClick={handleShow}>
        확인하기
      </Button>
      <ConfilmModal show={show} handleClose={handleClose}></ConfilmModal>
    </div>
  );
}

export default MyPlant;