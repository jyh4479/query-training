import axios from 'axios';
import {BASE_URL} from "../../../commons/constants";
import {CreateTodoModel, UpdateTodoModel} from "../../../models/Todo";
import {useMutation} from "@tanstack/react-query";

const API_KET = 'posts';

const createTodoList = async (newTodo: CreateTodoModel) => {
    await axios.post(BASE_URL + API_KET, newTodo);
};

const updateTodoList = async (newTodo: UpdateTodoModel) => {
    await axios.put(BASE_URL + API_KET, newTodo);
};

export const useTodoListCreateMutation = (newTodo: CreateTodoModel) => {
    return useMutation({mutationFn: () => createTodoList(newTodo)});
};

export const useTodoListUpdateMutation = (newTodo: UpdateTodoModel) => {
    return useMutation({mutationFn: () => updateTodoList(newTodo)});
};