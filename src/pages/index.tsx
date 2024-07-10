import { Onest } from "next/font/google";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Main from "@/layouts/Main";

const onest = Onest({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={onest.className}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
