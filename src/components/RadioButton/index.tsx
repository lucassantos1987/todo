import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

import { styles } from './styles';

type Props = {
    selected:  boolean;
    onSelect: () => void;
}

export function RadioButton({ selected, onSelect }: Props) {
    return (
        <View>
            <TouchableOpacity 
                style={styles.radioButton}
                onPress={onSelect}>
                {
                    selected === true && <View style={styles.radioButtonSelected}/>
                }                
            </TouchableOpacity>
        </View>
    );
}