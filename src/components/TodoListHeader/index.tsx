import React, { useState } from 'react';
import TodoListCreateModalContainer from '../../containers/TodoListCreateModalContainer';

const TodoListHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <TodoListCreateModalContainer modalHandler={{ open: isOpen, onCancel: handleCancel }} />
      <div>TodoList Header</div>
      <button onClick={() => setIsOpen(true)}>Test</button>
    </>
  );
};

export default TodoListHeader;
