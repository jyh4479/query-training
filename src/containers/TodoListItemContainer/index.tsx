import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import TodoListUpdateModalContainer from '../TodoListUpdateModalContainer';

const TodoListItemContainer = (props) => {
  const { item } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <ItemWrapper>
      <TodoListUpdateModalContainer modalHandler={{ open: isOpen, onCancel: handleCancel }} item={item} />
      <div>{item.body}</div>
      <Button onClick={() => setIsOpen(true)}>Update</Button>
    </ItemWrapper>
  );
};

export default TodoListItemContainer;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
`;
