import { View, ScrollView, Pressable, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { CommonActions } from '@react-navigation/native';
import string from "../../../utils/string";
import { constant, ProfileSliderList } from "../../../utils/const";
import ItemSlider from "../../../components/itemslider";
import Carousel from "react-native-snap-carousel";
import { itemWidth, sliderWidth } from "../../../components/itemslider/styles";
import Routes from "../../../router/routes";
import { useSelector } from "react-redux";

const SLIDER_1_FIRST_ITEM = 1;
const ProfileScreen = ({ navigation }) => {
  const { name } = useSelector(state => state.auth.user)

  const handleGetInto = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: Routes.Dashboard }],
      }),
    );
  };

  const _renderItemWithParallax = ({ item, index }, parallaxProps) => {
    return (
      <ItemSlider
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  };
  return (
    <View style={styles.vContainer}>
      {/*<CommonToolbar
        leftIcon={"arrow-back"}
        title={string.myprofile}
        onBackClick={handleBackClick}
      />*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
        contentContainerStyle={styles.svContainer}
      >
        <Image style={styles.profile} source={{ uri: constant.profileimage }} />
        <Text style={styles.tName}>{name}</Text>
        <View style={styles.vSliderContainer}>
          <Carousel
            data={ProfileSliderList}
            renderItem={_renderItemWithParallax}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={true}
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
          />
        </View>
        <Pressable style={styles.pGetInto} onPress={handleGetInto}>
          <Text style={styles.tGetInto}>{string.get_into}</Text>
        </Pressable>
        <Text style={styles.tChangeUser}>{string.changeuser}</Text>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
