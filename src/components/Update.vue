<template>
    <Header/>
    <h1>Update Restaurant</h1>
    <form class="form">
        <input type="text" name="name" placeholder="Enter Restaurant Name" v-model="this.restaurant.name">
        <input type="text" name="address" placeholder="Enter Restaurant Address" v-model="this.restaurant.address">
        <input type="text" name="contact" placeholder="Enter Restaurant Contact" v-model="this.restaurant.contact">
        <button type="button" v-on:click="UpdateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name : 'Update',
    components:{
        Header
    },
    data()
    {
        return {
            restaurant:{
                name : "",
                address : "",
                contact : ""
            }
        }
    },
    methods:{
      async UpdateRestaurant()
        {
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            console.log(result.data)

            if(result.status==200)
            {
                this.$router.push({name:"Home"});
            }
         }
    },
   async mounted() {
        const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
        this.restaurant=result.data;
    },

}
</script>