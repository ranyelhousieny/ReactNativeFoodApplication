// Logging Middleware
export const logging = ( store ) => {
    return ( next ) => {
        return ( action ) => {
            console.log( "3. [inside logging],  action = ", action );
            console.log( "3. [inside logging],  State before next = ", store.getState() );
            const result = next( action );
            console.log( "6. [logging], store value after next", store.getState() );
            return result;
        };
    };
};