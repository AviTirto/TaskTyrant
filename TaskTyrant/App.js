import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [openTF, setOpenTF] = useState(false);
  
  function toggleTF(){
    setOpenTF(true);
  }

  function addNewTask(newTask){
    setTasks(prevTasks => [...prevTasks, newTask]);
    setOpenTF(false);
  }
  return (
    <View style={styles.appContainer}>
      <Text>TaskTyrant</Text>
      <Button title='+' style={styles.addButton} onPress={toggleTF}/>
      <StatusBar style="auto" />
      {tasks.map(task => <Text key={task}>{task}</Text>)}
      {openTF && <TaskForm onSubmit={addNewTask}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20, 
    alignItems: 'center',
  },
  addButton: {
    flex: 1, 
    padding: 8,
  }
});
