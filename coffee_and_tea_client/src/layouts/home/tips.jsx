/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Tips = ({slideTipsRef}) => {
    return (
        <>
            <section className="wrap-tips" ref={slideTipsRef}>
                <div className="tips">
                    <h1>Có thể bạn sẽ cần!</h1>
                    <ul className="tips-ul">
                        <li>
                            <div>
                                <img className="tips-img" src="src/assets/img/tips/image1.png" alt="" />
                                <div className="tips-text">
                                    <h2>Chăm sóc cá</h2>
                                    <p>Để cá luôn khỏe mạnh, bạn cần chú ý đến chế độ ăn uống, môi trường sống và thường xuyên kiểm tra chất lượng nước trong bể.</p>
                                </div>
                            </div>
                            <div className="nextPage_btn">
                                <a href="#"> <p> Tìm hiểu <FontAwesomeIcon icon={faArrowRight} /> </p> </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img className="tips-img" src="src/assets/img/tips/image3.png" alt="" />
                                <div className="tips-text">
                                    <h2>Chăm sóc cây</h2>
                                    <p>Các cây thủy sinh cần ánh sáng phù hợp, dinh dưỡng và nên được cắt tỉa thường xuyên để phát triển tốt và không gây hại cho cá.</p>
                                </div>
                            </div>
                            <div className="nextPage_btn"><a href="#"><p>Tìm hiểu <FontAwesomeIcon icon={faArrowRight} /></p></a></div>
                        </li>
                        <li>
                            <div>
                                <img className="tips-img" src="src/assets/img/tips/image.png" alt="" />
                                <div className="tips-text">
                                    <h2>Setup bể cá</h2>
                                    <p>Khi setup bể cá, hãy chọn kích thước bể phù hợp, bố trí cây và đá một cách hài hòa và đảm bảo hệ thống lọc hoạt động hiệu quả.</p>
                                </div>
                            </div>
                            <div className="nextPage_btn"><a href="#"><p>Tìm hiểu<FontAwesomeIcon icon={faArrowRight} /></p></a></div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}