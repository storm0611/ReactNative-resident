import { View, Pressable, Image, Text } from "react-native";
import React from "react";

import { constant, dashboardList } from "../../utils/const";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import color from "../../utils/color";
import string from "../../utils/string";
import CommonToolbar from "../../components/commontoolbar";
import Routes from "../../router/routes";

const DashboardScreen = ({ navigation }) => {
  const handleBackClick = () => {};
  const handleProfileClick = () => {
    navigation.navigate(Routes.Profile);
  };
  return (
    <View style={styles.vcontainer}>
      <CommonToolbar
        leftIcon={"menu"}
        title={string.myguest}
        onBackClick={handleBackClick}
      />
      <View style={styles.vprofilecontainer}>
        <Pressable
          style={styles.pProfileheadercontainer}
          onPress={handleProfileClick}
        >
          <View style={styles.vaddresscontainer}>
            <Text style={styles.addressheader1}>{string.addressheader1}</Text>
            <Text style={styles.addressheader2}>{string.addressheader2}</Text>
          </View>
          <Image
            source={{ uri: constant.profileimage }}
            style={styles.iprofile}
          />
        </Pressable>
        <View style={styles.vlocationcontainer}>
          <Icon name="location-on" size={30} color={color.lightblack} />
          <Text style={styles.tlocation} numberOfLines={2}>
            {constant.location}
          </Text>
          <Icon
            name="star"
            size={30}
            color={color.primary}
            style={styles.staricon}
          />
        </View>
      </View>
      <View style={styles.vdahboardcontainer}>
        {dashboardList.map((rowItem, index) => {
          return (
            <View style={styles.vrowcontainer}>
              {rowItem.map((item, index) => {
                return (
                  <Pressable
                    style={styles.vtabcontainer}
                    onPress={() =>
                      item.navigator
                        ? navigation.navigate(item.navigator)
                        : alert("In Development")
                    }
                  >
                    <Image style={styles.icon} source={item.icon} />
                    <Text style={styles.title}>{item.title}</Text>
                  </Pressable>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DashboardScreen;
