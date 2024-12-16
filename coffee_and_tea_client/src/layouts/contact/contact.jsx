/* eslint-disable no-unused-vars */
import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLeaf, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean'],
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image',
];

export const ContactLayout = () => {
    return (
        <>
            <div className="-contact-content">
                <div className="-w-contact-left">
                    <div className="-w-contact-h1">
                        <h1>
                            Nếu bạn cần trợ giúp?
                        </h1>
                    </div>
                    <p>Hãy liên hệ với chúng tôi để được tư vấn 24/7</p>
                    <p>Rất vui lòng được giúp đỡ bạn!</p>
                </div>

                <div className="-w-contact-right">
                    <h1>
                        Thông tin liên hệ
                    </h1>
                    <p>                        
                        <FontAwesomeIcon icon={faPhone} />
                        +84 354 337 115
                    </p>
                    <p>                        
                        <FontAwesomeIcon icon={faEnvelope} />
                        lethanhloi2202@gmail.com
                    </p>

                    <hr />

                    <div className="-w-contact-content-mail">
                        <h4>Gửi tin nhắn</h4>
                        <label htmlFor="">
                            Họ và tên
                            <input type="text" name="" id="" />
                        </label>
                        
                        <label htmlFor="">
                            Email
                            <input type="mail" name="" id="" />
                        </label>

                        <label htmlFor="">
                            Nội dung
                            <ReactQuill
                                className="custom-react-quill"
                                modules={modules}
                                formats={formats}
                            />
                        </label>

                        <button className="-w-send-button">Gửi tin</button>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <div className="-contact-info">
<h1>
    Thông tin liên hệ
</h1>
<p>                        
    <FontAwesomeIcon icon={faPhone} />
    +84 354 337 115
</p>
<p>                        
    <FontAwesomeIcon icon={faEnvelope} />
    lethanhloi2202@gmail.com
</p>

<div className="-w-contact-info">
    <label htmlFor="">
        Họ và tên
        <input type="text" name="" id="" />
    </label>
    
    <label htmlFor="">
        Email
        <input type="mail" name="" id="" />
    </label>
</div>

<label htmlFor="" className="">
    Nội dung
    <ReactQuill
        className="custom-react-quill"
        modules={modules}
        formats={formats}
    />
</label>

<button className="-w-send-button">Gửi</button>
</div> */}