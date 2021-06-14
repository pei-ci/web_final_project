import React from "react";
import ListItem from '../component/list_item'
import { Grid ,Container} from "@material-ui/core";
const List = ({postData}) =>{
    return(    
        <Container fixed maxWidth='sm' color="primary">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="left"
            >
                {postData.map((itemData)=>(
                    <tr key={itemData.id} >
                    <ListItem itemData={itemData}/>
                    </tr>
                ))}
            </Grid>
        </Container>
    );
}
export default List;