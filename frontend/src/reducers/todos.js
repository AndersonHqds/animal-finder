export default function todos(state = { counter: 0 }, action) {
    switch (action.type) {
        case 'ADD_COUNTER':
            console.log(state);
            return { ...state, counter: state.counter + 1 }
        default:
            return state;
    }
}