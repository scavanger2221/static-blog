
import fs from "fs";
import path from "path";
import Link  from "next/link";

function getPostMetaData()
{
  const folder = path.join("src", 'posts'); 
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));

  return slugs;
}


export default function Home() {

  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((slug) => (
    <div>
      <Link href={`posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));


  return (
    <div>{postPreviews}</div>
  );
};
