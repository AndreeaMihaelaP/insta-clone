import { Text, View, StyleSheet, Image } from "react-native";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

export default function Index() {
  return (
    <View style={styles.post}>
      {/* Header*/}
      <View style={styles.header}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
          }}
        />
        <Text style={styles.userName}>misatokatsuragi</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Content  */}
      <Image
        style={styles.image}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
      />
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name="hearto"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: "auto" }}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>ingrid </Text>and{" "}
          <Text style={styles.bold}>66 others </Text>
        </Text>
        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>misatokatsuragi</Text> Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Odit at ab facere deserunt
          accusantium officia eius necessitatibus odio iure vitae totam quae
          error fugiat quis cumque earum perspiciatis, natus dolores?
        </Text>

        {/* Comments */}
        <Text style={styles.postText}>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>misatokatsuragi</Text> Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.
          </Text>
          <AntDesign
            name="hearto"
            size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/* Posted date */}
        <Text style={styles.postText}>19 December, 2021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
  footer: {
    padding: 10,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  commentText: {
    flex: 1,
    color: colors.black,
    lineHeight: 18,
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
  },
  postText: {
    color: colors.grey,
  },
});
