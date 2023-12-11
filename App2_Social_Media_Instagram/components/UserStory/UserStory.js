import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = (props) => {
    const { firstName, profileImage } = props;

    return (
        <View style={style.storyContainer}>
            <UserProfileImage imageDimensions={65} profileImage={profileImage} />
            <Text style={style.firstName}>{firstName}</Text>
        </View>
    );
}

UserStory.propTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired
}

export default UserStory;