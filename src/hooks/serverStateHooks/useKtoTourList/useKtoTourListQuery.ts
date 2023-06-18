import axios from 'axios';
import { KTO_BASE_URL, KTO_SERVICE_URL } from '../../../commons/constants';
import { useQuery } from '@tanstack/react-query';

const API_KEY = 'KTO_TEST';

const getTourApiUrl = (serviceName: string) => {
  return `${KTO_BASE_URL}${serviceName}?serviceKey=${
    import.meta.env.VITE_KTO_API_KEY
  }&MobileOS=ETC&MobileApp=AppTest&_type=json`;
};

const fetchTourList = async () => {
  const response = await axios.get(getTourApiUrl(KTO_SERVICE_URL.STAY));
  return response.data;
};

export const useKtoTourListQuery = () => {
  return useQuery({ queryKey: [API_KEY], queryFn: fetchTourList });
};
