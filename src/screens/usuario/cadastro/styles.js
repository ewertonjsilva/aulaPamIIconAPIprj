import { StyleSheet } from 'react-native'; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        backgroundColor: '#FAFAFA',
        padding: 8, 
        width: '100%',
    },
    text: { 
        fontSize: RFPercentage(4), 
        marginVertical: 10, 
        color: '#7F0000',
    }, 
    input: {
        fontSize: RFPercentage(2.4), 
        width: '100%', 
        textAlign: 'center', 
        marginVertical: 4, 
        borderWidth: 0.7,
        borderColor: '#7F0000', 
        padding: 4, 
        borderRadius: 20,  
        height: RFValue(40)
    }, 
    containerPicker: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 0.7,
        borderColor: '#7F0000', 
        borderRadius: 20, 
        marginTop: 4
    },  
    pickerUf: {
        width: '30%',         
        fontSize: RFPercentage(2),
        height: RFValue(40),          
    }, 
    pickerCid: {
        width: '70%',
        fontSize: RFPercentage(2), 
        height: RFValue(40),         
    }, 
    txtLista: {
        fontSize: RFPercentage(2), 
        width: '100%', 
    }, 
    botao: {
        borderColor: '#7F0000', 
        borderWidth: 4, 
        borderRadius: 20,
        width: '100%', 
        marginVertical: 25,  
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#7F0000', 
        height: RFValue(50), 
    }, 
    txtBotao: {
        fontSize: 20, 
        textAlign: 'center', 
        padding: 8, 
        color: '#FAFAFA', 
        fontWeight: 'bold', 
        paddingHorizontal: 32, 
    }, 
    txtMensagem: {
        fontSize: RFPercentage(3), 
        marginVertical: RFValue(200),
    }, 
    erros: {
        fontSize: 18, 
        width: '100%', 
        paddingLeft: 10
    }, 
    ttErros: {
        fontWeight: 'bold'
    }, 
    containerTitulo: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center',        
    },
});

export default styles;