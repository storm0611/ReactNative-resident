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
  tTitle: {
    fontSize: styleconfig.countPixelRatio(20),
    fontFamily: styleconfig.fontBold,
    color: color.yellow,
  },
  tDetail: {
    fontSize: styleconfig.countPixelRatio(18),
    fontFamily: styleconfig.fontNormal,
    color: color.lightblack,
  },
  vDetailContainer: {
    marginVertical: styleconfig.smartScale(10),
    marginHorizontal: styleconfig.smartWidthScale(20),
  },
  vSpaceContainer: {
    flex: 1,
  },
  vButtonContainer: {
    marginVertical: styleconfig.smartScale(10),
  },
  tButton: {
    fontSize: styleconfig.countPixelRatio(20),
    fontFamily: styleconfig.fontMedium,
    color: color.black,
  },
  pButton: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: styleconfig.smartScale(10),
    paddingVertical: styleconfig.smartScale(12),
    marginHorizontal: styleconfig.smartWidthScale(60),
    borderRadius: styleconfig.countPixelRatio(40),
    backgroundColor: color.yellow,
  },
  blueColor: {
    backgroundColor: color.whiteblue,
  },
});

export default styles;
