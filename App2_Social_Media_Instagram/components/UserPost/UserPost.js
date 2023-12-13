import { View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH, faHeart, faMessage, faBookmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';

const UserPost = (props) => {
    const { profileImage, firstName, lastName, location, comments,
        likes, bookmarks, image } = props;

    return (
        <View style={style.userPostContainer}>


            <View style={style.user}>

                <View style={style.userContainer}>
                    <UserProfileImage imageDimensions={horizontalScale(48)} profileImage={profileImage} />
                    <View style={style.userTextContainer}>
                        <Text style={style.username}>{firstName} {lastName}</Text>
                        {location && (<Text style={style.location}>{location}</Text>)}
                    </View>
                </View>

                <FontAwesomeIcon icon={faEllipsisH} size={scaleFontSize(24)} color={'#79869F'} />

            </View>


            <View style={style.postImage}>
                <Image source={image} />
            </View>


            <View style={style.userPostStats}>

                <View style={style.userPostStatButton}>
                    <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
                    <Text style={style.userPostStatText}>{likes}</Text>
                </View>

                <View style={[style.userPostStatButton, { marginLeft: horizontalScale(27) }]}>
                    <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
                    <Text style={style.userPostStatText}>
                        {comments}
                    </Text>
                </View>

                <View style={style.userPostStatButtonRight}>
                    <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
                    <Text style={style.userPostStatText}>
                        {bookmarks}
                    </Text>
                </View>

            </View>


        </View>
    );
}

UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profileImage: PropTypes.any.isRequired,
    bookmarks: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired
}

export default UserPost;