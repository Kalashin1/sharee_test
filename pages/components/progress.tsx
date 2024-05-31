import { ProgressBar, MD3Colors } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const ProgressBarComponent = () => {
  return (
    <View style={styles.progressBar}>
      <ProgressBar progress={0.25} color={MD3Colors.secondary50} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    padding: 20,
  },
});

export default ProgressBarComponent;
