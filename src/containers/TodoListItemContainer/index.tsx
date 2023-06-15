import React from 'react';
import { useTodoListUpdateMutation } from '../../hooks/serverStateHooks/useTodoList/useTodoListQuery';
import styled from '@emotion/styled';
import { Button } from 'antd';

const TodoListItemContainer = (props) => {
  const { data } = props;
  const { mutate } = useTodoListUpdateMutation();

  return (
    <ItemWrapper>
      <div>{data}</div>
      <Button>Update</Button>
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
