import { Text, View } from 'react-native';

const CustomText = ({ children }) => {
    const showAlert = () => alert('I am clicked.');

    return (<View style={{ margin: 2, borderWidth: 2, borderRadius: 5, padding: 10 }}>
        <Text onPress={ () => showAlert() } >{children}</Text>
    </View>);
}

export default CustomText;