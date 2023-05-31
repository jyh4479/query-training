import axios from 'axios';
import {BASE_URL} from "../../../commons/constants";
import {CreateTodoModel, UpdateTodoModel} from "../../../models/Todo";
import {useMutation} from "@tanstack/react-query";

const API_KET = 'posts';

const createTodoList = async (newTodo: CreateTodoModel) => {
    await axios.post(BASE_URL + API_KET, newTodo);
};

const updateTodoList = async (newTodo: UpdateTodoModel) => {
    await axios.put(BASE_URL + API_KET + `/${newTodo.id}`, newTodo);
};

export const useTodoListCreateMutation = () => {
    return useMutation({mutationFn: createTodoList});
};

export const useTodoListUpdateMutation = () => {
    return useMutation({mutationFn: updateTodoList});
};