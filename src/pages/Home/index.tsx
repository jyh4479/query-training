import { Spin } from 'antd';
import { Suspense } from 'react';
import { TodoListContainer } from '../../containers/TodoList';

const Home = () => {
  return (
    <Suspense fallback={<Spin />}>
      <TodoListContainer />
    </Suspense>
  );
};

export default Home;
