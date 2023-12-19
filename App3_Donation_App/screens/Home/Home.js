import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";

const Home = () => {

    const user = useSelector(state => state.user);
    const title = `${user.firstName} ${user.lastName}`;

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title={title}></Header>
        </SafeAreaView>
    );

};

export default Home;