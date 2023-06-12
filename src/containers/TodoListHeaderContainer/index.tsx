import React, { useState } from 'react';
import { TodoListCreateModalContainer } from '../../containers';

const TodoListHeaderContainer = (props) => {
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

export default TodoListHeaderContainer;
