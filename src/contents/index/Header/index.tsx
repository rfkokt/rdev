import clsx from "clsx";
import HeaderTitle from "@/contents/index/Header/HeaderTitle";
function Header() {
    return (
        <header
            id="page-header"
            className={clsx(
                'background-grid background-grid--fade-out pt-36 pb-20',
                'lg:pb-28 lg:pt-52',
            )}
        >
            <div className={clsx("content-wrapper")}>
                <div className={clsx('relative flex flex-col items-center')}>
                    <div className={clsx('relative z-10')}>
                        <HeaderTitle/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header