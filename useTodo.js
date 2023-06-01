import { useReducer, useCallback, useEffect } from "react";
import { todoReducer } from "../08-useReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = useCallback(
        (todo) => {
            dispatch({
                type: '[TODO] Add Todo',
                payload: todo
            });
        },
        [],
    )
    const onRemoveTodo = useCallback(
        (todo) => {
            dispatch({
                type: '[TODO] Remove Todo',
                payload: todo
            });
        },
        [],
    )
    const onRemoveTodos = useCallback(
        () => {
            dispatch({
                type: '[TODO] Remove Todos',
            });
        },
        [],
    )

    const onToggleTodo = useCallback(
        (todo) => {
            dispatch({
                type: '[TODO] Toggle Todo',
                payload: todo
            });
        },
        [],
    )

    const onToggleCroTodo = useCallback(
        (todo) => {
            dispatch({
                type: '[TODO] ToggleCro Todo',
                payload: todo
            });
        },
        [],
    )

    const onEditTodo = useCallback(
        (todo) => {
            dispatch({
                type: '[TODO] Edit Todo',
                payload: todo
            });
        },
        [],
    )

    return {
        todos,
        dispatch,
        handleNewTodo,
        onRemoveTodo,
        onRemoveTodos,
        onToggleTodo,
        onToggleCroTodo,
        onEditTodo,
        pendingTodosCount: todosPendientes(todos)
    };
}

const todosPendientes = (todos) => {
    return todos.filter(todo => (!todo.done)).length;
}
