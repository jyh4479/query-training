import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import { useTodoListCreateMutation } from '../../hooks/serverStateHooks/useTodoList/useTodoListMutation';

const TodoListCreateModalContainer = (props) => {
  const { mutate } = useTodoListCreateMutation();

  const { modalHandler } = props;

  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <Modal
      {...modalHandler}
      onOk={() =>
        mutate({
          userId: id,
          title: title,
          body: body,
        })
      }
    >
      <Input placeholder={'ID'} onChange={(e) => setId(Number(e.target.value))} />
      <Input placeholder={'Title'} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder={'Body'} onChange={(e) => setBody(e.target.value)} />
    </Modal>
  );
};

export default TodoListCreateModalContainer;
