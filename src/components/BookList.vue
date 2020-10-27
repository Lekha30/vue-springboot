<template>
  <b-container>
    <h4>Persons List</h4>
        <b-table striped hover :items ="books" :fields= "fields">
        </b-table>
        <div class="col-md-6">
        <router-view @refreshData="refreshList"></router-view>
    </div>
  </b-container>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "book",
 data() {
    return {
      fields: [
        {
          key: 'title',
          sortable: true,
        },
        {
          key: 'author',
          sortable: true,
        },
        {
          key: 'isbn',
          sortable: false,
        },
        {
          key: 'publication',
          sortable: true,
        }
      ],
      books: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveBooks() {
      http
        .get("/books")
        .then(response => {
          this.books = response.data; // JSON are parsed automatically.
          console.log("books::", response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveBooks();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveBooks();
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