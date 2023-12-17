import { SafeAreaView, View, Text } from "react-native";

import globalStyle from "../../assets/styles/globalStyle";

const Home = () => {

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <View>
                <Text>
                    Welcome to the Home Screen!
                </Text>
            </View>
        </SafeAreaView>
    );

};

export default Home;