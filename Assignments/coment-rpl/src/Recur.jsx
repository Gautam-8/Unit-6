import React from 'react';
import { sms } from "./Sms.js"
import {Comment} from './Comment';


export const Recur = () => {
  return (
    <div>
          <Comment key = {sms.id}  comments = {sms} />
    </div>
  )
}