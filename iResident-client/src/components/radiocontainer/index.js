import { View, Pressable, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import color from "../../utils/color";

const RadioContainer = ({
  list,
  radioTypeTitle,
  selectedIndex,
  onRadioClick,
}) => {
  return (
    <View style={styles.vContainer}>
      <Text style={styles.tRadioType}>{radioTypeTitle}</Text>
      <View style={styles.vRowContainer}>
        {list.map((item, index) => {
          return (
            <Pressable
              style={[
                styles.vRadioContainer,
                {
                  borderColor:
                    index === selectedIndex ? color.primary : color.white,
                },
              ]}
              onPress={() => {
                onRadioClick(index);
              }}
            >
              <Icon
                name={item.icon}
                size={40}
                color={index === selectedIndex ? color.primary : color.white52}
              />
              <Text
                style={[
                  styles.tRadioTitle,
                  {
                    color:
                      index === selectedIndex ? color.primary : color.white52,
                  },
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default RadioContainer;
