<template>
  <div class="issues">
    <h1>Issues</h1>
    <ul>
      <li v-for="data in issues">
        <small>#{{ data.number }}</small>
        <a :href="'/#/issues/' + data.number">{{ data.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'issues',
  data () {
    return {
      issues: []
    }
  },

  created: function () {
    // GET request
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      const self = this
      axios.get('https://api.github.com/repos/angular/protractor/issues?page=1&per_page=10')
      .then(function (response) {
        self.issues = response.data
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
</style>
