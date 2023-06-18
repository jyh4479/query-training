import { BUSAN_FOOD_BASE_URL, BUSAN_FOOD_SERVICE_URL, KTO_BASE_URL, KTO_SERVICE_URL } from '../../../commons/constants';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const API_KEY = 'BUSAN_TEST';

const getBusanTourApiUrl = (serviceName: string) => {
  return `${BUSAN_FOOD_BASE_URL}${serviceName}?serviceKey=${import.meta.env.VITE_BUSAN_API_KEY}`;
};

const fetchBusanTourList = async () => {
  const response = await axios.get(getBusanTourApiUrl(BUSAN_FOOD_SERVICE_URL.FOOD_IMG));
  return response.data;
};

export const useBusanTourListQuery = () => {
  return useQuery({ queryKey: [API_KEY], queryFn: fetchBusanTourList });
};
