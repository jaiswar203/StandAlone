import {Layout,Home} from '../src/components'

const index = ({loading}) => {
    console.log({loading})
    return (
        <Layout title={"Home"} description={"Stanalone Home"}>
            <Home />
        </Layout>
    )
}

export default index
