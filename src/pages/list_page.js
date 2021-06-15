import React from "react";
import ListItem from '../component/list_item'
import { Grid ,Container} from "@material-ui/core";
class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = { postData:[{id:'',title:'',author:'',content:'',photo:''}],
                       
                        };
      }
      componentDidMount(){
        fetch("https://hellojdango.herokuapp.com/list")
        .then((response) => response.json())
        .then((data) => 
            {
                //console.log(data)
                this.setState({postData:data})
            });
      }
    render(){
        return(    
            <Container fixed maxWidth='sm' >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="left"
                >
                    {this.state.postData.map((itemData)=>(
                        <tr key={itemData.id} >
                        <ListItem itemData={itemData}/>
                        </tr>
                    ))}
                </Grid>
            </Container>
        );
    }
    
}
export default List;