import { useState } from "react";


export const Comment = ({comments}) => {

   //console.log(comments);

   const [show, setShow] = useState(false);

    const [side , setSide] = useState(150);

    const handleClick = () => {
        setShow(!show);

    if(!show){
        setSide(side+150)
    }else{
        setSide(side-150);
    }
    }

    let date = new Date();
    let x = date.getFullYear();

    let a = comments.timestamp.split(' ');

    x = x - a[3];
  
       if(comments.replies) {
               return  ( 
               <div style={{marginLeft:`${side}px`}}>
                   <p>
                   {comments.author}
                      {"  "+comments.points + "points  "}
                      {x + "years ago"}
                   </p>

                   <h2> {comments.body} </h2>
                  
                     
                   
                    <button onClick={() =>handleClick()}  >{show ? "Close" : "replies" }</button>
                    {show ? (
                        <>
                          {comments.replies.map((el) => {
                            return <Comment key={el.id} comments={el} />;
                          })}
                        </>
                      ) : null}
                
                </div>)
              }
            
              return (
                <div style={{marginLeft:`${side}px`}}>
                
                    
                <p>
                   {comments.author}
                   {"  "+comments.points + "points  "}
                      {x +"years ago"}
                   </p>

                   <h2> {comments.body} </h2>
                 
                </div>
              );
            };
    
