import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { SelectedTaskContext } from "../home";

const SubTitle = () => {
  const { selectedTask } = useContext(SelectedTaskContext);
  return (
    <View style={styles.title}>
      <Text
        variant="labelLarge"
        style={{ color: selectedTask ? "red" : "black" }}
      >
        You can select one type of cleaning and extra tasks
      </Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
