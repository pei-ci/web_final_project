import React from "react";
import { Avatar,Grid,Container,Paper } from "@material-ui/core";
const AuthorInfo = () =>{
    const boxStyle={
        margin:'10px'
    }
    const paperStyle={padding :0, height:'38vh', width:"98%", margin:'10px auto'}
    return(
        <Container>
            <Grid
            style={boxStyle}
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={3}
            >
                <Grid item
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      xs={10}
                >
                    <Paper style={boxStyle}>
                        <div style={boxStyle}>
                            <Grid
                                style={boxStyle}
                                container
                                justify="flex-start"
                                alignItems="center"
                                
                            >
                                <Avatar>金星人</Avatar>
                                <div style={boxStyle}>
                                    <p6>金星人</p6>
                                </div>
                            </Grid>
                            <h6><b>作者介紹:</b></h6>
                            <h6>出生於SARS，畢業於Covid-19的高中生，為一攝影新手，人物跟風景中較擅長拍攝風景照。</h6>
                            <h6><b>作者有話要說:</b></h6>
                            <h6>看到我下的標題就知道我尚未從中二畢業，凈說風花雪月之事，但我樂在其中，覺得《牧羊少年奇遇記》下的最好，結合《牧羊少年的奇幻之旅》跟《木偶奇遇記》，備案則是「羊」光正好，超讚的!而如果你看過春去秋來這一標題，我相信你和我是同路人!!!最後，誠心感謝您觀看我那未展覽的作品們，感謝有此機會彌補高二展覽被取消的遺憾</h6>
                        </div>
                    </Paper>
                
                </Grid>
                <Grid item
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      xs={10}
                >
                    <Paper style={paperStyle}>
                        <div style={boxStyle}>
                            <Grid
                                style={boxStyle}
                                container
                                direction="coiumn"
                                justify="flex-start"
                                alignItems="center"
                                xs={10}
                            >
                                <Avatar>作者</Avatar>
                                <div style={boxStyle}>
                                    <p6>網頁作者</p6>
                                </div>
                            </Grid>
                            <h6><b>作者介紹:</b></h6>
                            <h6>金星人的姐姐</h6>
                            <h6><b>作者沒有話要說:</b></h6>
                            <h6>...</h6>
                        </div>
                    </Paper>
                
                </Grid>
            
            </Grid>
        </Container>
    );
}
export default AuthorInfo;