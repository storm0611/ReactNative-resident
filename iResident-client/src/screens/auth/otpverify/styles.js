import { StyleSheet } from "react-native";
import color from "../../../utils/color";
import styleconfig from "../../../utils/styleconfig";

const styles = StyleSheet.create({
  sacontainer: {
    flex: 1,
    backgroundColor: color.white,
  },
  iprofile: {
    marginVertical: styleconfig.smartScale(10),
    width: styleconfig.countPixelRatio(130),
    height: styleconfig.countPixelRatio(130),
    borderRadius: styleconfig.countPixelRatio(65),
    alignSelf: "center",
  },
  svcontainer: {
    paddingVertical: styleconfig.smartScale(30),
  },
  tname: {
    marginVertical: styleconfig.smartScale(2),
    color: color.lightblack,
    fontFamily: styleconfig.fontMedium,
    alignSelf: "center",
    fontSize: styleconfig.countPixelRatio(26),
  },
  temail: {
    marginVertical: styleconfig.smartScale(2),
    color: color.lightblack,
    fontFamily: styleconfig.fontNormal,
    alignSelf: "center",
    fontSize: styleconfig.countPixelRatio(18),
  },
  tinfoheader1: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: styleconfig.countPixelRatio(22),
    marginTop: styleconfig.smartScale(40),
    marginBottom: styleconfig.smartScale(10),
    color: color.primary,
    fontFamily: styleconfig.fontMedium,
  },
  tinfoheader2: {
    fontSize: styleconfig.countPixelRatio(22),
    alignSelf: "center",
    marginVertical: styleconfig.smartScale(10),
    fontFamily: styleconfig.fontNormal,
    color: color.lightblack,
  },

  borderStyleHighLighted: {
    borderColor: color.primary,
  },
  codehighlighter: {
    borderColor: color.primary,
  },

  codeinput: {
    color: color.lightblack,
    borderRadius: styleconfig.countPixelRatio(10),
    width: styleconfig.smartWidthScale(52),
    height: styleconfig.smartScale(70),
    borderWidth: styleconfig.countPixelRatio(2),
    fontSize: styleconfig.countPixelRatio(26),
    fontFamily: styleconfig.fontNormal,
  },
  votpcontainer: {
    marginVertical: styleconfig.smartScale(10),
  },
  oivcontainer: {
    width: "75%",
    height: styleconfig.smartScale(100),
    alignSelf: "center",
  },
  buttoncontainer: {
    marginHorizontal: styleconfig.smartWidthScale(40),
    marginVertical: styleconfig.smartScale(15),
  },
});
export default styles;
