import { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

import style from './style';

const Badge = props => {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 10;
    const paddingVertical = 10;
    const badgeDimensions = {
        width: horizontalScale(paddingHorizontal * 2 + width),
        height: verticalScale(paddingVertical * 2 + height),
    };

    return (
        <View disabled={props.isInactive} style={[style.badge, badgeDimensions]}>


            <Text
                onTextLayout={event => {
                    setWidth(event.nativeEvent.lines[0].width);
                    setHeight(event.nativeEvent.lines[0].height);
                }}
                ref={textRef}
                style={[style.title]}>
                {props.title}
            </Text>

            
        </View>
    );

};

Badge.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Badge;