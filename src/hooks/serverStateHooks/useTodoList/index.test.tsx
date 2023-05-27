import {useTodoListQuery} from './useTodoListQuery';
import {renderHook, waitFor} from '@testing-library/react';
import ReactQueryContextConfig from "../../../tests/ReactQueryContextConfig";

test('TodoListQuery 조회 테스트', async () => {
    const {result} = renderHook(() => useTodoListQuery(), {wrapper: ReactQueryContextConfig});
    await waitFor(() => expect(result.current.status).toBe('success'));
});