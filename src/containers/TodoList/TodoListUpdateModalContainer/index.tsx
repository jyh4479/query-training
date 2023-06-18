import { useState } from 'react';
import { Input, Modal, Spin } from 'antd';
import styled from '@emotion/styled';
import { useTodoListUpdateMutation } from '../../../hooks/serverStateHooks/useTodoList/useTodoListQuery';
import { Todo } from '../../../models/Todo';

type propsType = {
  modalHandler: any;
  item: Todo;
};

const TodoListUpdateModalContainer = (props: propsType) => {
  const { modalHandler, item } = props;

  const { mutate, isLoading } = useTodoListUpdateMutation();

  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);

  return (
    <Modal
      {...modalHandler}
      onOk={() =>
        mutate(
          {
            id: item.id,
            userId: item.userId,
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
          <UpdateTodoInput placeholder={'Title'} value={title} onChange={(e) => setTitle(e.target.value)} />
          <UpdateTodoInput placeholder={'Body'} value={body} onChange={(e) => setBody(e.target.value)} />
        </Spin>
      </ModalBody>
    </Modal>
  );
};
export default TodoListUpdateModalContainer;

const ModalBody = styled.div`
  padding: 20px;
`;

const UpdateTodoInput = styled(Input)`
  margin: 10px 0px;
`;
