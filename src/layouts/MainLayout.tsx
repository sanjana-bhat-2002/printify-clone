import { FC, ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
