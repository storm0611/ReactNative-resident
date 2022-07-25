import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";

const styles = StyleSheet.create({
  completetheflow: {
    fontSize: styleconfig.countPixelRatio(22),
    marginHorizontal: styleconfig.smartWidthScale(15),
    color: color.darkgrey,
    marginVertical: styleconfig.smartScale(10),
    minHeight: styleconfig.smartWidthScale(50),
  },
  tilogin: {
    backgroundColor: color.white,
    marginVertical: styleconfig.smartScale(10),
    marginHorizontal: styleconfig.smartWidthScale(15),
  },
  marignbottom: {
    marginBottom: styleconfig.smartScale(25),
  },
  buttoncontainer: {
    marginHorizontal: styleconfig.smartWidthScale(15),
    marginVertical: styleconfig.smartScale(15),
  },
  message: {
    fontSize: styleconfig.countPixelRatio(22),
    marginHorizontal: styleconfig.smartWidthScale(15),
    minHeight: styleconfig.smartWidthScale(50),
    color: color.warning,
    marginVertical: styleconfig.smartScale(10),
  }
});

export default styles;
