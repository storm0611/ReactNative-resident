import { View, Pressable, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import color from "../../utils/color";

const FabButton = ({ onAddClick }) => {
  return (
    <Pressable style={styles.pButtonContainer} onPress={onAddClick}>
      <Icon name="add" size={25} color={color.white} />
    </Pressable>
  );
};

export default FabButton;
