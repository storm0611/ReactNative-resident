import { ScrollView, View, Image, Text } from "react-native";
import React, { useState } from "react";
import SafeAreaView from "react-native-safe-area-view";
import styles from "./styles";
import { constant } from "../../../utils/const";
import string from "../../../utils/string";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Button from "../../../components/button";
import color from "../../../utils/color";
import Routes from "../../../router/routes";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_MESSAGE, SET_MESSAGE } from "../../../redux/types";
import { VERIFICATION_CODE_WRONG } from "../../../utils/message";

const OtpVerifyScreen = ({ navigation }) => {
  const { name, email } = useSelector((state) => state.auth.user);
  const [code, setCode] = useState("");

  const handleCodeChange = (text) => {
    setCode(text);
  };

  const { verification_code } = useSelector((state) => state.auth.user);
  const { message } = useSelector((state) => state.msg);
  const dispatch = useDispatch();
  const handleJoinMeButton = () => {
    if (verification_code === code) {
      dispatch({type: CLEAR_MESSAGE})
      setCode("");
      navigation.navigate(Routes.Profile);
    } else {
      dispatch({ type: SET_MESSAGE, payload: VERIFICATION_CODE_WRONG });
    }
    //navigation.navigate(Routes.Dashboard);
  };
  return (
    <SafeAreaView style={styles.sacontainer}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.svcontainer}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: constant.profileimage }}
          style={styles.iprofile}
        />
        <Text style={styles.tname}>{name}</Text>
        <Text style={styles.temail}>{email}</Text>
        <Text style={styles.tinfoheader1}>
          {string.you_are_not_part_of_iresident}
        </Text>
        {message ? (
          <Text style={styles.tinfoheader2}>{message}</Text>
        ) : (
          <Text style={styles.tinfoheader2}>{string.enter_the_code}</Text>
        )}
        <View style={styles.votpcontainer}>
          <OTPInputView
            style={styles.oivcontainer}
            pinCount={5}
            code={code}
            onCodeChanged={handleCodeChange}
            autoFocusOnLoad
            codeInputFieldStyle={styles.codeinput}
            codeInputHighlightStyle={styles.codehighlighter}
          />
        </View>
        <Button
          buttoncotainer={styles.buttoncontainer}
          textColor={color.white}
          backgroundColor={color.primary}
          borderColor={color.primary}
          title={string.join_me}
          onPress={handleJoinMeButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpVerifyScreen;
