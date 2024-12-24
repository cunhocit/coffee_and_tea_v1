/* eslint-disable react/prop-types */
import NavigationBar from "../../components/navigation"

export const Header = ({scrollToSlideShow}) => {
    return(
    <>
        <section className="wrap-header">
            <NavigationBar/>

            <div className="header-contents">
                <div className="contents-list">
                    <h1>Coffee & Tea</h1>
                    <p>
                    Thưởng thức sự hòa quyện tinh tế giữa hương vị đậm đà của cà phê và sự nhẹ nhàng của trà. 
                            Từ những hạt cà phê rang xay thơm nồng đến lá trà thanh mát, 
                            hành trình khám phá của bạn sẽ tràn đầy cảm hứng và hương vị tuyệt vời.
                    </p>
                </div>
                <a id="header-down-id" onClick={scrollToSlideShow}>Khám phá</a>
            </div>

            <video autoPlay loop muted playsInline className="header-bg-video">
                <source src="src/assets/video/video_2.mp4" type="video/mp4" />
            </video>
        </section>
    </>
    )
}