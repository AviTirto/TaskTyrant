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

  function completeTask(taskName){
    setTasks(prevTasks => {
        return prevTasks.filter((title) => {
          return title.text != taskName
        })
      }
    )
  }

  return (
    <View style={styles.appContainer}>
      <Text>TaskTyrant</Text>
      <Button title='+' style={styles.addButton} onPress={toggleTF}/>
      <StatusBar style="auto" />
      <FlatList style={styles.listContainer}
        data={tasks}
        renderItem={
          (itemData) => {
            return (
              <Task title={itemData.item.text} onCheck={completeTask} />
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
    backgroundColor: '#fefae0'
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#ff0000'
  },
  addButton: {
    flex: 1, 
    padding: 8,
    alignSelf: 'center'
  }
});
