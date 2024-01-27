import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { CardForm, StripeProvider } from '@stripe/stripe-react-native';

import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { STRIPE_PUBLISHABLE_KEY } from '../../constants/App';

import style from './style';

const Payment = ({ navigation }) => {

    const donationItemInformation = useSelector(
        state => state.donations.selectedDonationInformation,
    );

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView contentContainerStyle={style.paymentContainer}>
                <Header title={'Making Donation'} />
                <Text style={style.donationAmountDescription}>
                    You are about to donate {donationItemInformation.price}
                </Text>
                <View>
                    <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
                        <CardForm style={style.cardForm} />
                    </StripeProvider>
                </View>
            </ScrollView>
            <View style={style.button}>
                <Button title={'Donate'} />
            </View>
        </SafeAreaView>
    );

};

export default Payment;