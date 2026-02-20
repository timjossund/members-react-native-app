import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Latest Posts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2c2cff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
