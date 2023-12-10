import { useState } from 'react';
import { Switch, Text, View, Button } from 'react-native';

const Joke = () => {
    // Common Variables
    const COMPONENT_TITLE = 'Play "No way out"';
    const initialState = {
        answer: false,
        textToFill: '_'
    };

    // State variables
    const [answer, setAnswer] = useState(initialState.answer);
    const [textToFill, setTextToFill] = useState(initialState.textToFill);

    // Methods
    const onAnswer = ans => {
        setAnswer(ans);

        const newText = ans ? 'NO' : 'YES';
        setTextToFill(newText);
    }
    const resetGame = () => {
        setAnswer(initialState.answer);
        setTextToFill(initialState.textToFill);
    }

    return (
        <View style={{ padding: 10, margin: 2, borderWidth: 2, borderRadius: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{COMPONENT_TITLE}</Text>
            <Text>{textToFill}! I am a monkey!</Text>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Switch value={answer} onValueChange={val => onAnswer(val)} />
                <Text>No</Text>
            </View>
            <Button onPress={() => resetGame()} title={'RESET'}></Button>
        </View>
    );
}

export default Joke;