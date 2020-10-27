<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Persons List</h4>
            <ul>
                <li v-for="(person, index) in persons" :key="index">
                <div>
                    <label>Name: </label> {{person.name}}
                </div>
                <div>
                    <label>Phone Number: </label> {{person.phoneNumber}}
                </div>
                <div>
                    <label>Email: </label> {{person.emailAddress}}
                </div>
                 <div>
                    <label>Books lent: </label>
                    <ul>
                    <li v-for="(book, index) in person.books" :key="index">
                        <div>
                            <label>Book Name: </label> {{book.title}}
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
  name: "person",
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