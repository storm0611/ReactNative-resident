import {StyleSheet} from 'react-native'
import color from '../../../utils/color';
import styleconfig from '../../../utils/styleconfig'

const styles = StyleSheet.create({
    bgIntro:{
        width:styleconfig.width,
        height:styleconfig.smartScale(350),
        resizeMode:'stretch',
    },
    vContainer:{
        flex:1,
        backgroundColor:color.primary
    },
    iGreyLogo:{
        alignSelf:'center',
        width:styleconfig.countPixelRatio(120),
        height:styleconfig.countPixelRatio(120),
        resizeMode:'contain',
        marginTop:styleconfig.smartScale(-30)
    },
    buttonContainer:{
        marginVertical:styleconfig.smartScale(40)
    }
});

export default styles