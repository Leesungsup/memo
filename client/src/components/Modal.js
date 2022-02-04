import React,{useState,useEffect} from 'react';
import './Modal.scss';
import Axios from 'axios';

function Modal(props) {
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [author, setauthor] = useState("");
    const handleChangeTitle = (e) => {
        settitle(e.currentTarget.value)
    }
    const handleChangeContent = (e) => {
        setcontent(e.currentTarget.value)
    }
    const handleChangeAuthor = (e) => {
        setauthor(e.currentTarget.value)
    }
    const handleClick=(e)=>{
        e.preventDefault();
        let variable={
            title:title,
            author:author,
            content:content
        }
        Axios.post('/memo',variable)
        .then(response=>{
            if(response.data.success){
                console.log('성공적으로 업로드를 했습니다.')
            }else{
                alert("비디오 업로드에 실패 했습니다.")
            }
        })
    }
    return (
        <React.Fragment> { 
            props.isOpen ? 
            <React.Fragment> 
                <div className="Modal-overlay" onClick={props.close} /> 
                <div className="Modal"> 
                    <h1 className="title"> 메모를 기록하세요! </h1> 
                    <div className="content"> 
                    <h4>
                        <input type='text' placeholder='아이디를 입력하세요' name='author' value={author} onChange={handleChangeAuthor}></input>
                    </h4> <br/> 
                    <h4>
                        <input type='text' placeholder='제목을 입력하세요' name='title' value={title} onChange={handleChangeTitle}></input>
                    </h4> <br/> 
                    <textarea name='content' value={content} onChange={handleChangeContent}></textarea> 
                </div> 
                <div className="button-wrap"> 
                    <button onClick={handleClick} >
                        <p>메모 추가하기</p>
                    </button> 
                </div> 
                </div> 
            </React.Fragment> : null } 
        </React.Fragment>
  )
}

export default Modal;
