import clsx from "clsx";
import {m, useReducedMotion} from "framer-motion";
import Link from "next/link";

const animation = {
    hide: {
        x: -16,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
    },
};

interface HeaderCtaProps {
    isFree?: boolean;
    isFreeAnimationDuration?: number;
}

function ButtonContactMe() {
    return (
        <Link
            href="/work/contact"
            className={clsx('button button--solid min-w-[128px]', 'md:button--big')}
        >
            Get in Touch
        </Link>
    );
}
function AvailableForHire() {
    return (
        <div
            className={clsx(
                'button button--ghost text-rdev-blue-600 pointer-events-none gap-2.5 px-2.5',
                'md:button--big md:px-2.5',
                'dark:text-rdev-blue-400'
            )}
        >
      <span className={clsx('relative flex h-2 w-2')}>
        <span
            className={clsx(
                'bg-rdev-blue-600 absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full opacity-75',
                'dark:bg-rdev-blue-400'
            )}
        />
        <span
            className={clsx(
                'bg-rdev-blue-500 relative inline-flex h-2 w-2 rounded-full',
                'dark:bg-rdev-blue-400'
            )}
        />
      </span>
            AVAILABLE FOR HIRE
        </div>
    );
}

function ButtonResume() {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            href="https://www.figma.com/community/file/1176377524040948926"
            className={clsx('button button--ghost px-2', 'md:button--big md:px-2')}
        >
            {/*<DocumentIcon className={clsx('h-5 w-5')} />*/}
            RESUME
        </a>
    );
}

function HeaderCta({
                       isFree = true,
                       isFreeAnimationDuration = 4
                   }: HeaderCtaProps) {
    const shouldReduceMotion = useReducedMotion();
    let isFreeVariants = {
        hide: {
            x: 0,
            opacity: 1,
        },
        show: {
            x: -48,
            opacity: 0,
        },
    };

    if (shouldReduceMotion) {
        isFreeVariants = {
            hide: {
                x: 0,
                opacity: 1,
            },
            show: {
                x: 0,
                opacity: 0,
            },
        };
    }

    return (
        <m.div className={clsx('flex gap-2')} initial="hide" animate="show">
            <m.div
                className={clsx('relative z-20')}
                variants={animation}
                transition={{delay: 0.4}}
            >
                <ButtonContactMe/>
            </m.div>
            {isFree ? (
                <m.div
                    variants={animation}
                    transition={{delay: 1.4}}
                    className={clsx('relative z-10')}
                >
                    <m.div
                        variants={isFreeVariants}
                        transition={{delay: isFreeAnimationDuration + 1.5, duration: 0.4}}
                    >
                        <AvailableForHire />
                    </m.div>
                    <m.div
                        className={clsx('absolute top-0 left-0')}
                        initial={{x: -48, opacity: 0, pointerEvents: 'none'}}
                        animate={{x: 0, opacity: 1, pointerEvents: 'auto'}}
                        transition={{delay: isFreeAnimationDuration + 1.6, duration: 0.4}}
                    >
                        <ButtonResume />
                    </m.div>
                </m.div>
            ) : (
                <m.div variants={animation} transition={{delay: 0.5}}>
                    <ButtonResume />
                </m.div>
            )}
        </m.div>
    )
}

export default HeaderCta