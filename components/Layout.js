import { Children } from "react";

const { default: Header } = require("./Header")

const Layout = ({ children }) => {
    return ( 
        <div>
            <Header />
            <main id="main-collapse">
                { children }
            </main>
        </div>
     );
}
 
export default Layout;