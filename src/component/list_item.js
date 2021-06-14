import React from 'react';
import {Link,} from 'react-router-dom';
import {Button} from '@material-ui/core';

const ListItem =({itemData})=>{
    const buttonStyle={backgroundColor:'#d4e3ec'}

    return(
        <div>
            <Link className="nav-link" to={"/content/"+itemData.id} >
                <Button fullWidth   color="primary" style={buttonStyle}>
                    {itemData.title}
                </Button>
            </Link>
        </div>
    )
    
}
export default ListItem;

