import React from 'react';
import {useTodoListQuery} from "../../hooks/serverStateHooks/useTodoList/useTodoListQuery";

const TodoListContainer = (props) => {

    const {error, data: toDoData} = useTodoListQuery();

    return (
        <div>Todo list container</div>
    )
}

export default TodoListContainer;