import React from 'react';

const spinner= (props) => {
    return(
  <div className="ui active dimmer">
    {/*<div class="ui big text loader">{props.message || 'Loading...'}</div>*/}
    <div className="ui big text loader">{props.message}</div>

  </div>
    )

   
}
spinner.defaultProps={
    message: 'Loading'
};
export default spinner;