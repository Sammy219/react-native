import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "../../../shared/context/ThemeContext";

const NumItem = ({product, onPress}) => {
    const theme = useTheme();
    const styles = styling(theme);
    const renderNumItem = () => {
        if(product.id !== -1){
            return (
                <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
                    <View style={styles.circularMenu}>
                        <Text style={styles.text}>{product.id}</Text>
                    </View>
                </TouchableOpacity>
            )        
        } else {
            return (
                <View style={styles.baseView}></View>
            )
        }
    }
    return (
        <>
            {renderNumItem()}
        </>
    )
}
const styling = (theme) => StyleSheet.create({
    baseView: {
        width: 64,
        height: 64,
        margin: theme.spacing.s,
    },
    circularMenu: {
        width: 64,
        height: 64,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 32,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    text: {
        fontSize: theme.spacing.l,
    }
})
export default NumItem