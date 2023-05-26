import axios from 'axios';
import {BASE_URL} from '../../common/constants';

const getData = (detailUrl: string) => {
    return axios.get(BASE_URL + detailUrl);
};

test('API 서버 조회 테스트', async () => {
    const response = await getData('posts');
    expect(response.status).toBe(200);
});