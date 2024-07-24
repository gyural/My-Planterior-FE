import React from 'react';
import ReactModal from 'react-modal';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const ConfirmModal = ({ show, handleClose }) => {
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={handleClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          position: 'relative',
          top: 0,
          left: 0,
          width: '400px',
          height: '200px',
          margin: 'auto',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }
      }}
      role="dialog"
      preventScroll={true}
      aria={{
        labelledby: "heading",
        describedby: "full_description"
      }}
    >
      <h2>식물 키우기 성공!!</h2>
      <p className='text-left'>식물을 키우면서 하셨던 정보를 통해 맞춤형 식물을 추천해줄 수 있어요</p>
      <NavLink to="/recommand">
        <Button variant="success" onClick={handleClose}>확인하기</Button>
      </NavLink>
    </ReactModal>
  );
}

export default ConfirmModal;