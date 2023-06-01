
const actions = {
    '[TODO] Add Todo': (todos, payload) => [...todos, payload],
    '[TODO] Remove Todo': (todos, payload) => (todos.filter(todo => todo.id !== payload.id)),
    '[TODO] Toggle Todo': (todos, payload) => (todos.map(todo => {
        if (todo.id == payload.id) todo.done = !todo.done;
        return todo;
    })),
    '[TODO] ToggleCro Todo': (todos, payload) => (todos.map(todo => {
        if (todo.id == payload.id) payload.cro = !payload.cro;
        return todo;
    })),
    '[TODO] Edit Todo': (todos, payload) => (todos.map(todo => {
        if (todo.id == payload.id) todo.description = payload.description;
        return todo;
    })),
    '[TODO] Remove Todos': () => []
}

export const todoReducer = (initialState = [], action = {}) => {

    const handleFuntionTodo = actions[action.type] || false;
    // if (!existe) throw new Error(`Action.type = ${action.type} no esta implementada`);
    return handleFuntionTodo ? handleFuntionTodo(initialState, action.payload) : initialState
}
