import { useState } from 'react';
import { TodoListCreateModalContainer } from '../../containers';
import { Button, Space } from 'antd';
import styled from '@emotion/styled';

const TodoListHeaderContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <HeaderWrapper>
      <Space>
        <TodoListCreateModalContainer modalHandler={{ open: isOpen, onCancel: handleCancel }} />
        <Button onClick={() => setIsOpen(true)}>Create Todo</Button>
      </Space>
    </HeaderWrapper>
  );
};

export default TodoListHeaderContainer;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
