import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "@/theme/colors";
import fonts from "@/theme/fonts";
import { IComment } from "@/app/types/model";

interface ICommentProps {
  comment: IComment;
}
const Comment = ({ comment }: ICommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text> Lorem ipsum
        {comment.comment}
      </Text>
      <AntDesign
        name="hearto"
        size={14}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  icon: {
    marginHorizontal: 10,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
});

export default Comment;
