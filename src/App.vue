<template>
  <div id="nav">
    <router-link to="/red">Red</router-link> |
    <router-link to="/blue">Blue</router-link> |
    <router-link to="/yellow">Yellow</router-link> |
    <router-link to="/green">Green</router-link> |
  </div>
  <router-view />
  <div class="postoffice">
    <input type="number" name="pincode" id="pincode" v-model="pincode" />
    <button type="submit" @click="getPostOfficeData()">Submit</button>
  </div>
  <h3>
    {{ postofficedata }}
  </h3>
</template>

<script>
const axios = require("axios").default;

export default {
  data() {
    return {
      pincode: "",
      postofficedata: "",
    };
  },
  methods: {
    getPostOfficeData() {
      axios
        .get("https://api.postalpincode.in/pincode/" + this.pincode)
        .then(
          (response) => (this.postofficedata = response.data[0].PostOffice[0])
        );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
