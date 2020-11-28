<template>
  <div id="new-employee">
    <h3>New Employee</h3>
    <div class="row">
      <form @submit.prevent="saveEmployee" class="col s12">
        <!-- Employee ID# -->
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee_id" required />
            <label>Employee ID#</label>
          </div>
        </div>
        <!-- Employee ID# -->

        <!-- Name -->
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
            <label>Name</label>
          </div>
        </div>
        <!-- Name -->

        <!-- Dept -->
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="dept" required />
            <label>Department</label>
          </div>
        </div>
        <!-- Dept -->

        <!-- Position -->
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
            <label>Position</label>
          </div>
        </div>
        <!-- Position -->
        <router-link to="/" class="btn grey">Back</router-link>
        <button class="btn" type="submit">Add New Employee</button>
        <!-- Buttons -->

        <!-- Buttons -->
      </form>
    </div>
  </div>
</template>

<script>
// Firebase
import db from "./firebaseInit";

export default {
  name: "new-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null,
    };
  },

  methods: {
    saveEmployee() {
      db.collection("employees")
        .add({
          employee_id: this.employee_id,
          name: this.name,
          dept: this.dept,
          position: this.position,
        })
        .then((docRef) => this.$router.push("/"))
        .catch((error) => console.log(err));
    },
  },
};
</script>

<style>
</style>