<template>
<img class="logo" src="../assets/logo4.jpg" />
<h1>Sign Up</h1>
<div class="form">
    <input type="text" name="name" placeholder="Enter Name" v-model="name" />
    <input type="text" name="email" placeholder="Enter Email" v-model="email" />
    <input type="text" name="password" placeholder="Enter Password" v-model="password" />
    <button @click="signUp()">Sign Up</button>
    <br /><br />
    <router-link to="/login">Sign In</router-link>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signUp() {
            console.warn("Sign Up", this.name, this.email, this.password)
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password

            });
            console.log(result)
            if (result.status == 201) {
                alert("User Registered");
                localStorage.setItem("user-info", JSON.stringify(result.data));
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

<style>

</style>
