import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
// import markdownStyles from "./markdown-styles.module.css";
import Link from "next/link";
import styles from './post.module.css';


export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content", "meta"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container mx-auto">
      <main>
        <div className="w-full h-16  text-white">
          <h3 className="text-2xl">{post.title}</h3>
          <hr/>
          {/* <p className="text-gray-400">{post.author.name ?? ""}</p> */}
          {/* {
            JSON.stringify(post?.meta?.tag || "No Tag")
          } */}
          <div
            // className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <Link href="/blog" passHref>
        <button className={styles.button}>
          <div className={styles.buttonBox}>
              <span className={styles.buttonElem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
            <span className={styles.buttonElem}>
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
          </div>
        </button>
        </Link>
      </main>
    </div>
  );
}