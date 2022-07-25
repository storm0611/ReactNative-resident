import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";
const styles = StyleSheet.create({
  ghrContainer: {
    flex: 1,
  },
  vContainer: { flex: 1 },
  flContainer: {
    paddingVertical: styleconfig.smartScale(10),
  },
  
});
export default styles;
