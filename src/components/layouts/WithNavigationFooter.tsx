import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import type {PropsWithChildren} from 'react';
import Header from "@/contents/index/Header";

function WithNavigationFooter({children}: PropsWithChildren) {
    return (
        <>
            <Navigation/>
            <main>
                <Header/>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default WithNavigationFooter;
