import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Checkbox } from "react-native-paper";
import { FC, useContext, useEffect, useState } from "react";
import { SelectedTaskContext } from "../home";

const Task: FC<{
  service: {
    title: string;
    items?: {
      title: string;
      items: string[];
    }[];
  };
}> = ({ service }) => {
  const { selectedTask, setSelectedTask } = useContext(SelectedTaskContext);
  const [checked, setChecked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const bulletUnicode = String.fromCodePoint(0x2022);

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderWidth: checked ? 1 : 0,
      borderRadius: checked ? 20 : 0,
      marginTop: 20,
    },
    innerContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    descriptionContainer: {
      marginTop: 10,
    },
    taskTitle: {
      marginTop: 20,
      marginBottom: 10,
    },
  });

  const handlePress = () => {
    setChecked(!checked);
    setShowDetails(!showDetails);
    if (!checked) {
      setSelectedTask(service);
    } else {
      setSelectedTask(null);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text>{service.title}</Text>

          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={handlePress}
          />
        </View>
        {showDetails && selectedTask?.title === service?.title && (
          <View style={styles.descriptionContainer}>
            <TouchableOpacity onPress={() => setShowDetails(false)}>
              <Text style={{ textAlign: "right", color: "#FF5416" }}>
                Hide Details
              </Text>
            </TouchableOpacity>

            <ScrollView>
              {service.items?.map((serviceItem, index) => (
                <View key={index}>
                  <Text style={styles.taskTitle} variant="labelMedium">
                    {serviceItem.title}
                  </Text>
                  {serviceItem.items?.map((item, key) => (
                    <View key={key}>
                      <Text>
                        {bulletUnicode} {item}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Task;
