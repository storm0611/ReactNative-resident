import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import CommonToolbar from "../../../components/commontoolbar";
import string from "../../../utils/string";
import AppImages from "../../../assets/images";
import Routes from "../../../router/routes";

const CheckCodeScreen = ({ navigation }) => {
  const handleBackClick = () => {
    navigation.goBack();
  };
  const handleCheckCode = () => {
    navigation.navigate(Routes.GuestAccess);
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
        <Image style={styles.icon} source={AppImages.ic_qr_code} />
        <Text style={styles.tScanInfo}>{string.scaninfo}</Text>
        <Pressable style={styles.pButton} onPress={handleCheckCode}>
          <Text style={styles.tButton}>{string.checkcode}</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default CheckCodeScreen;
