import { StatusBar } from "expo-status-bar";
import { Button, Text, View, FlatList } from "react-native";
import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import Task from "../Task/Task";
import styles from "./TaskListStyles";
import CircleButton from "../CircleButton/CircleButton";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [openTF, setOpenTF] = useState(false);
  const [completed, setCompleted] = useState([]);

  function toggleTF() {
    setOpenTF(true);
  }

  function addNewTask(newTask) {
    setTasks((prevTasks) => {
      return [...prevTasks, { text: newTask, key: prevTasks.length }];
    });
    setOpenTF(false);
  }

  function completeTask(task) {
    setCompleted((prevCompleted) => {
      return [...prevCompleted, task];
    });
    //console.log(completed);
    setTasks((prevTasks) => {
      return prevTasks.filter((item) => {
        return item.text != task.text;
      });
    });
  }

  return (
    <View style={styles.appContainer}>
      <CircleButton onPress={toggleTF}>+</CircleButton>
      <StatusBar style="auto" />
      <FlatList
        style={styles.listContainer}
        data={tasks}
        renderItem={(itemData) => {
          return (
            <Task
              task={itemData.item}
              onCheck={completeTask}
              complete={false}
            />
          );
        }}
      />
      <Text>Completed</Text>
      <FlatList
        style={styles.listContainer}
        data={completed}
        renderItem={(itemData) => {
          return (
            <Task task={itemData.item} onCheck={completeTask} complete={true} />
          );
        }}
      />
      <TaskForm onSubmit={addNewTask} visible={openTF} />
    </View>
  );
};

export default TaskList;
