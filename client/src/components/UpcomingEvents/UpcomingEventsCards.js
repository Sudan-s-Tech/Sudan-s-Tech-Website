 import React from "react";
 import Button from "@material-ui/core/Button";
import "./UpcomingEvents.css";
import {useHistory} from 'react-router-dom'

 function UpcomingEventsCards(props){
     let history= useHistory()
    return(
        <div
            className="MediaItem s-vflex state-"
            id="event-card"
            style={{ textAlign: "left", height:'400px' }}
        >
            <div className="s-vflex-outer">
                <div class="s-vflex-inner" style={{overflow:'hidden',height:'300px'}}>
                    <h3 class="title">
                        {/* <a href="/courses/production-vue/"> */}
                            {props.title}
                            {/* </a> */}
                    </h3>

                    <div class="description">{props.date}</div>
                    <div class="meta">
                        <strong class="captioned">{props.desc}</strong>
                    </div>
                </div>
                <div class="cta" style={{ marginTop: "2em",marginBottom:'1rem',height:'50px',overflow:'hidden' }}>
                    <Button onClick={()=>{
                         history.push(`/register/${props.title}`)
                    }}
                        variant="outlined"
                        
                        // style={{ margin: "1px 10px" }}
                        style={{
                            borderRadius: "15px",
                            backgroundColor: "#7289DA",
                            width:'180px'
                        }}
                    >
                        <span style={{color:'#fff'}}> See More</span> 
                    </Button>
                </div>
            </div>
            <div className="thumbnail-wrap">
                <a class="thumbnail">
                    <img
                        id="blur_img"
                        class="lazyload lazyloaded"
                        src={props.imgurl}
                        data-src={props.imgurl}
                        alt="Production-Grade Vue.js"
                        data-loaded="true"
                    />
                </a>
            </div>
        </div>
    );
}


export default UpcomingEventsCards;


