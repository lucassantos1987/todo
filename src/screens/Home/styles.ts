import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        padding: 24
    },
    logo: {
        width: '100%',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',       
        
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    input: {
        flex: 1,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1F1E25',
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'  
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24  
    },
    status: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBlockColor: '#808080',
        paddingBottom: 20
    },
    textCriadas: {
        color: '#4EA8DE',
        fontWeight: 'bold',
    },
    textConcluidas: {
        color: '#8284FA',
        fontWeight: 'bold'        
    },
    list: {
        marginTop: 30
    },
    listEmpty: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    listEmptyTextBold: {
        marginTop: 15,
        color: '#808080',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listEmptyTextNormal: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center'
    }
  
})