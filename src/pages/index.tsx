import Dashboard from "@/pages/dashboard";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const {data: session} = useSession();

  return (
  <section className="bg-[#040923] text-gray-50">
      <Header />
      <main>
          {
              session && (
                  <div className="flex">
                      <SideMenu />
                      <Dashboard />
                  </div>
              )
          }
          <Login />
          <Footer />
      </main>

  </section>
  );
}
