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
  vDahboardcontainer: {
    paddingVertical: styleconfig.smartScale(20),
    width: styleconfig.width - styleconfig.smartWidthScale(30),
    alignSelf: "center",
    height: styleconfig.smartScale(300),
  },
  vRowcontainer: {
    marginHorizontal: styleconfig.smartWidthScale(5),
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    marginVertical: styleconfig.smartScale(5),
  },
  vTabcontainer: {
    marginHorizontal: styleconfig.smartWidthScale(5),
    alignItems: "center",
    width: (styleconfig.width - styleconfig.smartWidthScale(50)) / 2,
    borderRadius: styleconfig.countPixelRatio(10),
  },
  icon: {
    width: styleconfig.countPixelRatio(60),
    height: styleconfig.countPixelRatio(60),
    resizeMode: "contain",
  },
  title: {
    fontSize: styleconfig.countPixelRatio(18),
    marginVertical: styleconfig.smartScale(10),
    fontFamily: styleconfig.fontMedium,
  },
  tTitle: {
    alignSelf: "center",
    marginVertical: styleconfig.smartScale(10),
    fontSize: styleconfig.countPixelRatio(18),
    fontFamily: styleconfig.fontBold,
    color: color.lightblue,
  },
});

export default styles;
