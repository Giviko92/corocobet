<template>
  <div class="main-div">
       <div 
         class="users" 
         v-for="user in users" 
         :key="user.id"
       >
         <button
           v-text="user.name" 
           class="user-btn" 
           @click="getusers,user.is_active=!user.is_active" 
         ></button>
         <div v-if="user.is_active">
           <div
             v-text="user.id"
           ></div>
           <div
             v-text="user.username"
           ></div>
           <div
             v-text="user.email"
           ></div>
           <div
             v-text="user.address"
           ></div>
           <div
             v-text="user.phone"
           ></div>
           <div
             v-text="user.website"
           ></div>
           <div
             v-text="user.company"
           ></div>
         </div>
       </div>
    </div>
    <div>
        <router-link
            to="/posts"
            custom
            v-slot="{ navigate }"
            >
            <button
                class="ps-btn"
                @click="navigate"
                role="link"
                >
                პოსტები
            </button>
        </router-link>
    </div>
</template>
   <script>
   export default{
       name:'UsersPage',
       data() {
          return {
           show:false,
           users:[],
          }
      },
     methods: {
         getusers(){
           fetch('https://jsonplaceholder.typicode.com/users')
           .then(Response => Response.json())
           .then (data => {
             data.map((user)=>{
               user.is_active = false
               this.users.push(user)
             })
           })
        }
      }, 
     created() {
          this.getusers()
       },
   }
   </script>

<style scoped>
.user-btn{
    border-radius: 12px;
    border: none;
    background-color: orange;
    height: 50px;
    width: 100px;
    margin-left: 20px;
    font-weight: bold;
    margin-top: 20px;
}
.users{
    color: blueviolet;
    font-weight: bold;
}
.ps-btn{
    border-radius: 14px;
    border: none;
    background-color: blueviolet;
    height: 30px;
    width: 200px;
    margin-top: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

</style>