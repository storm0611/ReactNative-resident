import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: "column"
    },

    title: {
        flex: 1,
        backgroundColor: color.white,
        marginVertical: styleconfig.smartScale(10),
        marginHorizontal: styleconfig.smartWidthScale(15),
    },

    content: {
        flex: 9,
        textAlignVertical: 'top',
        backgroundColor: color.white,
        marginVertical: styleconfig.smartScale(10),
        marginHorizontal: styleconfig.smartWidthScale(15),
    },

    btn: {
        flex: 2,
        margin: 10,
        borderRadius: 10,
    },
});

export default styles;
