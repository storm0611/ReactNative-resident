import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";

const styles = StyleSheet.create({
  ilogo: {
    width: styleconfig.countPixelRatio(120),
    height: styleconfig.countPixelRatio(120),
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: styleconfig.smartScale(30),
  },
  vtitlecotainer: {
    marginVertical: 10,
  },
  twelcometo: {
    color: color.darkgrey,
    marginHorizontal: styleconfig.smartWidthScale(15),
    fontSize: styleconfig.countPixelRatio(28),
    fontFamily: styleconfig.fontMedium,
  },
  tappname: {
    fontFamily: styleconfig.fontMedium,
    marginHorizontal: styleconfig.smartWidthScale(15),
    fontSize: styleconfig.countPixelRatio(28),
    color: color.primary,
  },
  tilogin: {
    backgroundColor: color.white,
    marginVertical: styleconfig.smartScale(10),
    marginHorizontal: styleconfig.smartWidthScale(15),
  },
  tsigninto: {
    fontSize: styleconfig.countPixelRatio(20),
    marginHorizontal: styleconfig.smartWidthScale(15),
    color: color.darkgrey,
  },
  message: {
    fontSize: styleconfig.countPixelRatio(20),
    marginHorizontal: styleconfig.smartWidthScale(15),
    color: color.warning,
  },
  vinputcontainer: {
    marginVertical: styleconfig.smartScale(10),
  },
  psavepasswordcontainer: {
    width: styleconfig.countPixelRatio(28),
    height: styleconfig.countPixelRatio(28),
    borderWidth: styleconfig.countPixelRatio(2),
    borderColor: color.primary,
    borderRadius: styleconfig.countPixelRatio(5),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: styleconfig.smartWidthScale(5),
  },
  pselected: { backgroundColor: color.primary },
  icheck: {
    width: styleconfig.countPixelRatio(15),
    height: styleconfig.countPixelRatio(15),
  },
  vsavepasswordcontainer: {
    marginVertical: styleconfig.smartScale(10),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: styleconfig.smartWidthScale(10),
  },
  trememberpassword: {
    color: color.darkgrey,
    fontStyle: styleconfig.fontNormal,
    fontSize: styleconfig.countPixelRatio(20),
    marginHorizontal: styleconfig.smartWidthScale(5),
  },
  buttoncontainer: {
    marginHorizontal: styleconfig.smartWidthScale(15),
    marginVertical: styleconfig.smartScale(15),
  },
  iforgotpassword: {
    marginVertical: styleconfig.smartScale(5),
    alignSelf: "center",
    fontSize: styleconfig.countPixelRatio(18),
    textDecorationLine: "underline",
    fontFamily: styleconfig.fontMedium,
    color: color.primary,
  },
});

export default styles;
