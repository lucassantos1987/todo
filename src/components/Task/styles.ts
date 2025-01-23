import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    task: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 20,
    },
    taskSelected: {
      flex: 1,
      fontSize: 16,
      color: '#808080',
      marginLeft: 20,
      textDecorationLine: 'line-through',   
  },
    buttonText: {
        color: '#FFF',
        fontSize: 24  
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconButton: {
        color: '#808080'
      },
      radioButton: {
        borderWidth: 1,
        borderColor: '#1E6F9F',
        width: 24,
        height: 24,
        borderRadius: 20,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      radioButtonSelected: {
        width: 16,
        height: 16,
        backgroundColor: '#1E6F9F',
        borderRadius: 20,
      }
})