import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date(2021,5,26,11);
curDate = curDate.getHours();
const cssStyle = { };
 let greeting = '';
 if (curDate >= 1 && curDate< 12){
   greeting = ' Good Morning';
   cssStyle.color = 'green';
 }
 else if(curDate >= 12 && curDate < 19)
 {
   greeting= 'Good Afternoon';
   cssStyle.color = 'pink';
 }
 else{
   greeting = 'Good Night';
   cssStyle.color = 'orange';
 }
ReactDOM.render(
  <>
  <div>
  <h1> Hello Ma'am,<span style ={cssStyle}> {greeting}</span></h1>
  </div>
  </>,
  document.getElementById('root')
);

