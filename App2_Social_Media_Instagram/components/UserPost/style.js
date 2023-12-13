import { StyleSheet } from 'react-native';

import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

export default style = StyleSheet.create({
    userContainer: { flexDirection: 'row' },

    userTextContainer: {
        justifyContent: 'center',
        marginLeft: horizontalScale(10),
    },

    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    username: {
        color: '#000',
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: scaleFontSize(16),
    },

    location: {
        color: '#79869F',
        fontFamily: getFontFamily('Inter', '400'),
        fontSize: scaleFontSize(12),
        marginTop: verticalScale(5),
    },

    postImage: {
        alignItems: 'center',
        marginVertical: verticalScale(20),
    },

    userPostContainer: {
        marginTop: verticalScale(35),
        paddingBottom: verticalScale(20),
        borderBottomWidth: 1,
        borderBottomColor: '#EFF2F6',
    },

    userPostStats: { marginLeft: horizontalScale(10), flexDirection: 'row' },

    userPostStatButton: { flexDirection: 'row', alignItems: 'center' },

    userPostStatButtonRight: { flexDirection: 'row', marginLeft: horizontalScale(27), alignItems: 'center' },

    userPostStatText: { marginLeft: horizontalScale(5), color: '#79869F' },
});