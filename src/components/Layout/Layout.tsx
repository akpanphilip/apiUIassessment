import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="main">
      <section>
        <Sidebar />
      </section>
      <section className="main-section">
        <Header />
        <div className="main-in">

          {children}
        </div>
      </section>
    </main>
  );
};

export default Layout;

