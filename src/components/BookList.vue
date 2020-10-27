<template>
   <div class="list row">
        <div class="col-md-6">
            <h4>Books List</h4>
            <ul>
                <li v-for="(book, index) in books" :key="index">
                <div>
                    <label>Name: </label> {{book.title}}
                </div>
                <div>
                    <label>Author: </label> {{book.author}}
                </div>
                <div>
                    <label>Publication: </label> {{book.publication}}
                </div>
                 <div>
                    <label>ISBN: </label> {{book.isbn}}
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
  name: "books",
 data() {
    return {
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