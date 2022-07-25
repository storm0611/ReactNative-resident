import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import string from "../../utils/string";
import styles from "./styles";
import { TextInput } from "react-native-paper";
import InputConfig from "../../utils/inputconfig";
import color from "../../utils/color";
import { Type_Of_SignUp } from "../../utils/enum";
import Button from "../button";
import Routes from "../../router/routes";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/AuthAction";
import { CONFIRM_PASSWORD_WRONG, REGISTER_SUCCESS_MESSAGE } from "../../utils/message";
import { SET_MESSAGE } from "../../redux/types";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.msg);

  const [tiEmail, setTiEmail] = useState("");
  const [tiPassword, setTiPassword] = useState("");
  const [tiRepeatPassword, setTiRepeatPassword] = useState("");
  const [tiName, setTiName] = useState("");
  const [tiFirstname, setTiFirstname] = useState("");
  const [tiLastname, setTiLastname] = useState("");

  const getInputValue = (index) => {
    switch (index) {
      case Type_Of_SignUp.Name:
        return tiName;
      case Type_Of_SignUp.FirstName:
        return tiFirstname;
      case Type_Of_SignUp.LastName:
        return tiLastname;
      case Type_Of_SignUp.Email:
        return tiEmail;
      case Type_Of_SignUp.Password:
        return tiPassword;
      case Type_Of_SignUp.RepeatPassword:
        return tiRepeatPassword;
    }
  };
  const handleTextChange = (text, index) => {
    switch (index) {
      case Type_Of_SignUp.Name:
        setTiName(text);
        break;
      case Type_Of_SignUp.FirstName:
        setTiFirstname(text);
        break;
      case Type_Of_SignUp.LastName:
        setTiLastname(text);
        break;
      case Type_Of_SignUp.Email:
        setTiEmail(text);
        break;
      case Type_Of_SignUp.Password:
        setTiPassword(text);
        break;
      case Type_Of_SignUp.RepeatPassword:
        setTiRepeatPassword(text);
        break;
    }
  };

  const handleRegisterButton = async () => {
    try {
      if (tiPassword !== tiRepeatPassword) {
        dispatch({ type: SET_MESSAGE, payload: CONFIRM_PASSWORD_WRONG });
      } else {
        const payload = {
          email: tiEmail,
          password: tiPassword,
          name: tiName,
          first_name: tiFirstname,
          last_name: tiLastname,
        };
        dispatch(register(payload));
        if (message == REGISTER_SUCCESS_MESSAGE) {
          setTiName("");
          setTiFirstname("");
          setTiLastname("");
          setTiEmail("");
          setTiPassword("");
          setTiRepeatPassword("");
        }
      }
      // navigation.navigate(Routes.OtpVerify);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    if (message == REGISTER_SUCCESS_MESSAGE) {
      setTiName("");
      setTiFirstname("");
      setTiLastname("");
      setTiEmail("");
      setTiPassword("");
      setTiRepeatPassword("");
    }
  }, [message]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}
    >
      {!message ? (
        <Text style={styles.completetheflow}>
          {string.complete_following_register}
        </Text>
      ) : (
        <Text style={styles.message}>{message}</Text>
      )}
      <View style={styles.vinputcontainer}>
        {InputConfig.SignUpInput.map((item, index) => {
          return (
            <TextInput
              returnKeyType={item.ReturnKeyType}
              activeOutlineColor={color.primary}
              style={[styles.tilogin, index === 2 && styles.marignbottom]}
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
      <Button
        buttoncotainer={styles.buttoncontainer}
        textColor={color.white}
        backgroundColor={color.primary}
        borderColor={color.primary}
        title={string.register}
        onPress={handleRegisterButton}
      />
    </ScrollView>
  );
};

export default SignUp;
