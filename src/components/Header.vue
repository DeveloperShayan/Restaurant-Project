<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <a @click="LogOut">Logout</a>
</div>
</template>

<script>
export default {
    name: 'Header',
    methods:{
        LogOut()
        {
            localStorage.clear();
            this.$router.push({name : 'Login'});
        }
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
    border: 2px solid black;
}

.nav a {

    float: left;
    color: orange;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
    font-weight: bold;
}

.nav a:hover{
    background-color: white;
}

</style>
