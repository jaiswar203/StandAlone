import { useRouter } from "next/router"
import { Layout, Detail } from "../../src/components"
import { data } from "../../src/db/data"

const Year = () => {
    const router = useRouter()
    const { id } = router.query

    const newData = data.datas.filter((d) => id === d.date.find((d) => d === id))

    if (id === undefined) {
        return <h1>Wait ...</h1>
    }
    return (
        <Layout title={`Awards-${id}`} description={`Awards-${id}`}>
            <div className="awards-detail">
                <Detail data={newData} title={"Sci-Fi"}  />
                <Detail data={newData} title={"Action/Thriller"} speed={800} />
                <Detail data={newData} title={"Crime"} speed={1000} />
                <Detail data={newData} title={"Romance"} speed={1200} />
            </div>
        </Layout>
    )
}

export default Year
