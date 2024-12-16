/* eslint-disable no-unused-vars */
import { faBook, faCaretRight, faHeader, faList, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import ReactQuill from "react-quill"
import { useGetPosts } from "../../hooks/usePost"
import { addNewPostAPI, deletePostAPI, updatePostAPI } from "../../app/api/postApi"

export const PostLayout = () => {
    const listRef = useRef(null);
    const [post, setPost] = useState();
    const [postStore, setPostStore] = useState();
    const [quillKey, setQuillKey] = useState(0); 
    const { posts, fetchData, isLoading} = useGetPosts();
    const [openList, setOpenList] = useState(false);

    const handleOpenList = () => setOpenList(prev => !prev);

    useEffect(() => {
        setPostStore(posts);
    }, [posts]);

    useEffect(() => {
        if (openList) {
            document.addEventListener("mousedown", handleOpenList);
        }else {
            document.removeEventListener("mousedown", handleOpenList);
        }

        return () => {
            document.removeEventListener("mousedown", handleOpenList);
        };
    }, [openList])

    if (isLoading) return <div>Đang tải</div>

    const handleNewPost = () => {
        setPost()
        setQuillKey(prevKey => prevKey + 1);
    }

    const handleClick = (header) => {
        const temp = postStore?.find(p => p.header === header);
        setPost({id: temp.id, header: temp.header, content: temp.content });
    }

    const handleAddPost = async () => {
        if (!post.header || !post.content || !post.id) {
            alert('Vui lòng không để trống nội dung.')
            return;
        }
        await addNewPostAPI(post);
        fetchData();
        setPost()
    }

    const handleUpdatePost = async () => {
        if (!post.header || !post.content || !post.id) {
            alert('Vui lòng không để trống nội dung.')
            return;
        }
        await updatePostAPI(post);
        fetchData();
    }

    const handleDeletePost = async () => {
        if (!post.header || !post.content || !post.id) {
            alert('Vui lòng không để trống nội dung.')
            return;
        }
        if (window.confirm("Bạn muốn xóa bài viết này?")) {
            await deletePostAPI(post);
            handleNewPost();
            fetchData();
        }
    }

    return (
        <>
            <div className="wrap-products">
                <div className="title_box">
                    <FontAwesomeIcon icon={faBook} />
                    <h2 className="products-title">Bài viết</h2>
                </div>

                <div className="wrap-post">
                    <div className="-w-post-left">
                        <h3>
                            <FontAwesomeIcon icon={faHeader} />
                            <p>Tiêu đề</p>
                            <input type="text" 
                                value={post?.header || ''}
                                onChange={(e) => setPost({...post, header: e.target.value})}
                            />
                        </h3>
                        
                        <h3>
                            <FontAwesomeIcon icon={faPaperPlane} />
                            Nội dung
                        </h3>

                        <div className="-w-post-content">
                            <ReactQuill
                                key={quillKey}
                                value={post?.content || ''}
                                onChange={(value) => setPost({ ...post, content: value })}
                            />
                        </div>

                        <div className="-w-post-button">
                            <button onClick={handleNewPost}>+ Bài mới</button>
                            <button onClick={handleAddPost}>Thêm mới</button>
                            <button onClick={handleUpdatePost}>Cập nhật</button>
                            <button onClick={handleDeletePost}>Xóa</button>
                        </div>
                    </div>

                    <div className={`-w-post-right ${openList ? 'open' : ''}`} ref={listRef}>
                        <h3>
                            <div><FontAwesomeIcon icon={faList} /></div>
                            <p>Danh sách</p>
                        </h3>

                        <div className="-w-post-list">
                            {posts.map(p => (
                                <div key={p.header} className="-w-post-sidebar-item" 
                                    onClick={() => handleClick(p.header)}
                                >
                                    <div><FontAwesomeIcon icon={faCaretRight} size="sm" /></div>
                                    <p>{p.header}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="-sidebar-icon" onClick={handleOpenList} style={{right: openList ? '-100%' : '0'}}>
                        <FontAwesomeIcon icon={faList} />
                    </div>
                </div>
            </div>
        </>
    )
}