import { useTodoListQuery } from '../../hooks/serverStateHooks/useTodoList/useTodoListQuery';
import { List } from 'antd';
import { TodoListHeader } from '../../components';

import type { TodoModel } from '../../models/Todo';

const TodoListContainer = (props) => {
  const { error, data: toDoData } = useTodoListQuery();

  return (
    <List
      header={<TodoListHeader />}
      bordered
      dataSource={toDoData}
      renderItem={(item: TodoModel) => <List.Item>{item.body}</List.Item>}
    />
  );
};

export default TodoListContainer;
