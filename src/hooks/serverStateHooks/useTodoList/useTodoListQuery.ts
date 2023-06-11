import axios from 'axios';
import { BASE_URL } from '../../../commons/constants';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { CreateTodoModel, UpdateTodoModel } from '../../../models/Todo';

const API_KEY = 'posts';

const fetchTodoList = async () => {
  const response = await axios.get(BASE_URL + API_KEY);
  return response.data;
};

const createTodoList = async (newTodo: CreateTodoModel) => {
  await axios.post(BASE_URL + API_KEY, newTodo);
};

const updateTodoList = async (newTodo: UpdateTodoModel) => {
  await axios.put(BASE_URL + API_KEY + `/${newTodo.id}`, newTodo);
};

export const useTodoListQuery = () => {
  return useQuery({ queryKey: [API_KEY], queryFn: fetchTodoList });
};

export const useTodoListCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({ mutationFn: createTodoList, onSuccess: () => queryClient.invalidateQueries([API_KEY]) });
};

export const useTodoListUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({ mutationFn: updateTodoList, onSuccess: () => queryClient.invalidateQueries([API_KEY]) });
};
