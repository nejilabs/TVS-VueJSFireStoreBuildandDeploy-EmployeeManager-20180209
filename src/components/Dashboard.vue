<template>
  <div id="dashboard">
    <h3>Dashboard</h3>

    <!-- START: List Data-->
    <ul class="collection with-header">
      <li class="collection-header">Employees</li>
      <li
        class="collection-item"
        v-for="employee in employees"
        v-bind:key="employee.id"
      >
        <div class="chip">{{ employee.dept }}</div>
        {{ employee.employee_id }}:{{ employee.name }}

        <router-link
          class="secondary-content"
          v-bind:to="{
            name: 'view-employee',
            params: { employee_id: employee.employee_id },
          }"
          ><i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>
    <!-- END: List Data-->

    <!--START: Floating Button-->
    <div class="fixed-action-btn">
      <router-link to="/new_employee" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
    <!--END: Floating Button-->
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      employees: [],
    };
  },

  created() {
    db.collection("employees")
      .orderBy("dept")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            employee_id: doc.data().employee_id,
            name: doc.data().name,
            dept: doc.data().dept,
            position: doc.data().position,
          };
          this.employees.push(data);
        });
      });
  },
};
</script>

<style>
</style>