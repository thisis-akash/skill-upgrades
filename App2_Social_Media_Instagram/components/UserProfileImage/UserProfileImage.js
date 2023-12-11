import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const UserProfileImage = (props) => {
    const { profileImage, imageDimensions } = props;

    return (
        <View style={[style.userImageContainer, { borderRadius: imageDimensions }]}>
            <Image style={{ width: imageDimensions, height: imageDimensions }} source={profileImage}></Image>
        </View>
    );
}

UserProfileImage.propTypes = {
    profileImage: PropTypes.any.isRequired,
    imageDimensions: PropTypes.number.isRequired
};

export default UserProfileImage;