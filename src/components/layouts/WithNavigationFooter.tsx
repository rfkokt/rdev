import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import type {PropsWithChildren} from 'react';
import clsx from "clsx";

function WithNavigationFooter({children}: PropsWithChildren) {
    return (
        <>
            <Navigation/>
            <main>
                <div className={clsx("content-wrapper")}>
                    {children}
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default WithNavigationFooter;
