import { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

const LiveText = () => {
    const DEFAULT_TEXT = 'See here as you type below';
    const COMPONENT_TITLE = 'Live Text';

    const [liveText, setLiveText] = useState('');

    return (
        <View style={{ padding: 10, margin: 2, borderWidth: 2, borderRadius: 5 }}>

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{COMPONENT_TITLE}</Text>

            <Text style={{ color: 'indigo' }}>{liveText || DEFAULT_TEXT}</Text>

            <TextInput value={liveText} style={{ borderWidth: 2, margin: 10, padding: 5 }}
                onChangeText={val => setLiveText(val)} placeholder='Enter some text'>
            </TextInput>

        </View>
    );
}

export default LiveText;