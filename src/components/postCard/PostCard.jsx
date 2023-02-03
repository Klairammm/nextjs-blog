import style from "./stylePostCard.module.scss";

import Image from "next/image";
import { postImages } from "@/mocks/images";
import Link from "next/link";

const PostCard = ({ data }) => {
  const { title, id } = data;
  const imgPost = "https://picsum.photos/500/400?";
  return (
    <div className={style.PostCard}>
      <h2>{title}</h2>
      <Link href={`/post/${id}`}>
        <Image
          src={imgPost + id}
          alt={title}
          width={500}
          height={400}
          priority
        />
        <p>Continua a leggere..</p>
      </Link>
    </div>
  );
};

export default PostCard;
