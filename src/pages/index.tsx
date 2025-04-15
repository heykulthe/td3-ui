import Dashboard from "@/pages/dashboard";
import Header from "@/pages/components/Header";
import SideMenu from "@/pages/components/SideMenu";

export default function Home() {
  return (
  <div>
      <Header />
      <SideMenu />
      <Dashboard />
  </div>
  );
}
