import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

type Props = {
    task: string;
}

export function Task({ task }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{ task }</Text>

            <TouchableOpacity style={styles.button}>
                <Image source={require("../../../assets/delete.png")}/>
            </TouchableOpacity>
        </View>
    );
}