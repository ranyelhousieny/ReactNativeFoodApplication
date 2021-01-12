// 1. Create Base Reducer
export const reducer = ( state = "Rany", action ) => {
    console.log( '4. [inside reducer], action = ', action );
    switch ( action.type ) {
        case 'LOADING':
            console.log( '5. [inside reducer Loading]', action);
            return "Loading";
        case 'RECEIVING':
            console.log( '5. [inside reducer RECEIVING]', action);
            return "Received";
        default:
            return state;
    }
}






