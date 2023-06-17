import { useTodoListQuery } from '../../hooks/serverStateHooks/useTodoList/useTodoListQuery';
import { List } from 'antd';
import { TodoListHeaderContainer, TodoListItemContainer } from '../../containers';

import type { TodoModel } from '../../models/Todo';
import styled from '@emotion/styled';

const TodoListContainer = (props) => {
  const { isLoading, data: toDoData } = useTodoListQuery();

  return (
    <TodoList
      header={<TodoListHeaderContainer />}
      bordered
      loading={isLoading}
      dataSource={toDoData}
      renderItem={(item: TodoModel) => (
        <List.Item>
          <TodoListItemContainer item={item} />
        </List.Item>
      )}
    />
  );
};

export default TodoListContainer;

const TodoList = styled(List)`
  width: 700px;
`;
