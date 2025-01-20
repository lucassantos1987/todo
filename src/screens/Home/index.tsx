
import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";

export function Home() {

    const[tasks, setTasks] = useState<string[]>([]);
    const[task, setTask] = useState('');

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, task]);
        setTask('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../../assets/Logo.png")} />
            </View>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa..."
                    placeholderTextColor="#808080"
                    onChangeText={setTask}
                    value={task}
          
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleTaskAdd}>
                    <Image source={require("../../../assets/plus.png")} />
                </TouchableOpacity>
            </View>

            <View style={styles.status}>
                <View>
                    <Text style={styles.textCriadas}>Criadas</Text>
                </View>
                <View>
                    <Text style={styles.textConcluidas}>Concluidas</Text>
                </View>
            </View>

            <FlatList
                style={styles.list} 
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task 
                    key={item}
                    task={item} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmpty}>
                        <Image source={require("../../../assets/Clipboard.png")} />
                        <Text style={styles.listEmptyTextBold}>Você ainda não tem tarefas cadastradas.</Text>
                        <Text style={styles.listEmptyTextNormal}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}   
            />
        </View>
    );
}