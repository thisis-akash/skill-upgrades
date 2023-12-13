import { StyleSheet } from "react-native";

import { scaleFontSize } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    title: {
        color: '#022150',
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: scaleFontSize(24)
    }
});

export default style;