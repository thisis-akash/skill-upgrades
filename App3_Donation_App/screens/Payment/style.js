import { StyleSheet } from 'react-native';

import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    paymentContainer: {
        marginHorizontal: horizontalScale(24),
    },

    button: {
        marginHorizontal: horizontalScale(24),
        marginBottom: verticalScale(20),
    },

    donationAmountDescription: {
        marginTop: verticalScale(12),
    },

    cardForm: {
        height: verticalScale(200),
        marginTop: verticalScale(12),
    },
});

export default style;