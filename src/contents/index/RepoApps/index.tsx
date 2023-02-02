import SectionTitle from "@/components/sections/SectionTitle";
import clsx from "clsx";
import SectionContent from "@/components/sections/SectionContent";
import TodoItem from "@/contents/index/Cards/TodoItem";

function RepoApps() {
    return (
        <div className={clsx("content-wrapper")}>
            <header className={clsx('mb-8')}>
                <SectionTitle title="What i'm doing?" caption="Repositories & Activity" description=""/>
            </header>
            <SectionContent>
                <div
                    className={clsx('flex flex-wrap items-center justify-center ')}
                >
                    <TodoItem state={['typography', 'spacing', 'colors', 'effects']}/>
                    <TodoItem state={['typography', 'spacing', 'colors', 'effects']}/>
                    <TodoItem state={['typography', 'spacing', 'colors', 'effects']}/>
                    <TodoItem state={['typography', 'spacing', 'colors', 'effects']}/>
                </div>
            </SectionContent>
        </div>
    )
}

export default RepoApps