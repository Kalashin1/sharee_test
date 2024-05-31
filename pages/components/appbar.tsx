import { View, StyleSheet, Image } from "react-native";
import { Appbar, Text } from "react-native-paper";

const AppbarComponent = () => {
  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Appbar.BackAction color="white" onPress={() => {}} />
        <Image source={require("../../assets/images/logo.png")} />
        <Appbar.Action icon="menu" onPress={() => {}} color="white" />
      </Appbar>
    </View>
  );
};

export default AppbarComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  appbar: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "#024751",
    display: "flex",
    paddingVertical: "10%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
