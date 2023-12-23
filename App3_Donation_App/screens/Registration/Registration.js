import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { createUser } from '../../api/User';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Registration = (props) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const registerUser = async () => {
        let user = await createUser(fullName, email, password);

        if (user.error) {
            setError(user.error);
        } else {
            setError('');
            setSuccess('You have successfully registered');
            setTimeout(() => props.navigation.goBack(), 3000);
        }
    }

    const isRegistrationButtonDisabled = () => (fullName.length <= 2 || email.length <= 5 || password.length < 8);

    const showErrorMessage = () => {
        return (error.length > 0 && <Text style={style.error}>{error}</Text>);
    }

    const showSuccessMessage = () => {
        return (success.length > 0 && <Text style={style.success}>{success}</Text>);
    }

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <View style={style.backButton}>
                <BackButton onPress={() => props.navigation.goBack()} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={style.container}>
                <View style={globalStyle.marginBottom24}>
                    <Header type={1} title={'Hello and Welcome!'} />
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Input
                        label={'First & Last Name'}
                        placeholder={'Enter your full name...'}
                        onChangeText={value => setFullName(value)}
                    />
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Input
                        keyboardType={'email-address'}
                        label={'Email'}
                        placeholder={'Enter your email...'}
                        onChangeText={value => setEmail(value)}
                    />
                </View>
                <View style={globalStyle.marginBottom24}>
                    <Input
                        secureTextEntry={true}
                        label={'Password'}
                        placeholder={'******'}
                        onChangeText={value => setPassword(value)}
                    />
                </View>

                {showErrorMessage()}
                {showSuccessMessage()}

                <View style={globalStyle.marginBottom24}>
                    <Button
                        isDisabled={isRegistrationButtonDisabled()}
                        title={'Registration'}
                        onPress={() => registerUser()}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );

};

export default Registration;