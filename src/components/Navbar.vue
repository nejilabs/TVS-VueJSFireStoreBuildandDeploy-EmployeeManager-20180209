<template>
  <nav class="nav-wrapper green">
    <div class="container">
      <ul class="left">
        <li>
          <router-link to="/">Employee Manager</router-link>
        </li>
      </ul>

      <ul class="right">
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><button class="btn black" v-on:click="logout">Logout</button></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  name: "navbar",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("You have been logged out");
          this.$router.push("/login");
        });
    },
  },
};
</script>