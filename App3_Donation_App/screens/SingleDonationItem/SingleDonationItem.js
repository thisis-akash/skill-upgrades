import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, Image, View, Text, Alert } from 'react-native';

import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';

import style from './style';

const SingleDonationItem = (props) => {

    const donationItemInformation = useSelector(
        state => state.donations.selectedDonationInformation,
    );

    const categoryInformation = props.route.params.categoryInformation;

        const onDonate = () => {
        Alert.alert('', 'Donation Successful!', [
            { text: 'OK', onPress: () => props.navigation.navigate(Routes.Home) },
        ]);
    }
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>


            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                <BackButton onPress={() => props.navigation.goBack()} />

                <Image
                    source={{ uri: donationItemInformation.image }}
                    style={style.image}
                />

                <View style={style.badge}>
                    <Badge title={categoryInformation.name} />
                </View>

                <Header type={1} title={donationItemInformation.name} />

                <Text style={style.description}>
                    {donationItemInformation.description}
                </Text>
            </ScrollView>


            <View style={style.button}>
                <Button
                    title={'Donate'}
                    onPress={() => props.navigation.navigate(Routes.Payment)}
                />
            </View>


        </SafeAreaView>
    );

};

export default SingleDonationItem;