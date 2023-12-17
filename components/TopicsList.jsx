import RemoveBtn from "./RemoveBtn"
import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList({ topics }) {
    // console.log("topic: ", topics);
    return (
        <>
            {topics && topics.map((t) => (
                <div
                    key={t._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{t.title}</h2>
                        <div>{t.description}</div>
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn id={t._id} />
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}


export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/topics");
    console.log("res: ", res)
    const topics = await res.json();
    return { props: { topics } }
}
