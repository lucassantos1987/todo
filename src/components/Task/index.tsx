import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props = {
    task: string;
    onRemove: () => void;
}

export function Task({ task, onRemove }: Props) {

    const[checked, setChecked] = useState(false);

    function handleCheckRadioButton() {
        if (checked === false) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity 
                style={styles.radioButton}
                onPress={handleCheckRadioButton}>
                {
                    checked === true && <View style={styles.radioButtonSelected}/>
                }                
            </TouchableOpacity>

            {    
                checked === false ? <Text style={styles.task}>{ task }</Text> : <Text style={styles.taskSelected}>{ task }</Text>
            }

            <TouchableOpacity 
                style={styles.button}
                onPress={onRemove}>
                <Image source={require("../../../assets/delete.png")}/>
            </TouchableOpacity>
        </View>
    );
}