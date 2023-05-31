import {useTodoListQuery} from './useTodoListQuery';
import {act, renderHook, waitFor} from '@testing-library/react';
import ReactQueryContextConfig from "../../../tests/ReactQueryContextConfig";
import {useTodoListCreateMutation, useTodoListUpdateMutation} from "./useTodoListMutation";
import {CreateTodoModel, UpdateTodoModel} from "../../../models/Todo";

test('TodoListQuery 조회 테스트', async () => {
    const {result} = renderHook(() => useTodoListQuery(), {wrapper: ReactQueryContextConfig});
    await waitFor(() => expect(result.current.status).toBe('success'));
});

test('TodoListMutation 생성 테스트', async () => {
    const newTodo: CreateTodoModel = {
        userId: 2345,
        title: 'testTitle',
        body: 'testBody'
    };

    const {result} = renderHook(() => useTodoListCreateMutation(), {wrapper: ReactQueryContextConfig});
    act(() => result.current.mutate(newTodo));
    await waitFor(() => expect(result.current.status).toBe('success'));
});

test('TodoListMutation 업데이트 테스트', async () => {
    const newTodo: UpdateTodoModel = {
        id: 1,
        userId: 2345,
        title: 'testTitle',
        body: 'testBody'
    };

    const {result} = renderHook(() => useTodoListUpdateMutation(), {wrapper: ReactQueryContextConfig});
    act(() => result.current.mutate(newTodo));
    await waitFor(() => expect(result.current.status).toBe('success'));
});