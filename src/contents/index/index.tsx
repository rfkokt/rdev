import clsx from "clsx";
import RepoApps from "@/contents/index/RepoApps";

function IndexContents() {
    return (
            <div className={clsx('hidden', 'lg:-mt-12 lg:mb-24 lg:block')}>
                <RepoApps />
            </div>
    )
}

export default IndexContents;