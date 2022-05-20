import React from 'react';
import {Li, IconHeart, IconChat, IconSocial } from "./style";


export default function Feeds(props) {
  return (
   <Li>
       <div className="infoUserPost">
           <div className="imgUserPost"></div>
            <div className="nameAndHour">
                <strong>{props.name}</strong>
                <p>{props.time}</p>
            </div>
        </div>
        <p>{props.public}</p>
        <div className="actionBtnPost">
            <button type="button" class="filesPost like"><IconHeart></IconHeart >Curtir</button>
            <button type="button" class="filesPost comment"><IconChat></IconChat >Comentar</button>
            <button type="button" class="filesPost share"><IconSocial></IconSocial >Compartilhar</button>
        </div>
       
   </Li>
  )}
