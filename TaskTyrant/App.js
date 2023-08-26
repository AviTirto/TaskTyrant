import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import TaskForm from './components/TaskForm'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [toggleTaskForm, setToggleTaskForm] = useState(false)

  function addNewTask(newTask){
    setTasks(prevTasks => [...prevTasks, newTask])
  }
  return (
    <View style={styles.appContainer}>
      <Text>TaskTyrant</Text>
      <Button title='+' style={styles.addButton}/>
      <StatusBar style="auto" />
      {tasks.map(task => <Text>{task}</Text>)}
      {toggleTaskForm && <TaskForm onSubmit={addNewTask}/>}
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
