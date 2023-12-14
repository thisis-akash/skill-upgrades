import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    header: {
        marginLeft: 27,
        marginRight: 17,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    messageIcon: { padding: 14, backgroundColor: '#F9FAFB', borderRadius: 100 },

    userStoryContainer: {
        marginTop: 20,
        marginHorizontal: 28
    },

    userPostContainer: {
        marginHorizontal: 24,
    }
});

export default style;