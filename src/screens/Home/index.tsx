
import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, Image, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";

export function Home() {

    const[tasks, setTasks] = useState<string[]>([]);
    const[tasksDone, setTasksDone] = useState<string[]>([]);
    const[task, setTask] = useState('');
    const[countCreated, setCountCreated] = useState(0);
    const[countDone, setCountDone] = useState(0);

    function handleTaskAdd() {
        if (!task.trim()) {
            return Alert.alert("Adicione uma tarefa!");
        }

        setTasks(prevState => [...prevState, task]);
        setTask('');
        setCountCreated(countCreated + 1);
    }

    function handleTaskRemove(name: string) {
        Alert.alert("Remover", 'Deseja remover a tarefa?', [
          {
            text: 'Sim',
            onPress: () => {
                setTasks(prevState => prevState.filter(task => task !== name));
                setCountCreated(countCreated - 1);

                if (tasksDone.includes(name)) {
                    setTasksDone(prevState => prevState.filter(task => task !== name));
                    setCountDone(countDone - 1);
                }
            }
          },
          {
            text: 'Não',
            style: 'cancel'
          }
        ]);    
    }

    function handleTaskSelect(name: string) {
        if (!tasksDone.includes(name)) {
            setTasksDone(prevState => [...prevState, name]);
            setCountDone(countDone + 1);
        } else {
            setTasksDone(prevState => prevState.filter(task => task !== name));
            setCountDone(countDone - 1);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../../assets/Logo.png")} />
            </View>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
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
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.textCreated}>Criadas</Text>
                    <View style={styles.countCreated}>
                        <Text style={styles.textCountCreated}>{countCreated}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.textDone}>Concluidas</Text>
                    <View style={styles.countDone}>
                        <Text style={styles.textCountDone}>{countDone}</Text>
                    </View>
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
                        selected={tasksDone.includes(item)}
                        onRemove={() => handleTaskRemove(item)}
                        onSelect={() => handleTaskSelect(item)}/>
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