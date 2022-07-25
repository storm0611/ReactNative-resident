import React from "react";
import { Text, Image, View, ImageBackground } from "react-native";
import AppImages from "../../../assets/images";
import Button from "../../../components/button";
import styles from "./styles";
import color from "../../../utils/color";
import string from "../../../utils/string";
import Routes from "../../../router/routes";

const IntroScreen = ({ navigation }) => {
  const handleLoginClick = () => {
    navigation.navigate(Routes.LoginRegister, { destination: string.login });
  };
  const handleSignupClick = () => {
    navigation.navigate(Routes.LoginRegister, { destination: string.signup });
  };

  return (
    <View style={styles.vContainer}>
      <Image source={AppImages.bg_intro} style={styles.bgIntro} />
      <Image source={AppImages.ic_grey_logo} style={styles.iGreyLogo} />
      <View style={styles.buttonContainer}>
        <Button
          textColor={color.primary}
          backgroundColor={color.white}
          borderColor={color.white}
          title={string.login}
          onPress={handleLoginClick}
        />
        <Button
          textColor={color.white}
          backgroundColor={color.primary}
          borderColor={color.white}
          title={string.signup}
          onPress={handleSignupClick}
        />
      </View>
    </View>
  );
};
export default IntroScreen;
