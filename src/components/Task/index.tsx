import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { RadioButton } from "../RadioButton";

type Props = {
    task: string;
    selected: boolean;
    onRemove: () => void;
    onSelect: () => void;
}

export function Task({ task, selected, onRemove, onSelect }: Props) {

    return (
        <View style={styles.container}>

            <RadioButton 
                selected={selected} 
                onSelect={onSelect}/>

            {    
                selected === false ? <Text style={styles.task}>{ task }</Text> : <Text style={styles.taskSelected}>{ task }</Text>
            }

            <TouchableOpacity 
                style={styles.button}
                onPress={onRemove}>
                <Image source={require("../../../assets/delete.png")}/>
            </TouchableOpacity>
        </View>
    );
}