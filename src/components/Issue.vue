<template>
  <div class="issues">
    <h1>
      <small>Issue #{{ issue.number }}</small>
      {{ issue.title }}
    </h1>
    <p>
      {{ issue.body }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'issues',
  data () {
    return {
      issue: {
        number: 1234,
        title: 'issue title',
        body: 'aldjal;orituepotuwpoeirutnak. akjsfhakjsfhali4tyui'
      }
    }
  },
  created: () => {
    // GET request

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
