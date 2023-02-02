import clsx from 'clsx';

import type {PropsWithChildren} from 'react';

function SectionContent({children}: PropsWithChildren) {
    return (
        <div className={clsx('pb-20')}>{children}</div>
    );
}

export default SectionContent;
