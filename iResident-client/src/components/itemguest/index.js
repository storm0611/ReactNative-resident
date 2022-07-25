import React from "react";
import { View, Text } from "react-native";
import SwipeableRow from "../swipeablerow";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";
import { Guest_Status, Transition_Mode } from "../../utils/enum";
import Icon from "react-native-vector-icons/MaterialIcons";
import color from "../../utils/color";
import string from "../../utils/string";

const ItemGuest = ({ item, index }) => {
  const TransistIcon = () => {
    switch (item.transitionType) {
      case Transition_Mode.Car:
        return (
          <Icon name="directions-walk" size={25} style={styles.iTransition} />
        );
      case Transition_Mode.Walk:
        return (
          <Icon name={"directions-car"} size={25} style={styles.iTransition} />
        );
    }
  };
  const GuestStatus = () => {
    switch (item.status) {
      case Guest_Status.Come:
        return (
          <Text style={[styles.tStatus, styles.tCome]}>{string.to_come}</Text>
        );
      case Guest_Status.NotAuthorized:
        return (
          <Text style={[styles.tStatus, styles.tNotAuthorized]}>
            {string.not_authorized}
          </Text>
        );
      case Guest_Status.Defeated:
        return (
          <Text style={[styles.tStatus, styles.tDefeated]}>
            {string.defeated}
          </Text>
        );
      case Guest_Status.InPlace:
        return (
          <Text style={[styles.tStatus, styles.tInPlace]}>
            {string.in_place}
          </Text>
        );
    }
  };
  return (
    <SwipeableRow>
      <RectButton style={styles.rectButton}>
        <TransistIcon />
        <View style={styles.vInfoContainer}>
          <GuestStatus />
          <Text style={styles.tTitle}>{item.title}</Text>
          <View style={styles.vDateContainer}>
            <Icon name="date-range" size={25} color={color.lightgrey} />
            <Text style={styles.tDate}>{item.date}</Text>
          </View>
        </View>
      </RectButton>
    </SwipeableRow>
  );
};

export default ItemGuest;
