import { useTodoListQuery } from '../../hooks/serverStateHooks/useTodoList/useTodoListQuery';
import { Button, List } from 'antd';
import { TodoListHeaderContainer } from '../../containers';

import type { TodoModel } from '../../models/Todo';
import styled from '@emotion/styled';

const TodoListContainer = (props) => {
  const { isLoading, data: toDoData } = useTodoListQuery();

  return (
    <List
      header={<TodoListHeaderContainer />}
      bordered
      loading={isLoading}
      dataSource={toDoData}
      renderItem={(item: TodoModel) => (
        <ItemWrapper>
          <List.Item>{item.body}</List.Item>
          <Button>Update</Button>
        </ItemWrapper>
      )}
    />
  );
};

export default TodoListContainer;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
`;
