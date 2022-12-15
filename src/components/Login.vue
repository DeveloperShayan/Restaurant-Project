<template>
<img class="logo" src="../assets/logo4.jpg"/>
<h1>Login</h1>
<div class="form">
    <input type="text" name="email" placeholder="Enter Email" v-model="email" />
    <input type="text" name="password" placeholder="Enter Password" v-model="password" />
    <button @click="LogIn()">Login</button>
    <br /><br />
    <router-link to="/signup">SignUp</router-link>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async LogIn() {
                let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
                if (result.status == 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    this.$router.push({
                        name: 'Home'
                    });
                }
            }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({
                name: 'Home'
            })
        }
    }
}
</script>
