import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import Task from './components/Task/Task'


export default function App() {
  const [tasks, setTasks] = useState([]);
  const [openTF, setOpenTF] = useState(false);
  
  function toggleTF(){
    setOpenTF(true);
  }

  function addNewTask(newTask){
    setTasks(prevTasks => {
      return(
        [...prevTasks,
        {text: newTask, key: prevTasks.length}]
      );
    });
    setOpenTF(false);
  }

  function removeTask(index){
    setTasks(prevTasks => [...prevTasks].splice(index, 1))
  }

  return (
    <View style={styles.appContainer}>
      <Text>TaskTyrant</Text>
      <Button title='+' style={styles.addButton} onPress={toggleTF}/>
      <StatusBar style="auto" />
      <FlatList 
        data={tasks}
        renderItem={
          (itemData) => {
            return (
              <Task key={itemData.item.key} title={itemData.item.text} onCheck={removeTask}/>
            )
          }
        }
      />
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
