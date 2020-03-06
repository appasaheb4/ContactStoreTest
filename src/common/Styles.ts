import Colors from "./Colors";
import Fonts from "./Fonts";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default {
    modalContainer: {
        height: '100%',
        backgroundColor: Colors.white,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.borderColor,
        alignSelf: 'center',
        width: '100%',
    },
    modalHeaderTitleView: {
        flex: 0.2,
        borderBottomWidth: 1,
        borderColor: Colors.borderColor,
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10,
        paddingBottom: hp( '3%' ),
        paddingTop: hp( '2%' ),
        marginLeft: 20,
        marginRight: 20,
        marginBottom: hp( '1.5%' ),
    },
    modalHeaderTitleText: {
        color: Colors.blue,
        fontSize: 18,
        fontFamily: Fonts.FiraSansMedium,
    },
    modalHeaderInfoText: {
        color: Colors.textColorGrey,
        fontSize: 11,
        fontFamily: Fonts.FiraSansRegular,
        marginTop: hp( '0.7%' ),
    },
    infoText: {
        color: Colors.textColorGrey,
        fontFamily: Fonts.FiraSansRegular,
        fontSize: 12,
        marginTop: hp( '0.5%' ),
    },
}