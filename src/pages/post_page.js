import React from "react";
import { TextField,Grid,Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Post = () =>{
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [content,setContent]=useState('')
    const [photo,setPhoto]=useState('')
    const titleHandler = (event) => {
        setTitle(event.target.value);
    };
    const authorHandler = (event) => {
        //console.log(event.target.value);
        setAuthor(event.target.value);
    };
    const contentHandler = (event) => {
        //console.log(event.target.value);
        setContent(event.target.value);
    };
    const photoHandler = (event) => {
        //console.log(event.target.value);
        setPhoto(event.target.value);
    }; 
    var history = useHistory();
    const redirect=(id)=>{
        history.push("/content/"+id)
    }
  
    const summit=()=>{
        let url="https://hellojdango.herokuapp.com/add?title="+title+"&author="+author+"&content="+content+"&photo="+photo
        fetch(url)
        .then(response => response.json())
        .then(result=>{
            redirect(result.data)
        });
            
    };
    const textfieldStyle={margin:'5px auto'}
    const paperStyle={padding :20, width:400, margin:'20px auto'}
    const buttonStyle={backgroundColor:'#d4e3ec'}
    return(
        <div style={paperStyle}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
        <h2>POST</h2>
        <TextField 
            onChange={titleHandler}
            style={textfieldStyle} id="title" label="標題"
            fullWidth
            required
        />
        <TextField 
            onChange={authorHandler}
            style={textfieldStyle}
            id="author"
            label="作者"
            multiline
            fullWidth
            required
            
        />
        <TextField 
            onChange={contentHandler}
            style={textfieldStyle}
            id="content"
            label="內文"
            multiline
            fullWidth
            required
            
        />
        
        <TextField 
            onChange={photoHandler}
            style={textfieldStyle} id="standard-basic" label="圖片網址"
            placeholder='放入圖片網址' align='center' 
            fullWidth
            required
        />
        
        </Grid>
        <a href='https://medium.com/cubemail88/%E5%BB%BA%E7%AB%8Bgithub-google-driver-%E5%9C%96%E5%BA%8A%E4%B8%A6%E9%A1%AF%E7%A4%BA%E7%B6%B2%E9%A0%81%E4%B8%8A-c92ecb897781'>建立圖床與取得圖片網址(參考網站)</a>
        <Button onClick={summit} style={buttonStyle} align='center' fullWidth>張貼
        
        </Button>
        </div>
    );
}
export default Post;