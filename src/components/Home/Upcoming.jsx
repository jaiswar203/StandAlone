import { HeadingAOS, Visible } from './hooks'

const Upcoming = () => {
    return (
        <>
            <HeadingAOS title={"upcoming"}>
                Upcoming Events
            </HeadingAOS>
            <Visible run={false}>
                <div className="pad-3">
                    <div className="home-upcoming-content">
                        <div className="home-upcoming-content-image">
                            <img src="https://www.eventfaqs.com/uploads/News/Content/iaa-title3.jpg" alt="" />
                        </div>
                        <div className="home-upcoming-content-detail">
                            <h2>Lazarus Pit</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio vel pariatur consectetur doloribus aperiam soluta provident odio porro quasi ab repudiandae nostrum accusamus sed fugiat unde dolore, saepe, omnis aliquam.</p>
                            <div className="reg-button">
                                <button>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                        <div className="remaining">
                            <p>Registration Ends In :- </p>
                            <p>13d : 12h : 10m</p>
                        </div>
                </div>
            </Visible>

        </>
    )
}

export default Upcoming
