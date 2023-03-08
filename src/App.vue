<template>
    <router-view />
    
    <div>
       <router-link
            to="/users"
            custom
            v-slot="{ navigate }"
            >
        <button
            class="main"
            @click="navigate"
            role="link"
        >
            მომხმარებლები
        </button>
        </router-link>
    </div>
   </template>
   <script>
   export default{
       name:'App',
   }
   </script>

<style>
.main{
    width: 200px;
    height:50px;
    border-radius: 12px;
    background-color:darkorange ;
    font-weight: bold;
    border: none;
}
</style>