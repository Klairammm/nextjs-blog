import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GET } from "@/utils/api";
import style from "./styleIDPost.module.scss";

export default function () {
  const imgPost = "https://picsum.photos/600/400?";

  const router = useRouter();
  let { id } = router.query;

  const [postData, setPostData] = useState({});
  const [userData, setUserData] = useState({});

  console.log(postData.tags);

  useEffect(() => {
    if (router.isReady) GET(`posts/${id}`).then((data) => setPostData(data));
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady)
      GET(`users/${id}`).then((dataUser) => setUserData(dataUser));
  }, [router.isReady]);

  return (
    <div className={style.Post}>
      <Image
        src={imgPost + id}
        width={500}
        height={400}
        alt={postData.title}
      ></Image>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <div className={style.containerTag}>
        {postData?.tags?.map((tag, index) => (
          <p key={index}>#{tag} </p>
        ))}
      </div>
      <h5>Author @{userData.username}</h5>
      <Link href={`/`}>Back HOME</Link>
    </div>
  );
}
