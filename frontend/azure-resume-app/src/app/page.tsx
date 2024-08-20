import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { FaAddressCard, FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          {name: 'About', link: '#about', icon: <FaBook />},
          {name: 'Contact', link: '#contact', icon: <FaAddressCard />}
        ]} />
        <Hero />
        <Grid /> 
        <Footer /> 
      </div>
    </main>
  );
}
