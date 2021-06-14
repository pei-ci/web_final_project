import React from "react";
import {Paper,Container,Box} from '@material-ui/core'


      
      
class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = { itemData:[{id:'',title:'',author:'',content:'',photo:''}],
                        id:this.props.id,
                        localWidth:window.innerWidth-500,
                    };
        this.paperStyle={padding :20, height:'40vh', width:"85%" , margin:'20px'};            
        this.boxStyle={margin: '20px'};
        this.imgStyle={width: "77%"}
      }
    componentDidMount(){
        fetch("https://hellojdango.herokuapp.com/list?index="+this.state.id)
        .then((response) => response.json())
        .then((data) => 
            {
                this.setState({itemData:data,  
                })
            });
        
    }
    
    render(){
        return(
            
            <Container fixed align='center' width={this.state.localWidth} >
                <p style={this.boxStyle} className='h3'>{this.state.itemData[0].title}</p>
                <img style={this.imgStyle} alt={this.state.itemData[0].title} src={this.state.itemData[0].photo}/>
                <Container>
                    <Paper style={this.paperStyle} fixed>
                        
                        <Box align='left' >
                        <p className='h6'>作者:{this.state.itemData[0].author}</p>
                        
                        </Box>
                        <p className='h6'>{this.state.itemData[0].content}</p>
                    </Paper>
                </Container>
                
            </Container>
        )
    }
    
    
}
export default Content;