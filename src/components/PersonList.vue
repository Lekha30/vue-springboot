<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Persons List</h4>
            <ul>
                <li v-for="(person, index) in persons" :key="index">
                <div>
                    <label><strong>Name: </strong> </label> {{person.name}}
                </div>
                <div>
                    <label><strong>Phone Number: </strong> </label> {{person.phoneNumber}}
                </div>
                <div>
                    <label> <strong>Email:</strong> </label> {{person.emailAddress}}
                </div>
                 <div>
                    <h4>Books lent: </h4>
                    <ul>
                    <li v-for="(book, index) in person.books" :key="index">
                        <div>
                            <label><strong> Book Name: </strong> </label> {{book.title}}
                        </div> 
                    </li>
                    </ul>
                </div>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "person-details",
  data() {
    return {
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