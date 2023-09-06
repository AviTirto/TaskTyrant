import TaskList from "./components/TaskList/TaskList";
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


function App() {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>HOME</Text>
      <TaskList/>
    </Layout>
  )
}


export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);

