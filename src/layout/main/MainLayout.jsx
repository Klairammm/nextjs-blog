import style from "./styleMainLayout.module.scss";
import Navbar from "@/components/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className={style.MainLayout}>
      <header>
        <Navbar />
      </header>

      <main> {children}</main>
    </div>
  );
};

export default MainLayout;
