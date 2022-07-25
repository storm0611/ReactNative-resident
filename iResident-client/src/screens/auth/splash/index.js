import React, { useEffect } from "react";
import { Image, View } from "react-native";
import AppImages from "../../../assets/images";
import Routes from "../../../router/routes";
import styles from "./styles";

const SplashScreen = ({ navigation }) => {
  useEffect(()=>{
    redirecScreen()
  },[])
  const redirecScreen = () =>{
    setTimeout(()=>{
      navigation.replace(Routes.Intro)
    },3000)
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={AppImages.ic_splash_logo}/>
    </View>
  );
};

export default SplashScreen;
