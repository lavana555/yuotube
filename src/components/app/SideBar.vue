<template>
  <ul class="sidenav app-sidenav " :class="{open:value}">
<!--    <li>-->
<!--      <a href="#" class="waves-effect waves-orange pointer">Счет</a>-->
<!--    </li>-->
<!--    <li>-->
    <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        :to="link.url"
        active-class="active"
        :exact="link.exact"
       ><a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a></router-link>
<!--      <a href="#" class="waves-effect waves-orange pointer">История</a>-->
<!--    </li>-->
<!--    <li>-->
<!--      <a href="#" class="waves-effect waves-orange pointer">Планирование</a>-->
<!--    </li>-->
<!--    <li>-->
<!--      <a href="#" class="waves-effect waves-orange pointer">Новая запись</a>-->
<!--    </li>-->
<!--    <li>-->
<!--      <a href="#" class="waves-effect waves-orange pointer">Категории</a>-->
<!--    </li>-->
  </ul>
</template>

<script>
export default {
  props:['value'],
  name: "SideBar",
  data:()=>({

    links:[
      {title:'Cчет',url:'/',exact:true},
      {title:'История',url:'/history'},
      {title:'Планирование',url:'/planing'},
      {title:'Новая запись',url:'/record'},
      {title:'Категории',url:'/categories'},
    ]
  })
}
</script>

<style scoped>

</style>
