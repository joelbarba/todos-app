import './Modal.scss';

export default function Modal({ children, isOpen, onClose }) {
  return (
    <>
    { isOpen && 
      <>
        <div className="backdrop" onClick={onClose}></div>
        <div className="content">
          <div className="close-btn" onClick={onClose}>X</div>
          {children}
          </div>
      </>
    }
    </>
  );
}
