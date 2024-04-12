import ProjectCard from "./ProjectCard"
export default function ProjectSection() {
    return <section className="pt-16 pb-7">

        <div className="container  mx-auto max-w-7xl">
            <div className="flex mb-7 flex-wrap">
                <div className="mb-7">
                    <h2 className="text-3xl font-semibold">Latest Projects</h2>
                </div>
            </div>
            <div className="">
                <div className="flex justify-start flex-wrap">
                    <div className="flex">
                        <h6>Next</h6>
                        <div>arrow</div>
                    </div>
                </div>
            </div>

        </div>
    </section>
}