import React from 'react';
import { Modal } from 'antd';

const TodoListCreateModalContainer = (props) => {
  const { modalHandler } = props;

  return <Modal {...modalHandler}>Modal Test</Modal>;
};

export default TodoListCreateModalContainer;
