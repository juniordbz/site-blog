import { useRouter } from "next/router";

export default function PostsPage() {
  const router = useRouter();
  const segment = router.query.slug as string[];
  console.log(router.query.slug);

  return (
    <div>
      <h2>Posts: {segment?.join("/")}</h2>
    </div>
  );
}
