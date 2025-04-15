import Dashboard from "@/pages/dashboard";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();

  return (
  <div>
      <Header />
      <main>
          {
              session && (
                  <>
                      <SideMenu />
                      <Dashboard />
                  </>
              )
          }
          <Login />
      </main>

  </div>
  );
}
