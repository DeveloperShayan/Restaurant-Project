<template>
<Header />
<h1>Welcome Dear {{ name }}</h1>
<center>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th colspan="2">Action</th>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <th>{{ item.id }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.address }}</th>
            <th>{{ item.contact }}</th>
            <th>
                <router-link :to="'/update/'+item.id">EDIT</router-link>
            </th>
            <th><button v-on:click="DeleteRestaurant(item.id)">DELETE</button></th>
        </tr>
    </table>
</center>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'Home',
    components: {
        Header
    },
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    methods: {
        async DeleteRestaurant(id) {
            const result = await axios.delete("http://localhost:3000/restaurant/"+id);
            if(result.status==200)
            {
                this.LoadData();
            }
        },
        async LoadData() {
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name;
            const result = await axios.get("http://localhost:3000/restaurant");
            console.log(result);
            this.restaurants = result.data;
        }

    },
    mounted() {
        this.LoadData();
    }

}
</script>

<style scoped>

table {
    border: 3px solid black;
    width: 80%;
}

table th {
    border: 2px solid black;
}

button{
    width: 100%;
    background-color: red;
    color: white;
}
a{
    display: block;
    width: 100%;
    height: 25px;
    background: #4E9CAF;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    line-height: 25px;
}
</style>
