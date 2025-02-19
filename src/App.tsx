import Home from "./pages/home";
import bgWhite from "./assets/bg.jpg";
import { Button } from "./components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Experience from "./pages/experience";

const PortfolioPage = () => {
  return (<div style={{ backgroundImage: `url(${bgWhite})` }} className="bg-cover bg-center shadow-sm h-screen">
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center bg-white p-2">

      <div>
        <Button asChild variant="ghost"  className="text-base"><a href="#Aceuil">Aceuil</a></Button>
        <Button asChild variant="ghost"  className="text-base"><a href="#Experiences">Expériences</a></Button>
      </div>
      <div className=" hidden lg:flex absolute left-[98%] -translate-x-full">
        <Button asChild className="mr-3"><a href="https://github.com/Hawkerh"><Github />Mon Github </a></Button>
        <Button asChild variant="ghost"><a href="https://www.linkedin.com/in/albert-cisse-18b602284/</Button>"><Linkedin />Linkdin</a></Button>
      </div>
    </div>
    <div className=" flex lg:hidden shadow rounded bg-white space-x-3 h-fit py-2 px-4 fixed top-[98%] left-[95%] -translate-y-full -translate-x-full z-50 ring-1 ring-gray-200">
      {[
        { href: "https://github.com/Hawkerh", icon: "github" },
        { href: "https://www.linkedin.com/in/albert-cisse-18b602284/", icon: "linkedin-in" },
        { href: "mailto:cissealbert.d@icloud.com", icon: "at" }
      ].map((link, index) => (
        <a key={index} href={link.href} className="text-black hover:text-zinc-700 text-lg">
          <i className={`fab fa-${link.icon}`} />
        </a>
      ))}
    </div>
    <div id="Aceuil" >
      <Home />
    </div>
    <div id="Experiences">
      <Experience />
    </div>
  </div>
  );
};

export default PortfolioPage;

