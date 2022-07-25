import { View, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import string from "../../../utils/string";
import { TextInput } from "react-native-paper";
import color from "../../../utils/color";
import { Add_Guest } from "../../../utils/enum";
import CommonToolbar from "../../../components/commontoolbar";
import RadioContainer from "../../../components/radiocontainer";
import { guestCompaniesList, incomeTypeList } from "../../../utils/const";
import Button from "../../../components/button";
import Routes from "../../../router/routes";

const AddGuestScreen = ({ navigation }) => {
  const [tiName, setTiName] = useState("");
  const [tiRegistration, setTiRegistration] = useState("");
  const [tiAdmissionDate, setTiAdmissionDate] = useState("");
  const [tiDaysToStay, setTiDaysToStay] = useState("");
  const [selectedIncomeIndex, setSelectedIncomeIndex] = useState(-1);
  const [selectedGuestIndex, setSelectedGuestIndex] = useState(-1);
  const handleBackClick = () => {
    navigation.goBack();
  };
  const handleIncomeRadioClick = (index) => {
    console.log({index})
    setSelectedIncomeIndex(index);
  };
  const handleCompanyRadioClick = (index) => {
    console.log({index})
    setSelectedGuestIndex(index);
  };
  const handleTextChange = (text) => {};
  const handleRegistrationBtn = () => {
    navigation.navigate(Routes.GuestCode);
  };
  return (
    <View style={styles.vContainer}>
      <CommonToolbar
        leftIcon={"arrow-back"}
        title={string.newguest}
        onBackClick={handleBackClick}
      />
      <ScrollView
        contentContainerStyle={styles.svContainer}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <TextInput
          returnKeyType={"next"}
          activeOutlineColor={color.primary}
          style={styles.tiAddGuest}
          mode="outlined"
          keyboardType={"default"}
          label={string.name}
          value={tiName}
          onChangeText={(text) => {
            handleTextChange(text, Add_Guest.Name);
          }}
        />
        <RadioContainer
          onRadioClick={handleIncomeRadioClick}
          selectedIndex={selectedIncomeIndex}
          radioTypeTitle={string.formofincome}
          list={incomeTypeList}
        />

        <TextInput
          returnKeyType={"next"}
          activeOutlineColor={color.primary}
          style={styles.tiAddGuest}
          mode="outlined"
          keyboardType={"default"}
          label={string.registration}
          value={tiRegistration}
          onChangeText={(text) => {
            handleTextChange(text, Add_Guest.Registration);
          }}
        />
        <View style={styles.vRadioContainer}>
          <RadioContainer
            onRadioClick={handleCompanyRadioClick}
            selectedIndex={selectedGuestIndex}
            radioTypeTitle={string.guestcompanies}
            list={guestCompaniesList}
          />
        </View>
        <TextInput
          returnKeyType={"done"}
          activeOutlineColor={color.primary}
          style={styles.tiAddGuest}
          mode="outlined"
          keyboardType={"default"}
          label={string.admissiondate}
          value={tiAdmissionDate}
          onChangeText={(text) => {
            handleTextChange(text, Add_Guest.AdmissionDate);
          }}
        />
        <Pressable>
          <TextInput
            activeOutlineColor={color.primary}
            style={[styles.tiAddGuest, styles.margin]}
            mode="outlined"
            editable={false}
            label={string.daystostay}
            value={tiDaysToStay}
            right={
              <TextInput.Icon
                size={30}
                name="menu-down"
                color={color.lightgrey}
              />
            }
          />
        </Pressable>
      </ScrollView>
      <Button
        buttoncotainer={styles.buttoncontainer}
        textColor={color.white}
        backgroundColor={color.primary}
        borderColor={color.primary}
        title={string.register}
        onPress={handleRegistrationBtn}
      />
    </View>
  );
};

export default AddGuestScreen;
