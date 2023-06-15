import { useTodoListQuery } from '../../hooks/serverStateHooks/useTodoList/useTodoListQuery';
import { Button, List } from 'antd';
import { TodoListHeaderContainer } from '../../containers';
import { TodoListItemContainer } from '../../containers';

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
        <List.Item>
          <TodoListItemContainer data={item.body} />
        </List.Item>
      )}
    />
  );
};

export default TodoListContainer;
