import Head from 'next/head'
import Footer from '@components/Footer';
import Header from '@components/Header'

import styles from './Layout.module.scss';

const Layout = ({ children, className, ...rest }) => {
    let layoutClassName = styles.Layout;

    if (className) {
        layoutClassName = `${LayoutClassName} + ${className}`
    }
    
    return (
        <div {...rest} className={layoutClassName}>
            <Head>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            { children }
            <Footer/>
        </div>
    )
}

export default Layout;