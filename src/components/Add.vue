<template>
    <Header/>
    <h1>Add Restaurant</h1>
    <form class="form">
        <input type="text" name="name" placeholder="Enter Restaurant Name" v-model="this.restaurant.name">
        <input type="text" name="address" placeholder="Enter Restaurant Address" v-model="this.restaurant.address">
        <input type="text" name="contact" placeholder="Enter Restaurant Contact" v-model="this.restaurant.contact">
        <button type="button" v-on:click="AddRestaurant">Add Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name : 'Add',
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
        async AddRestaurant()
        {
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });

            if(result.status==201)
            {
                this.$router.push({name:"Home"});
            }
        }
    }

}
</script>