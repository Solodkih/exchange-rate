<template>
    <div class="startView">
      <h2 class="startView__title">Что-то пошло не так</h2>
      <p class="startView__text">
        Попробуйте перезагрузить страницу или обратитесь к сервису позже. 
      </p>
    </div>
  </template>
  
  <script setup></script>
  
  <style>
  .startView {
    padding: 20px;
    color: #A0000F;
    background: #8db42d;
    height: 100%;
  }
  .startView__title {
    padding-left: 100px;
    text-align: left;
    font-size: 30px;
  }
  .startView__text {
    font-size: 20px;
    text-indent: 10px;
    padding: 10px;
  }
  </style>
  