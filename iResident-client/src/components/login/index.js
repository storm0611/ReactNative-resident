import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AppImages from "../../assets/images";
import styles from "./styles";
import color from "../../utils/color";
import string from "../../utils/string";
import InputConfig from "../../utils/inputconfig";
import { TextInput } from "react-native-paper";
import { Type_Of_SignIn } from "../../utils/enum";
import Button from "../button";
import Routes from "../../router/routes";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/AuthAction";
import { LOGIN_FAIL, SET_ISLOGGEDIN } from "../../redux/types";
import { AsyncStorage } from "react-native";

const LogIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.msg);
  const { user } = useSelector((state) => state.auth);

  const [tiEmail, setTiEmail] = useState("");
  const [tiPassword, setTiPassword] = useState("");
  const [isConditionAgree, setIsConditionAgree] = useState(false);

  const getInputValue = (index) => {
    switch (index) {
      case Type_Of_SignIn.Email:
        return tiEmail;
      case Type_Of_SignIn.Password:
        return tiPassword;
      default:
        return "";
    }
  };
  const handleTextChange = (text, index) => {
    switch (index) {
      case Type_Of_SignIn.Email:
        setTiEmail(text);
        break;
      case Type_Of_SignIn.Password:
        setTiPassword(text);
        break;
    }
  };
  const handleConditionAgrrement = () => {
    remember = !isConditionAgree;
    setIsConditionAgree(remember);
    toggleRememberMe(remember);
  };

  const toggleRememberMe = (value) => {
    console.log("toggleReme", value);
    if (value === true) {
      //user wants to be remembered.
      rememberUser();
    } else {
      forgetUser();
    }
  };
  const rememberUser = async () => {
    try {
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({
          email: tiEmail,
          password: tiPassword,
        })
      );
    } catch (error) {
      console.log(error);
      // Error saving data
    }
  };

  const getRememberedUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      const { email, password } = JSON.parse(user);
      if (tiEmail !== null) {
        // We have username!!
        return { email, password };
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const forgetUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      // Error removing
    }
  };

  const handleGetIntoButton = () => {
    const payload = {
      email: tiEmail,
      password: tiPassword,
    };
    dispatch(login(payload));
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch({ type: SET_ISLOGGEDIN, payload: false });
      console.log(typeof user.verified);
      if (user.verified) {
        navigation.navigate(Routes.Profile);
      } else {
        navigation.navigate(Routes.OtpVerify);
      }
    }
  }, [isLoggedIn]);

  useEffect(async () => {
    const { email, password } = await getRememberedUser();
    setTiEmail(email);
    setTiPassword(password);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}
    >
      <Image source={AppImages.ic_login_logo} style={styles.ilogo} />
      <View style={styles.vtitlecotainer}>
        <Text style={styles.twelcometo}>{string.welcome_to}</Text>
        <Text style={styles.tappname}>{string.app_name}</Text>
      </View>
      {!message ? (
        <Text style={styles.tsigninto}>{string.sign_in_to_continue}</Text>
      ) : (
        <Text style={styles.message}>{message}</Text>
      )}
      <View style={styles.vinputcontainer}>
        {InputConfig.SignInInput.map((item, index) => {
          return (
            <TextInput
              activeOutlineColor={color.primary}
              style={styles.tilogin}
              mode="outlined"
              autoCapitalize={item.AutoCapitalize}
              keyboardType={item.KeyboardType}
              label={item.PlaceHolder}
              value={getInputValue(index)}
              onChangeText={(text) => {
                handleTextChange(text, index);
              }}
            />
          );
        })}
      </View>
      <View style={styles.vsavepasswordcontainer}>
        <Pressable
          style={[
            styles.psavepasswordcontainer,
            isConditionAgree && styles.pselected,
          ]}
          onPress={handleConditionAgrrement}
        >
          <Image source={AppImages.ic_white_check} style={styles.icheck} />
        </Pressable>
        <Text style={styles.trememberpassword}>{string.remember_password}</Text>
      </View>
      <Button
        buttoncotainer={styles.buttoncontainer}
        textColor={color.white}
        backgroundColor={color.primary}
        borderColor={color.primary}
        title={string.get_into}
        onPress={handleGetIntoButton}
      />
      <Text style={styles.iforgotpassword}>{string.i_forgot_password}</Text>
    </ScrollView>
  );
};

export default LogIn;
