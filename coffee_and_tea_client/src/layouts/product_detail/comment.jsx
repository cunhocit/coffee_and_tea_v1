import { faComment } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Comment = () => {
    return (
        <>
            <div className="wrap-comment">
                <div className="-title-comment">
                    <FontAwesomeIcon icon={faComment} />
                    <p>Đánh giá sản phẩm</p>
                </div>
                <hr />
                <div className="-w-your-comment">
                    <div>
                        <textarea type="text" />
                        <button>Gửi</button>
                    </div>
                </div>
                <div className="-around-comment">
                    <div className="-wrap-object-comment">
                        <img src="src\assets\img\slide_image\image4.png" alt="" />
                        <div>
                            <h3>Name</h3>
                            <p className="-time-comment">12/01/2024</p>
                            <p className="-comment-content">Cá đẹp, giống như hình</p>
                        </div>
                    </div>
                    <div className="-wrap-object-comment">
                        <img src="src\assets\img\slide_image\image4.png" alt="" />
                        <div>
                            <h3>Name</h3>
                            <p className="-time-comment">12/01/2024</p>
                            <p className="-comment-content">Cá đẹp, giống như hình</p>
                        </div>
                    </div>
                    <div className="-wrap-object-comment">
                        <img src="src\assets\img\slide_image\image4.png" alt="" />
                        <div>
                            <h3>Name</h3>
                            <p className="-time-comment">12/01/2024</p>
                            <p className="-comment-content">Cá đẹp, giống như hình</p>
                        </div>
                    </div>
                    <div className="-wrap-object-comment">
                        <img src="src\assets\img\slide_image\image4.png" alt="" />
                        <div>
                            <h3>Name</h3>
                            <p className="-time-comment">12/01/2024</p>
                            <p className="-comment-content">Cá đẹp, giống như hình</p>
                        </div>
                    </div>
                    <div className="-wrap-object-comment">
                        <img src="src\assets\img\slide_image\image4.png" alt="" />
                        <div>
                            <h3>Name</h3>
                            <p className="-time-comment">12/01/2024</p>
                            <p className="-comment-content">Cá đẹp, giống như hình</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}