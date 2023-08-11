import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}: {children: ReactNode}): JSX.Element => {
    return (
        <div className="relative">
            <Header/>
            <main>{children}</main>
             <Footer/>
        </div>
    );
};

export default Layout;