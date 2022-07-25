import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";

const styles = StyleSheet.create({
  icon: {
    width: styleconfig.countPixelRatio(60),
    height: styleconfig.countPixelRatio(60),
    resizeMode: "contain",
  },
  title: {
    fontSize: styleconfig.countPixelRatio(20),
    marginVertical: styleconfig.smartScale(8),
    fontFamily: styleconfig.fontMedium,
  },
  vprofilecontainer: {
    backgroundColor: color.white,
    paddingVertical: styleconfig.smartScale(5),
  },
  pProfileheadercontainer: {
    marginHorizontal: styleconfig.smartWidthScale(10),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: styleconfig.smartWidthScale(10),
  },
  vaddresscontainer: {
    flex: 1,
  },
  staricon: {
    marginHorizontal: styleconfig.smartWidthScale(5),
  },
  vlocationcontainer: {
    marginHorizontal: styleconfig.smartWidthScale(15),
    marginVertical: styleconfig.smartScale(15),
    flexDirection: "row",
    alignItems: "center",
  },
  addressheader1: {
    fontSize: styleconfig.countPixelRatio(32),
    color: color.primary,
    marginTop: styleconfig.smartScale(10),
    fontFamily: styleconfig.fontBold,
  },
  addressheader2: {
    marginTop: styleconfig.smartScale(5),
    color: color.lightblack,
    fontSize: styleconfig.countPixelRatio(18),
    fontFamily: styleconfig.fontNormal,
  },

  tlocation: {
    flex: 1,
    color: color.lightblack,
    fontFamily: styleconfig.fontNormal,
    fontSize: styleconfig.countPixelRatio(17),
    marginHorizontal: styleconfig.smartWidthScale(10),
  },

  vcontainer: {
    flex: 1,
    backgroundColor: color.lightwhite,
  },
  vdahboardcontainer: {
    paddingVertical: styleconfig.smartScale(20),
    width: styleconfig.width - styleconfig.smartWidthScale(30),
    alignSelf: "center",
    height: styleconfig.smartScale(500),
  },
  vrowcontainer: {
    marginHorizontal: styleconfig.smartWidthScale(5),
    flexDirection: "row",
    flex: 1,
    marginVertical: styleconfig.smartScale(5),
  },
  vtabcontainer: {
    marginHorizontal: styleconfig.smartWidthScale(5),
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: color.white,
    borderRadius: styleconfig.countPixelRatio(10),
  },
  iprofile: {
    width: styleconfig.countPixelRatio(50),
    height: styleconfig.countPixelRatio(50),
    borderRadius: styleconfig.countPixelRatio(25),
  },
});

export default styles;
