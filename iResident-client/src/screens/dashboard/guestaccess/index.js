import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import CommonToolbar from "../../../components/commontoolbar";
import string from "../../../utils/string";
import { GuestAccessList } from "../../../utils/const";

const GuestAccessScreen = ({ navigation }) => {
  const handleBackClick = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.vContainer}>
      <CommonToolbar
        isBlue
        containerStyle={styles.toolbarContainer}
        onBackClick={handleBackClick}
        leftIcon={"arrow-back"}
        title={string.guestaccess}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
        contentContainerStyle={styles.svContainer}
      >
        {GuestAccessList.map((item, index) => {
          return (
            <View style={styles.vDetailContainer} key={`index-${index}`}>
              <Text style={styles.tTitle}>{item.title}</Text>
              <Text style={styles.tDetail}>{item.detail}</Text>
            </View>
          );
        })}
        <View style={styles.vSpaceContainer} />
        <View style={styles.vButtonContainer}>
          <Pressable style={styles.pButton}>
            <Text style={styles.tButton}>{string.allowentry}</Text>
          </Pressable>
          <Pressable style={[styles.pButton, styles.blueColor]}>
            <Text style={styles.tButton}>{string.allowentry}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default GuestAccessScreen;
