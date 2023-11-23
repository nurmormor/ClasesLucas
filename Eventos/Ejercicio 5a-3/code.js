"use strict"

document.querySelector("#emoji p").addEventListener('click', e=>{
    e.target.innerText = '🙁';
  });
  document.querySelector("#emoji p").addEventListener('dblclick', e=>{
    e.target.innerText = '😒';
  });
  document.querySelector("#emoji p").addEventListener('contextmenu', e=>{
    e.target.innerText = '😀';
    e.preventDefault();
  });