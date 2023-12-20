import { useRef, useState } from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

import { horizontalScale } from '../../assets/styles/scaling';

import style from './style';

const Tab = props => {

    // Set tab width dynamically according to the width of the tab text
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 33;
    const tabWidth = {
        width: horizontalScale(paddingHorizontal * 2 + width),
    };

    return (
        <Pressable
            style={[style.tab, props.isInactive && style.inactiveTab, tabWidth]}
            onPress={() => props.onPress(props.tabId)}>
            <Text
                onTextLayout={event => {
                    setWidth(event.nativeEvent.lines[0].width);
                }}
                ref={textRef}
                style={[style.title, props.isInactive && style.inactiveTitle]}>
                {props.title}
            </Text>
        </Pressable>
    );

};

Tab.defaultProps = {
    isInactive: false,
    onPress: () => { },
};

Tab.propTypes = {
    tabId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func,
};

export default Tab;