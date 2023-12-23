import { useState } from 'react';
import { SafeAreaView, ScrollView, Pressable, View, Text } from 'react-native';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../navigation/Routes';
import { loginUser } from '../../api/User';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = async () => {

        let user = await loginUser(email, password);
        if (!user.status) {
            setError(user.error);
        } else {
            setError('');
            props.navigation.navigate(Routes.Home);
        }

    }

    const isLoginButtonDisabled = () => (email.length < 5 || password.length < 8);

    const showErrorMessage = () => {
        return (error.length > 0 && <Text style={style.error}>{error}</Text>);
    }

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={style.container}>


                <View style={globalStyle.marginBottom24}>
                    <Header type={1} title={'Welcome Back'} />
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

                <View style={globalStyle.marginBottom24}>
                    <Button
                        onPress={() => login()}
                        title={'Login'}
                        isDisabled={isLoginButtonDisabled()}
                    />
                </View>

                <Pressable
                    style={style.registrationButton}
                    onPress={() => props.navigation.navigate(Routes.Registration)}>
                    <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
                </Pressable>


            </ScrollView>


        </SafeAreaView>
    );

};

export default Login;