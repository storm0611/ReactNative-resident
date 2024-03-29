import { StyleSheet, Dimensions, Platform } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";

const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.32;
const slideWidth = wp(80);
const itemHorizontalMargin = wp(1.2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 3;

const entryBorderRadius = 8;

export default StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: color.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius,
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  imageContainerEven: {
    backgroundColor: color.black,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "stretch",
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: "white",
  },
  radiusMaskEven: {
    backgroundColor: color.black,
  },
  textContainer: {
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
  },
  textContainerEven: {
    backgroundColor: color.black,
  },
  title: {
    color: color.black,
    fontSize: styleconfig.countPixelRatio(18),
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: styleconfig.fontMedium,
    letterSpacing: 0.5,
  },
  titleEven: {
    color: "white",
  },
  subtitle: {
    marginTop: 6,
    color: color.black,
    fontSize: 12,
    fontStyle: "italic",
  },
  subtitleEven: {
    color: "rgba(255, 255, 255, 0.7)",
  },
});
