import { useState } from 'react';
import { Modal, Input, Spin } from 'antd';
import { useTodoListCreateMutation } from '../../../hooks/serverStateHooks/useTodoList/useTodoListQuery';
import styled from '@emotion/styled';

const TodoListCreateModalContainer = (props) => {
  const { mutate, isLoading } = useTodoListCreateMutation();

  const { modalHandler } = props;

  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <Modal
      {...modalHandler}
      onOk={() =>
        mutate(
          {
            userId: id,
            title: title,
            body: body,
          },
          {
            onSuccess: () => modalHandler.onCancel(),
          },
        )
      }
    >
      <ModalBody>
        <Spin spinning={isLoading}>
          <CreateTodoInput placeholder={'ID'} onChange={(e) => setId(Number(e.target.value))} />
          <CreateTodoInput placeholder={'Title'} onChange={(e) => setTitle(e.target.value)} />
          <CreateTodoInput placeholder={'Body'} onChange={(e) => setBody(e.target.value)} />
        </Spin>
      </ModalBody>
    </Modal>
  );
};

export default TodoListCreateModalContainer;

const ModalBody = styled.div`
  padding: 20px;
`;

const CreateTodoInput = styled(Input)`
  margin: 10px 0px;
`;
