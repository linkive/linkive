import Image from "next/image";
import styles from "@/style/page.module.css";

import { Suspense } from "react";
export default function Home() {
  const imageUrls: string[] = [];

  for (let i = 0; i <= 84; i++) {
    imageUrls.push(`https://d1zk9dvuki94by.cloudfront.net/toil-img-${i}.jpg`);
  }

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className={styles.container}>
        {imageUrls.map((url: string, index: number) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={url}
              alt={`Image ${index}`}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </Suspense>
  );
}
