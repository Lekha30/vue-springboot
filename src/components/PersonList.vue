<template>
    <b-container>
        <h4>Persons List</h4>
            <b-table striped hover :items ="persons" :fields= "fields">
            </b-table>
            <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </b-container>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "person-details",
  data() {
    return {
      fields: [
          {
            key: 'name',
            sortable: true
          },
          {
            key: 'phoneNumber',
            sortable: false
          },
          {
            key: 'emailAddress',
            sortable: true,          
          },
          {
              key: 'books[0].title',
              label: 'Books Lent',
              sortable: false,
          }
      ],
      persons: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrievePersons() {
      http
        .get("/persons")
         .then(response => {
          this.persons = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrievePersons();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrievePersons();
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>