import { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import colors from "@/theme/colors";
import { Comment } from "../Comment";

import styles from "./styles";
import { IPost } from "@/app/types/model";
import DoublePressable from "../DoublePressable";

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({ post }: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleLike = () => {
    setIsLiked((v) => !v);
  };

  return (
    <View style={styles.post}>
      {/* Header*/}
      <View style={styles.header}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: post.user.image,
          }}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content  */}
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
      </DoublePressable>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? "heart" : "hearto"}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
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
          <Text style={styles.bold}>{post.nofLikes} others </Text>
        </Text>
        {/* Post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text> Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Odit at ab facere
          deserunt accusantium officia eius necessitatibus odio iure vitae totam
          quae error fugiat quis cumque earum perspiciatis, natus dolores?
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? "less" : "more"}
        </Text>

        {/* Comments */}
        <Text style={styles.postText}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted date */}
        <Text style={styles.postText}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
