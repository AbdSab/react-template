import React from 'react';

import Header from 'components/includes/Header';
import Footer from 'components/includes/Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default Layout;