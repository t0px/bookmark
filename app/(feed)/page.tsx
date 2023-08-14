import New from "@/components/private/feed/New";
import Post from "@/components/public/posts/Post";

type PostProps = {
  id: number
  title: string
  body: string
  userId: number
  tags: number[]
  rections: number
}

const getPosts = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  if (!res.ok) {
    return new Error("Couldn't fetch data from API.");
  }
  return res.json();
};

const Page = async () => {
  const data = await getPosts();
  return (
    <section className="flex flex-col gap-4 overflow-y-auto">
      <New />
      {data.posts.map((post: PostProps) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default Page;
