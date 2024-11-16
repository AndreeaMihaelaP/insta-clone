import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../theme/colors";
import font from "../theme/fonts";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: colors.primary, fontSize: font.size.lg }}>
        Hey world!
      </Text>
      {/* <Entypo name="cog" size={32} /> */}
    </View>
  );
}
