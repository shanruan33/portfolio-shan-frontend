<template>
  <div>
    <div class="site-section">
      <div class="container">
        <div class="row justify-content-center text-center mb-4">
          <div class="col-7">
            <h3 id="contact" class="h3 heading contact">Contact Me</h3>
            <p>
              Email:
              <a
                href="mailto:shanruan333@gmail.com?subject=hello"
                id="contact-email"
              >shanruan333@gmail.com</a>
              <br />Mobile: +1 438 6309212
            </p>
            <button v-on:click="unhide" class="readmore hide_button">leave a message</button>
          </div>
        </div>
      </div>

      <div class="row justify-content-center" id="hidable_form" v-if="!hide">
        <div class="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
          <div class="row">
            <div class="col-md-6 form-group">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                data-msg="Please enter at least 4 chars"
                v-model="name"
              />
              <div class="validate"></div>
            </div>
            <div class="col-md-6 form-group">
              <label for="name">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                v-model="email"
              />
              <div class="validate"></div>
            </div>
            <div class="col-md-12 form-group">
              <label for="name">Message</label>
              <textarea
                class="form-control"
                id="message"
                name="message"
                cols="30"
                rows="10"
                required
                v-model="content"
              ></textarea>
              <div class="validate"></div>
            </div>

            <div class="col-md-12 mb-3">
              <div data-aos="fade-in" class="loading" v-if="blank">Please fill in all blanks before sending. Thank you!</div>
              <div v-if="success" class="sent-message">Your message has been sent. Thank you!</div>
            </div>

            <div class="col-md-6 form-group">
              <input
                v-on:click="send"
                type="submit"
                class="readmore d-block w-100"
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Contact",
  data() {
    return {
      hide: true,
      name: "",
      email: "",
      content: "",
      success: false,
      blank: false
    };
  },
  methods: {
    unhide: function() {
      this.hide ? (this.hide = false) : (this.hide = true);
    //   this.blank = false;
    //   this.success = false;
    },
    send: function() {
      if (this.name != "" && this.email != "" && this.content != "") {
        this.blank = false;
        this.axios
          .post("https://messages.shanruan.io/api/messages", {
            name: this.name,
            email: this.email,
            content: this.content
          })
          .then(response => {
            console.log(response.data);
            if (response.data.id) {
              this.success = true;
              this.name = "";
              this.email = "";
              this.content = "";
              setTimeout(() => {
                this.success = false;
              }, 2000);
            }
          });
      } else {
        this.blank = true;
        setTimeout(() => {
                this.blank = false;
              }, 2000);
      }
    }
  }
};
</script>

<style>
</style>
