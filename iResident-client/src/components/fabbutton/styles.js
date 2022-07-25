import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";
const styles = StyleSheet.create({
  pButtonContainer: {
    height: styleconfig.countPixelRatio(70),
    width: styleconfig.countPixelRatio(70),
    borderRadius: styleconfig.countPixelRatio(35),
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    right: 0,
    marginVertical: styleconfig.smartScale(10),
    marginHorizontal: styleconfig.smartScale(10),

    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export default styles;
