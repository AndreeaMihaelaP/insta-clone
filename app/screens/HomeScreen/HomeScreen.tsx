import { FlatList } from "react-native";
import { FeedPost } from "@/app/components/FeedPost";
import posts from "@/app/data/posts.json";

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <FeedPost post={item} />}
    />
  );
};

export default HomeScreen;
