import { Layout } from "@/components/Layout";
import { Ipost } from "@/typings";
import styles from "../../styles/post.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import { Comments } from "@/components/comments/Comments";

export default function Post({ post }: { post: Ipost }) {
  console.log(post.comments);
  //"1640061574985"

  return (
    <Layout>
      <section className={styles.postContainer}>
        <Image
          src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/7ca4a5b5-3e74-4cf8-a8db-a5f6f0407039/2023.02.13-AnalisiAvversari-MilanTottenham-WebHP.png?w=1536&auto=format"
          alt=""
          width={1280}
          height={600}
        />

        <section className={styles.postContentConatainer}>
          <div className={styles.socialIcons}>
            <Image
              width={20}
              height={20}
              style={{ backgroundColor: "white" }}
              alt=""
              src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/b6dc7585-f19a-473b-835c-81f1469a5b40/fb@80.png"
            />
            <Image
              width={20}
              height={20}
              alt=""
              src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/dab36138-b8da-4e07-84d1-8f9500bf13d6/wh_up@80.png"
            />
            <Image
              width={20}
              height={20}
              alt=""
              src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/8a129e34-587e-4849-932b-02c161815eb5/twitter_copy@80.png"
            />
          </div>

          <div className={styles.content}>
            <h1>{post.header}</h1>
            <p>{post.context}</p>
            <p className={styles.author}>
              Posted by: <strong>{post.author.username}</strong>
            </p>
          </div>
        </section>

        <section className={styles.commentsContainer}>
          <textarea>a</textarea>
          <Comments />
        </section>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3001/api/post");
  const { posts } = await res.json();

  const paths = posts.map((post: Ipost) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const res = await fetch(`http://localhost:3001/api/post/${params.slug}`);
  const { post } = await res.json();

  return {
    props: {
      post,
    },
  };
}
