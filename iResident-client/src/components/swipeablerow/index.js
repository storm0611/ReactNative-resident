import React, { useRef } from "react";
import { Animated, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";
import color from "../../utils/color";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/MaterialIcons";
import styleconfig from "../../utils/styleconfig";
import string from "../../utils/string";

const SwipeableRow = ({ children }) => {
  const swipeable = useRef(null);

  const renderRightAction = (text, color, iconName, iconColor, btnTxt) => {
    return (
      <Animated.View style={styles.vRightBtnContainer}>
        <RectButton style={[styles.rightAction, { backgroundColor: color }]}>
          <Icon name={iconName} color={iconColor} size={30} />
          <Text style={styles.actionText}>{btnTxt}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress, _dragAnimatedValue) => (
    <View style={styles.vRightContainer}>
      {renderRightAction(
        "More",
        color.lightblue,
        "delete-outline",
        color.white,
        string.delete
      )}
      {renderRightAction(
        "Flag",
        color.primary,
        "share",
        color.white,
        string.share
      )}
    </View>
  );

  return (
    <Swipeable
      ref={swipeable}
      friction={2}
      // enableTrackpadTwoFingerGesture
      rightThreshold={40}
      containerStyle={styles.swipeContainer}
      renderRightActions={renderRightActions}
    >
      {children}
    </Swipeable>
  );
};

export default SwipeableRow;
