<template>
  <div class="issues" v-if="issue">
    <small>Issue #{{ issue.number }}</small>
    <h2>{{ issue.title }}</h2>
    <pre>
      {{ issue.body }}
    </pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'issues',
  data () {
    return {
      issue: null
    }
  },
  created: function () {
    this.fetchData(this.$route.params.number)
  },
  methods: {
    fetchData: function (number) {
      const self = this
      axios.get('https://api.github.com/repos/angular/protractor/issues/' + number)
      .then(function (response) {
        self.issue = response.data
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
  display: inline-block;
}

a {
  color: #42b983;
  text-decoration: none;
}

pre {
  margin: 0 30px;
  text-align: left;
  font-size: 12px;
  background-color: #eee;
  padding: 20px;
  word-break: break-all;
  white-space: pre-line;
}
</style>
