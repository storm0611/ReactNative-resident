import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";

const styles = StyleSheet.create({
  rectButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: styleconfig.smartScale(10),
    paddingHorizontal: styleconfig.smartWidthScale(20),
    backgroundColor: color.white,
  },
  iTransition: {
    marginHorizontal: styleconfig.smartWidthScale(10),
  },
  tStatus: {
    color: color.white,
    alignSelf: "flex-start",
    fontFamily: styleconfig.fontBold,
    paddingVertical: styleconfig.smartScale(3),
    borderRadius: styleconfig.countPixelRatio(5),
    marginHorizontal: styleconfig.smartWidthScale(5),
    paddingHorizontal: styleconfig.smartWidthScale(8),
  },
  tCome: {
    backgroundColor: color.lightgreen,
  },
  tNotAuthorized: {
    backgroundColor: color.darkpink,
  },
  tDefeated: {
    backgroundColor: color.darkgrey,
  },
  tInPlace: {
    backgroundColor: color.skyblue,
  },
  vInfoContainer: {
    paddingHorizontal: styleconfig.smartWidthScale(5),
  },
  tTitle: {
    fontSize: styleconfig.countPixelRatio(19),
    fontFamily: styleconfig.fontBold,
    marginTop: styleconfig.smartWidthScale(10),
    marginHorizontal: styleconfig.smartWidthScale(5),
  },
  vDateContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: styleconfig.smartWidthScale(2),
    marginHorizontal: styleconfig.smartWidthScale(5),
  },
  tDate: {
    marginStart: styleconfig.smartWidthScale(5),
    color: color.lightgrey,
    fontSize: styleconfig.countPixelRatio(17),
  },
});

export default styles;
