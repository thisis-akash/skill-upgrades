import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

export default style = StyleSheet.create({
    storyContainer: {
        marginRight: 20,
    },

    firstName: {
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: 14,
        color: '#022150',
        marginTop: 8,
        textAlign: 'center'
    },

    userImageContainer: {
        borderColor: '#F35BAC',
        borderWidth: 1,
        padding: 3,
        borderRadius: 50
    },

    userImage: {
        width: 65,
        height: 65,
        borderRadius: 50
    }
});