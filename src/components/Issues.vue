<template>
  <div class="issues">
    <h1>Issues</h1>
    <ul>
      <li v-for="data in issues">
        <small>#{{ data.number }}</small>
        <a :href="'/#/issues/' + data.number">{{ data.title }}</a>
      </li>
    </ul>
    <div class="pagination">
      <span v-if="page.first">
        &lt;&lt;
        <a :href="'/#/issues?page=' + page.first">first</a>
      </span>
      <span v-if="page.prev">
        &lt;
        <a :href="'/#/issues?page=' + page.prev">prev</a>
      </span>
      <span v-if="page.next">
        <a :href="'/#/issues?page=' + page.next">next</a>
        &gt;
      </span>
      <span v-if="page.last">
        <a :href="'/#/issues?page=' + page.last">last</a>
        &gt;&gt;
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'issues',
  data () {
    return {
      issues: [],
      page: {
        // current : from route query
        // next, prev, last, first : from API
      }
    }
  },

  created: function () {
    // GET request
    this.fetchData()
  },

  watch: {
    '$route' (to, from) {
      this.fetchData() // fetch data when query params are changed
    }
  },

  methods: {
    fetchData: function () {
      const self = this
      this.page.current = this.$route.query && !isNaN(this.$route.query.page) ? Number(this.$route.query.page) : 1
      axios.get('https://api.github.com/repos/vuejs/vue/issues?page=' + this.page.current + '&per_page=10')
      .then(function (response) {
        self.issues = response.data
        // reset pagination
        self.page = {
          current: self.page.current
        }
        // resolve pagination
        response.headers.link.split(',').forEach(function (linkStr) {
          const relMatch = linkStr.match(/rel="(\w*)"/)
          let key
          if (relMatch && relMatch.length) {
            key = relMatch[1]
          }

          const pageMatch = linkStr.match(/page=(\d*)/)
          let value
          if (pageMatch && pageMatch.length) {
            value = pageMatch[1]
          }

          self.page[key] = Number(value)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  max-width: 600px;
  margin: auto;
}

li {
  margin: 10px;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

a {
  color: #42b983;
  text-decoration: none;
}

.pagination > span {
  margin: 10px;
  display: inline-block;
}
</style>
