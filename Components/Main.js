import React from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { ApiKey } from '../keys';

const MainComponent = ( props ) => {
    console.log( props );
    return (
        <view>
            <Text h1>Welcome to { props.prop }'s App </Text>
            <hr/>
            <Text>prop from Props = { props.prop }</Text>
            <Button 
                title="Add Last Name"
                onPress={ props.addLastName}
            />
            
        </view>
    )
}

const mapStateToProps = (state) => {
    return {
        prop: state
    }
}

// Action Creator
const addLastNameActionCreator = () => ( dispatch ) => {
    console.log( "[*** 2. inside addLastNameActionCreator]" );

    // Case1: Think returns Loading until receives response
    dispatch( { type: "LOADING" } );

    // Calling the server
    const url = 'https://api.nal.usda.gov/fdc/v1/foods/list?api_key=' + ApiKey
    fetch( url)
        // Case2 Thunk received response
        .then( response => response.json() )
        .then( responseJson => {
            console.log( "3. received ", responseJson );
            dispatch( {
                type: "RECEIVED",
                payload: responseJson
            } );
        });
}



const mapDispatchToProps = (dispatch) => {
    return {
        addLastName: () => {
            console.log("[*** 1. inside addLastName in mapDispatchToProps]")
            dispatch( addLastNameActionCreator() );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);


