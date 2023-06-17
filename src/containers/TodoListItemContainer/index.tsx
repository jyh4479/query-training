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
      <BodyWrapper>{item.body}</BodyWrapper>
      <ButtonWrapper>
        <Button onClick={() => setIsOpen(true)}>Update</Button>
      </ButtonWrapper>
    </ItemWrapper>
  );
};

export default TodoListItemContainer;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: start;
`;

const BodyWrapper = styled.div`
  width: 80%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;
