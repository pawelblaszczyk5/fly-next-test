import { unstable_noStore } from "next/cache";
import Image from "next/image";

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomImageSrc = () =>
  `https://picsum.photos/${getRandomNumber(400, 300)}`;

export default function Home() {
  unstable_noStore();

  return (
    <>
      <h1>Hello world</h1>
      <Image src={getRandomImageSrc()} width={200} height={200} alt="" />
    </>
  );
}
