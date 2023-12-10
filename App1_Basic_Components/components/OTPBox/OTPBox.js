import { useState } from 'react';
import { View, TextInput, Text, Button, Pressable } from 'react-native';

const OTPBox = () => {
    // Common Variables
    const OTP_TEXT_FIELD_PLACEHOLDER = 'Enter OTP';
    const COMPONENT_TITLE = 'OTP Box with numeric keypad';
    const SUBMIT_BUTTON_TEXT = 'SUBMIT';

    // State variable
    const [OTP, setOTP] = useState('');

    // Methods
    const submitOTP = () => {
        // OTP Submission logic

        // Do things on success
        OTPSubmissionSuccess();
    };
    const OTPSubmissionSuccess = () => {
        setOTP('');
        alert('OTP Submitted');
    };

    return (
        <View style={{ margin: 2, borderWidth: 2, padding: 5, borderRadius: 5 }}>

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{COMPONENT_TITLE}</Text>

            <TextInput value={OTP} style={{ borderWidth: 2, margin: 10, padding: 5 }}
                placeholder={OTP_TEXT_FIELD_PLACEHOLDER} keyboardType='numeric'
                onChangeText={val => setOTP(val)} />

            <Text>Button Component with no styling</Text>
            <Button disabled={!OTP} onPress={() => submitOTP()} title={SUBMIT_BUTTON_TEXT}></Button>

            <Text style={{ marginTop: 10 }}>Pressable Component with button like styling</Text>
            <Pressable disabled={!OTP} style={{
                backgroundColor: 'green', padding: 10,
                borderRadius: 5
            }} onPress={() => submitOTP()}>
                <Text style={{ color: 'white', textAlign: 'center' }}>{SUBMIT_BUTTON_TEXT}</Text>
            </Pressable>

        </View>
    );
}

export default OTPBox;