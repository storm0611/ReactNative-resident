import { StyleSheet } from "react-native";
import styleconfig from "../../../utils/styleconfig";

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
  },
  svContainer: {
    paddingVertical: styleconfig.smartScale(10),
  },
  tiAddGuest: {
    marginVertical: styleconfig.smartScale(15),
    marginHorizontal: styleconfig.smartWidthScale(20),
  },
  vRadioContainer: {
    marginTop: styleconfig.smartScale(10),
  },
  margin: {
    marginVertical: styleconfig.smartScale(5),
  },
});

export default styles;
