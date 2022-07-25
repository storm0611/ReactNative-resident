import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";

const styles = StyleSheet.create({
  vContainer: {
    marginVertical: styleconfig.smartScale(5),
    marginHorizontal: styleconfig.smartWidthScale(10),
  },
  radioItemContainer: {
    marginHorizontal: styleconfig.smartWidthScale(5),
  },
  vRowContainer: {
    paddingVertical: styleconfig.smartScale(5),
    width: styleconfig.width - styleconfig.smartWidthScale(50) / 2,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  tRadioType: {
    fontStyle: styleconfig.fontBold,
    marginHorizontal: styleconfig.smartWidthScale(10),
    marginVertical: styleconfig.smartScale(10),
    color: color.lightblack,
    fontFamily: styleconfig.fontMedium,
    fontSize: styleconfig.countPixelRatio(22),
  },
  vRadioContainer: {
    borderWidth: styleconfig.countPixelRatio(1),
    borderColor: color.white,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: styleconfig.smartScale(15),
    borderRadius: styleconfig.countPixelRatio(10),
    marginHorizontal: styleconfig.smartWidthScale(5),
    flex: 1,
    backgroundColor: color.white,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  tRadioTitle: {
      textAlign:'center',
    fontSize: styleconfig.countPixelRatio(18),
    fontFamily: styleconfig.fontNormal,
    marginVertical: styleconfig.smartScale(5),
  },
});

export default styles;
