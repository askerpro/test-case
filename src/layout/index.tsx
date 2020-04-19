import React from 'react';
import Header from './header';
import Main from './main';


const Layout:React.FC = ({children}) => {
    return (<>
        <Header />
        <Main>
            {children}
        </Main>
    </>);
}

export default Layout;