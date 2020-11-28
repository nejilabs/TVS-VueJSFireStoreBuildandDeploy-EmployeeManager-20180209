<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>
    <div class="row">
      <form @submit.prevent="updateEmployee" class="col s12">
        <!-- Employee ID# -->
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee_id" disabled />
          </div>
        </div>
        <!-- Employee ID# -->

        <!-- Name -->
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
          </div>
        </div>
        <!-- Name -->

        <!-- Dept -->
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="dept" required />
          </div>
        </div>
        <!-- Dept -->

        <!-- Position -->
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
          </div>
        </div>
        <!-- Position -->
        <router-link to="/" class="btn grey">Back</router-link>
        <button class="btn" type="submit">Update Employee</button>
        <!-- Buttons -->

        <!-- Buttons -->
      </form>
    </div>
  </div>
</template>

<script>
// Import Database
import db from "./firebaseInit";
export default {
  name: "edit-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null,
    };
  },

  beforeRouteEnter(to, from, next) {
    db.collection("employees")
      .where("employee_id", "==", to.params.employee_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            vm.employee_id = doc.data().employee_id;
            vm.name = doc.data().name;
            vm.dept = doc.data().dept;
            vm.position = doc.data().position;
          });
        });
      });
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      db.collection("employees")
        .where("employee_id", "==", this.$route.params.employee_id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employee_id = doc.data().employee_id;
            this.name = doc.data().name;
            this.dept = doc.data().dept;
            this.position = doc.data().position;
          });
        });
    },

    updateEmployee() {
      //SImilar to fetch data since were also getting data for updating the employee
      db.collection("employees")
        .where("employee_id", "==", this.$route.params.employee_id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            //but its different in here
            doc.ref
              .update({
                employee_id: this.employee_id,
                name: this.name,
                dept: this.dept,
                position: this.position,
              })
              .then(() =>
                this.$router.push({
                  name: "view-employee",
                  params: { employee_id: this.employee_id },
                })
              );
          });
        });
    },
  },
};
</script>

<style>
</style>