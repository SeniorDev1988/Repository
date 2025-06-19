// CustomModal.js
import { Modal, Button } from 'react-bootstrap';

function CustomModal({ show, onClose, onClick, title, children }) {
  return (
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button onClick={onClick} variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;  // <-- Ensure you have 'default' export here
