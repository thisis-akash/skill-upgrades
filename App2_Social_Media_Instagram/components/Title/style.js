const { StyleSheet } = require("react-native");

const { getFontFamily } = require("../../assets/fonts/helper");

const style = StyleSheet.create({
    title: {
        color: '#022150',
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: 24
    }
});

export default style;