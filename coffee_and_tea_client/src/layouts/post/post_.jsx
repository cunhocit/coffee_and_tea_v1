/* eslint-disable no-unused-vars */
import { faCaretRight, faClose, faLeaf, faList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"

export const PostLayout = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const filterRef = useRef(null);

    const handleOpenSidebar = () => setOpenSideBar(prev => !prev);
    
    const handleClickOutside = (event) => {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            handleOpenSidebar(); 
        }
    };

    useEffect(() => {
        if (openSideBar) {
            document.addEventListener("mousedown", handleClickOutside);
        }else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openSideBar])
    
    return (
        <>
            <div className="wrap-bg-post-layout" ref={filterRef}>
                <div className="wrap-post-layout" ref={filterRef}>
                    <div className={`wrap-post-sidebar ${openSideBar ? 'open' : ''}`} ref={filterRef}>
                        <h3>
                            Danh sách bài viết
                            <FontAwesomeIcon icon={faClose} onClick={handleOpenSidebar} />
                        </h3>
                        <hr />
                        <ul>
                            <li>
                                <div><FontAwesomeIcon icon={faLeaf} /></div>
                                <p>Hướng dẫn thả cá khi mới mua về</p>
                            </li>
                            <li>
                                <div><FontAwesomeIcon icon={faLeaf} /></div>
                                <p>Hướng dẫn thay nước cho cá</p>
                            </li>
                            <li>
                                <div><FontAwesomeIcon icon={faLeaf} /></div>
                                <p>Hướng dẫn cắm cây thủy sinh</p>
                            </li>
                            <li>
                                <div><FontAwesomeIcon icon={faLeaf} /></div>
                                <p>Châm vi sinh đúng cách</p>
                            </li>
                            <li>
                                <div><FontAwesomeIcon icon={faLeaf} /></div>
                                <p>Cách trị nấm ở cá</p>
                            </li>
                        </ul>
                    </div>

                    <div className="wrap-post-content">
                        <div className="-post-header">
                            <FontAwesomeIcon icon={faList} onClick={handleOpenSidebar}/>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <h3>Hướng dẫn trị nấm ở cá</h3>
                        </div>
                        <hr />
                        <div className="-post-content">
                            <h1>Nguyên Nhân Gây Ra Bệnh Nấm Trắng Ở Cá</h1>
                            <br />
                            <h4>Môi Trường Nuôi Cá Không Đảm Bảo</h4>
                            <br />
                            Môi trường nước ô nhiễm hoặc không được vệ sinh định kỳ là một trong những nguyên nhân chính dẫn đến bệnh nấm trắng. Nước bẩn, chứa nhiều chất hữu cơ phân hủy, là môi trường lý tưởng cho vi khuẩn và nấm phát triển. Bên cạnh đó, việc thay nước không đúng cách hoặc không thường xuyên cũng góp phần làm suy yếu hệ miễn dịch của cá, khiến chúng dễ bị nhiễm bệnh.
                            
                            <br /><br />
                            <h4>Chất Lượng Thức Ăn Kém</h4>
                            <br />
                    Thức ăn không đảm bảo chất lượng, chứa nhiều vi khuẩn và nấm mốc, cũng là một yếu tố gây bệnh. Thức ăn bị hỏng hoặc không được bảo quản đúng cách có thể chứa nhiều mầm bệnh, khi cá ăn phải sẽ dễ bị nhiễm nấm.
                    <br /><br />
                            <h4>Căng Thẳng Ở Cá</h4>
                            <br />

                    Căng thẳng do môi trường sống không phù hợp, như nước quá lạnh hoặc quá nóng, mật độ nuôi quá dày đặc, hay sự thay đổi đột ngột của môi trường, cũng làm suy yếu hệ miễn dịch của cá. Khi cá bị căng thẳng, chúng dễ bị các tác nhân gây bệnh tấn công, bao gồm cả nấm trắng.
                    <br /><br />
                            <h4>Cá Mới Nhập Về Bể</h4>
                            <br />

                    Khi bạn thêm cá mới vào bể mà không cách ly và kiểm tra kỹ lưỡng, có thể dẫn đến việc mang theo mầm bệnh vào bể cá hiện tại. Cá mới, đặc biệt nếu không được nuôi dưỡng và chăm sóc tốt trước đó, có thể là nguồn lây nhiễm bệnh nấm trắng.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}