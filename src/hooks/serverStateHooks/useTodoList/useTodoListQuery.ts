import axios from 'axios';
import { BASE_URL } from '../../../commons/constants';
import { useQuery } from '@tanstack/react-query';

const API_KET = 'posts';

const fetchTodoList = async () => {
  const response = await axios.get(BASE_URL + API_KET);
  return response.data;
};

export const useTodoListQuery = () => {
  return useQuery({ queryKey: [API_KET], queryFn: fetchTodoList });
};
