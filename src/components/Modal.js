const Modal = ({ closeModalHandler }) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={closeModalHandler}>
        Cancel
      </button>
      <button className="btn" onClick={closeModalHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
