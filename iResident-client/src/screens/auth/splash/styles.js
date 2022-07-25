import {StyleSheet} from 'react-native'
import color from '../../../utils/color';
import styleconfig from '../../../utils/styleconfig';


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:color.primary
    },
    logo:{
        width:styleconfig.countPixelRatio(200),
        height:styleconfig.countPixelRatio(200),
        resizeMode:'contain'
    }
});

export default styles