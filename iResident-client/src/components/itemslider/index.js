import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ParallaxImage } from "react-native-snap-carousel";
import AppImages from "../../assets/images";
import styles from "./styles";

const ItemSlider = ({ data, parallaxProps, even }) => {
  const ParallelImage = () => {
    return (
      <ParallaxImage
        source={data.image}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        {...parallaxProps}
      />
    );
  };

  const UppercaseTitle = () => {
    return data.title ? (
      <Text style={styles.title} numberOfLines={2}>
        {data.title}
      </Text>
    ) : null;
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.slideInnerContainer}
      onPress={() => {
        alert(`You've clicked '${data.title}'`);
      }}
    >
      <View style={styles.shadow} />
      <View style={styles.imageContainer}>
        <ParallelImage data={data} even={even} />
      </View>
      <View style={styles.textContainer}>
        <UppercaseTitle />
      </View>
    </TouchableOpacity>
  );
};

export default ItemSlider;
