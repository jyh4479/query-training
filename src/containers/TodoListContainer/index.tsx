import { useTodoListQuery } from '../../hooks/serverStateHooks/useTodoList/useTodoListQuery';
import { List } from 'antd';
import { TodoListHeaderContainer } from '../../containers';

import type { TodoModel } from '../../models/Todo';

const TodoListContainer = (props) => {
  const { isLoading, data: toDoData } = useTodoListQuery();

  return (
    <List
      header={<TodoListHeaderContainer />}
      bordered
      loading={isLoading}
      dataSource={toDoData}
      renderItem={(item: TodoModel) => <List.Item>{item.body}</List.Item>}
    />
  );
};

export default TodoListContainer;
