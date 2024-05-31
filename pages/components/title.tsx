import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const TitleComponent = () => {
  return (
    <View style={styles.title}>
      <Text variant="headlineSmall">What service would you like to book?</Text>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 20,
  },
});
