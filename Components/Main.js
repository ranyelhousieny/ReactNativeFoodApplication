import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const MainComponent = () => {
    return (
        <view>
            <Text>Welcome to Rany's App</Text>
        </view>
    )
}

export default connect()(MainComponent);


