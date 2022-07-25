import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import CommonToolbar from "../../../components/commontoolbar";
import string from "../../../utils/string";
import AppImages from "../../../assets/images";
import Routes from "../../../router/routes";
import Icon from "react-native-vector-icons/MaterialIcons";
import color from "../../../utils/color";
import { constant } from "../../../utils/const";

const GuestCodeScreen = ({ navigation }) => {
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
        title={""}
        rightIcon1="share"
        rightIcon2="delete-outline"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
        contentContainerStyle={styles.svContainer}
      >
        <View style={styles.vQRContainer}>
          <Icon name="qr-code-2" size={190} color={color.black} />
        </View>
        <Text style={styles.tAddress}>{constant.address}</Text>
        <Icon
          name="directions-car"
          size={100}
          style={styles.iconCar}
          color={color.yellow}
        />
        <Text style={styles.tUptoCompany}>{constant.upto4companies}</Text>
        <View style={styles.vSpaceContainer} />
        <View style={styles.vDateContainer}>
          <Text style={styles.tStayDate}>{string.dateofstay}</Text>
          <Text style={styles.tDate}>{constant.date}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default GuestCodeScreen;
