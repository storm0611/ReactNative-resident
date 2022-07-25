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
  vQRContainer: {
    width: styleconfig.countPixelRatio(220),
    height: styleconfig.countPixelRatio(220),
    backgroundColor: color.white,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: styleconfig.smartScale(10),
  },
  tAddress: {
    fontSize: styleconfig.countPixelRatio(20),
    color: color.lightblack,
    fontFamily: styleconfig.fontNormal,
    alignSelf: "center",
    textAlign: "center",
    marginTop: styleconfig.smartScale(20),
  },
  iconCar: {
    marginTop: styleconfig.smartScale(25),
    alignSelf: "center",
  },
  vDateContainer: {
    marginVertical: styleconfig.smartScale(15),
  },
  tUptoCompany: {
    fontSize: styleconfig.countPixelRatio(22),
    color: color.lightblue,
    fontFamily: styleconfig.fontMedium,
    alignSelf: "center",
  },
  tStayDate: {
    fontSize: styleconfig.countPixelRatio(20),
    color: color.lightblue,
    fontFamily: styleconfig.fontBold,
    alignSelf: "center",
  },
  vSpaceContainer: {
    flex: 1,
  },
  tDate: {
    fontSize: styleconfig.countPixelRatio(20),
    color: color.lightblue,
    fontFamily: styleconfig.fontBold,
    alignSelf: "center",
  },
});

export default styles;
