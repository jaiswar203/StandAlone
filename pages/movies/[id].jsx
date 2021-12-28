import { useRouter } from 'next/router'
import {Layout,MoviesDetail as Detail} from '../../src/components'
import { data } from '../../src/db/data'

const Details = () => {
    const router=useRouter()
    const {id}=router.query

    const newData=data.datas.filter((d)=>id===d.category.find((d)=>d===id))
    console.log({newData})
    return (
        <Layout title={`Movies`} description={`Movies Detail`}> 
            <Detail data={newData} />
        </Layout>
    )
}

export default Details
