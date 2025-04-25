import Feed from "@/components/Feed";
import MobileNavbar from "@/components/shared/MobileNavbar";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Feed />
    </>
  );
}
