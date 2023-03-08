<template>
       <div class="posts ms-3" v-for="p in post" :key="p.id">
         <h2>{{ p.id }} - {{ p.title }}</h2>
         <p>{{ p.body }}</p>
       </div>
</template>
<script>
export default{
       name:'posts',
       data() {
          return {
           post:{}
          }
      },
     methods: {
         getposts(){
           fetch('https://jsonplaceholder.typicode.com/posts')
           .then(Response => Response.json())
           .then (data => this.post=data) },
           },
      
     created() {
          this.getposts()
       
       },
    } 
</script>

<style scoped>

 .posts{
    color: blue;
 }
</style>