<template>
  <main class="container">
    <div class="row py-3">
      <div class="col-10"></div>
      <div class="col-2">
        <select name="" id="" class="form-control">
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h2>This text is translated in the frontend</h2>
        <p ref="text">{{ text }}</p>
        <button class="btn btn-outline-primary">Like</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      text: "",
      lang: "en",
    };
  },
  async mounted() {
    await this.load();
  },
  methods: {
    async load() {
      const res = await axios.get("http://localhost:8080/text");
      this.text = res.data.text;
      console.log(this.text);
    },
    async change(lang) {
      this.lang = lang;
      await this.load();
    },
  },
};
</script>

<style>
#app {
}
</style>
