import { renderHook, waitFor } from '@testing-library/react';
import ReactQueryContextConfig from '../../../tests/ReactQueryContextConfig';
import { useKtoTourListQuery } from './useKtoTourListQuery';

describe('Tour API 테스트', () => {
  test('Tour stay 조회 테스트', async () => {
    const { result } = renderHook(() => useKtoTourListQuery(), { wrapper: ReactQueryContextConfig });
    await waitFor(() => expect(result.current.status).toBe('success'));
  });
});
