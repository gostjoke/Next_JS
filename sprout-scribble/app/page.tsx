import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <Image src="/vercel.svg" alt="Vercel Log" width={72} height={16}></Image>
    </main>
  );
}
