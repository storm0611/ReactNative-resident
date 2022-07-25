import { StyleSheet } from "react-native";
import color from "../../../utils/color";
import styleconfig from "../../../utils/styleconfig";
const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
  },
  toolbarContainer: {
    backgroundColor: color.lightblue,
  },
  svContainer: {
    flexGrow: 1,
    paddingVertical: styleconfig.smartScale(20),
  },
  icon: {
    marginTop: styleconfig.smartScale(90),
    alignSelf: "center",
    width: styleconfig.countPixelRatio(100),
    height: styleconfig.countPixelRatio(100),
    resizeMode: "contain",
  },
  tScanInfo: {
    alignSelf: "center",
    marginHorizontal: styleconfig.smartWidthScale(20),
    fontSize: styleconfig.countPixelRatio(20),
    marginVertical: styleconfig.smartScale(50),
    fontFamily: styleconfig.fontNormal,
    color: color.lightblack,
  },
  tButton: {
    fontSize: styleconfig.countPixelRatio(20),
    fontFamily: styleconfig.fontMedium,
    color: color.black,
  },
  pButton: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: styleconfig.smartScale(50),
    paddingVertical: styleconfig.smartScale(12),
    marginHorizontal: styleconfig.smartWidthScale(60),
    borderRadius: styleconfig.countPixelRatio(40),
    backgroundColor: color.yellow,
  },
});

export default styles;
