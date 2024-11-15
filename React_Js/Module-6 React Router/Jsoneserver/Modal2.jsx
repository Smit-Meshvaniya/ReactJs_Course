const Modal2 = ({ isOpen, onClose, user }) => {
    if (!isOpen) return null;
  
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '5px',
        }}>
          <h2>User Details</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Last Name:</strong> {user.lastname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
export default Modal2;
