import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Profile = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex, style.header]}>
            <TouchableOpacity style={style.backBtn} onPress={() => navigation.goBack()}>
                <Text style={{ color: 'blue' }}>Go Back</Text>
            </TouchableOpacity>
            <Text>Welcome to my profile page!</Text>
        </SafeAreaView>
    );

}

export default Profile;