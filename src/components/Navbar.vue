<template>
  <nav class="nav-wrapper green">
    <div class="container">
      <ul class="left">
        <li>
          <router-link to="/">Employee Manager</router-link>
        </li>
      </ul>

      <ul class="right">
        <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
        <li v-if="isLoggedIn">
          <router-link to="/"
            ><span class="email btn grey">{{ currentUser }}</span></router-link
          >
        </li>
        <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="!isLoggedIn">
          <router-link to="/register">Register</router-link>
        </li>
        <li v-if="isLoggedIn">
          <button class="btn black" v-on:click="logout">Logout</button>
        </li>
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

  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("You have been logged out");
          this.$router.go({ path: this.$router.path });
        });
    },
  },
};
</script>

<style>
.email {
  padding-right: 10px;
}
</style>