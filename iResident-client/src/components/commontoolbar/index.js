import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import color from "../../utils/color";
import SafeAreaView from "react-native-safe-area-view";

const CommonToolbar = ({
  title,
  onBackClick,
  leftIcon,
  isBlue,
  containerStyle,
  rightIcon1,
  rightIcon2,
}) => {
  return (
    <SafeAreaView
      style={[styles.saContainer, isBlue && styles.blueColor]}
      forceInset={{
        top: "always",
        bottom: "never",
      }}
    >
      <View style={[styles.vContainer, containerStyle]}>
        <Icon
          onPress={onBackClick}
          name={leftIcon}
          size={30}
          color={isBlue ? color.white : color.lightorange}
          style={styles.iLeftIcon}
        />
        <Text style={[styles.tTitle, isBlue && styles.colorWhite]}>
          {title}
        </Text>
        {rightIcon1 ? (
          <Icon
            onPress={onBackClick}
            name={rightIcon1}
            size={30}
            color={isBlue ? color.white : color.lightorange}
            style={styles.iRightIcon}
          />
        ) : null}
        {rightIcon2 ? (
          <Icon
            name={rightIcon2}
            onPress={onBackClick}
            size={30}
            color={isBlue ? color.white : color.lightorange}
            style={styles.iRightIcon}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default CommonToolbar;
