import { View, StyleSheet } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";

export default function Index() {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
