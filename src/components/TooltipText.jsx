import React, {useState} from "react";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { Tooltip } from 'react-tippy';

function TooltipText(props) {

  
  console.log(props.item)
  
  // console.log(searchedShow)
  return (
    <Tooltip
    title={props.item.tvShows.map((tvShow) => ` ${tvShow} `)}
    position="bottom"
    trigger="mouseenter"
    animation="fade"
    arrow={true}
  >
    <PiTelevisionSimpleBold style={{marginLeft:'5px', cursor:'pointer'}} />
  </Tooltip>
  )
}

export default TooltipText