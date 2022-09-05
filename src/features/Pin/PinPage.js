import { useEffect, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import FormButton from "../../shared/components/FormButton";
import { useTheme } from "../../shared/context/ThemeContext"
import { Entypo } from '@expo/vector-icons';
import MainContainer from "../../shared/components/MainContainer";
import { theme } from "../../shared/Theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import NumItem from "./components/NumItem";

const PinPage = ({visible, onPress}) => {
    const theme = useTheme();
    const [pin, setPin] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const [pinParam, setPinParam] = useState({});
    const [renderNum, setRenderNum] = useState({});

    let numbers = [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'},
        {id: '6'},
        {id: '7'},
        {id: '8'},
        {id: '9'},
        {id: '0'},
        {id: 'C'},

    ];

    useEffect(()=>{
        numbers = numbers.sort(()=>Math.random()-0.5)
        setRenderNum(numbers)
    }, [])

    let contentStyle = {
        flex: 1, justifyContent: 'space-around', alignSelf: 'center'
    }
    
    const renderNumItem = ({item}) => {
        return <NumItem product={item} onPress={()=>{
            item.id !== 'C' ? setPin(pin + item.id) : setPin('')
        }}/>
    }

    //Get Param
    useEffect(()=>{
        if (route.params?.prevPage){
            setPinParam({
                prevPage: route.params.prevPage
            })
        }
    }, [route.params]);
    return(
        // <View style={styles.mainContainer}>
        //     <Modal
        //         visible={visible}
        //         animationType='slide'
        //         transparent={true}
        //     >
        //         <View style={styles.modalContainer}>
        //         <TouchableOpacity onPress={onPress}>
        //             <Entypo name="back" size={24} color="black" />
        //         </TouchableOpacity>
        //             <View style={{alignItems: 'center'}}>
        //                 <View style={{width: '50%'}}>
                        // <Text style={[theme.text.subtitle, {textAlign: 'center'}]}>Please Input PIN{'\n'} (User Id: 123)</Text> 
                        // </View>
                        // <TextInput secureTextEntry style={{
                        //     borderBottomColor: theme.color.foreground,
                        //     borderBottomWidth: 1,
                        //     marginVertical: theme.spacing.l,
                        //     fontSize: 32,
                        //     textAlign: 'center',
                        // }} value={pin} onChangeText={setPin} placeholder="        " keyboardType="number"></TextInput>
        //                 <FormButton onClick={onPress} label={'Submit'}/>
        //             </View>
        //         </View>
        //     </Modal>
        // </View>     
        <MainContainer>
            <View style={styles.pinContainer}>
                <View style={styles.pinView}>
                    <Text style={[theme.text.subtitle, styles.pinLabel]}>Please Input PIN{'\n'} (User Id: 123)</Text> 
                    <TextInput secureTextEntry style={styles.pinInput} value={pin} onChangeText={setPin} keyboardType="numeric" maxLength={6}></TextInput>
                </View>
            </View>
            <FormButton label={'Submit'} onClick={()=>{
                navigation.navigate(pinParam.prevPage, {
                    message: 'OK'
                })
                console.log("SUBMITED");
                // navigation.reset({
                //     index: 0,
                //     route: [{
                //         name: pinParam.prevPage,
                //         params: {message: 'OK'}
                //     }]
                // })
            }}/>
            <View style={{flex: 1, marginHorizontal: theme.spacing.m}}>
                <FlatList
                    data={renderNum}
                    renderItem={renderNumItem}
                    keyExtractor={item=>item.id}
                    contentContainerStyle={contentStyle}
                    numColumns={3}
                />
            </View>
        </MainContainer>   
    )
}

const styles = StyleSheet.create({
    pinContainer: {
        alignItems: 'center',
    },
    pinView: {
        width: '50%',
    },
    pinLabel: {
        textAlign: 'center',
    },
    pinInput: {
        borderBottomColor: theme.color.foreground,
        borderBottomWidth: 1,
        marginVertical: theme.spacing.l,
        fontSize: 32,
        textAlign: 'center',
    }
})

export default PinPage;