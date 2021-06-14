import React from "react";
import {Link} from 'react-router-dom';
import{Button} from '@material-ui/core';
const buttonStyle={backgroundColor:'#d4e3ec'}
const buttonStyle2={backgroundColor:'#e5ead7'}
const Home = () =>{
    const boxStyle={
        marginTop: '100px'
    };
    
    
    return(
        <div>
            <div align='center' style={boxStyle} >
                <h1>
                    Share all 
                </h1>
                <p>與大家分享作品與圖片</p>
                <tr>
                    <td>
                        <Link className="nav-link" to="/list">
                            <Button style={buttonStyle2}>
                                see
                            </Button>
                        </Link>
                    </td>
                    <td>
                        <Link className="nav-link" to="/Post">
                            <Button style={buttonStyle}>
                                post
                            </Button>
                        </Link>
                    </td>
                </tr>
            </div>
        </div>
        
    );
}
export default Home;