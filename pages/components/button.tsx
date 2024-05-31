import { Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { SelectedTaskContext } from "../home";

const ButtonComponent = () => {
  const { selectedTask } = useContext(SelectedTaskContext);
  return (
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        disabled={selectedTask ? false : true}
        mode="contained-tonal"
        buttonColor="#FF5416"
        textColor="#fff"
      >
        Next
      </Button>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: { margin: 20 },
  button: { paddingVertical: 6 },
});
