import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && <Modal closeModalHandler={closeModalHandler} />}
      {isModalOpen && <Backdrop closeModalHandler={closeModalHandler} />}
    </div>
  );
};

export default Todo;
