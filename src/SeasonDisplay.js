import React from 'react';

const getSeason = (lat, month) => {
    if(month>2 && month<9){
        return lat > 0 ? 'summer' : 'winter'
     } else {
         return lat > 0 ? 'winter' : 'summer'
     }


}

const seasonDisplay = (props) => {
    // console.log(props.position)
    const season= getSeason(props.position, new Date().getMonth());
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    
    return(
    <div>
    <h1>{text}</h1>
    </div>
    )

}
export default seasonDisplay;