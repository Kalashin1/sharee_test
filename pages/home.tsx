import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppbarComponent from "./components/appbar";
import ProgressBarComponent from "./components/progress";
import TitleComponent from "./components/title";
import SubTitle from "./components/sub-title";
import Task from "./components/task";
import ButtonComponent from "./components/button";
import { services } from "./data";

type TaskType = {
  title: string;
  items?: {
    title: string;
    items?: string[];
  }[];
};

type SelectedTaskContextType = {
  selectedTask: TaskType | null;
  setSelectedTask: Dispatch<SetStateAction<TaskType>>;
};

export const SelectedTaskContext = createContext<
  Partial<SelectedTaskContextType>
>({});

const Home = () => {
  const [selectedTask, setSelectedTask] = useState<TaskType>();
  return (
    <SelectedTaskContext.Provider value={{ selectedTask, setSelectedTask }}>
      <View style={styles.container}>
        <AppbarComponent />
        <ScrollView>
          <ProgressBarComponent />
          <TitleComponent />
          <SubTitle />
          <View style={styles.services}>
            {services &&
              services.map((service, index) => (
                <Task service={service} key={index} />
              ))}
          </View>
        </ScrollView>
        <ButtonComponent />
      </View>
    </SelectedTaskContext.Provider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  services: {
    padding: 20,
  },
});
