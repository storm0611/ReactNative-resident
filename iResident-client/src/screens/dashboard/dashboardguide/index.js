import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import CommonToolbar from "../../../components/commontoolbar";
import string from "../../../utils/string";
import { dashboardGuideList, GuestAccessList } from "../../../utils/const";

const DashboardGuideScreen = ({ navigation }) => {
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
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
        contentContainerStyle={styles.svContainer}
      >
        <Text style={styles.tTitle}>{string.dashboardguide}</Text>
        <View style={styles.vDahboardcontainer}>
          {dashboardGuideList.map((rowItem, index) => {
            return (
              <View style={styles.vRowcontainer}>
                {rowItem.map((item, index) => {
                  return (
                    <Pressable style={styles.vTabcontainer}>
                      <Image style={styles.icon} source={item.icon} />
                      <Text style={styles.title}>{item.title}</Text>
                    </Pressable>
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardGuideScreen;
