<template>
  <v-app>
    <div class="header-top">
      <v-container>
        <v-row dense>
          <v-col cols="6" md="6" sm="6">
            <p class="header-top-left">
              <v-icon color="pink"> mdi-clock-time-four </v-icon>
              Opening Hours - 10 Am to 6 PM
            </p>
            <ul class="header-social d-inline-block">
              <li>
                <a href="#"><v-icon> mdi-facebook </v-icon></a>
              </li>
              <li>
                <a href="#"><v-icon> mdi-twitter </v-icon></a>
              </li>
              <li>
                <a href="#"><v-icon> mdi-linkedin </v-icon></a>
              </li>
              <li>
                <a href="#"><v-icon> mdi-instagram </v-icon></a>
              </li>
            </ul>
          </v-col>
          <v-col
            cols="6"
            md="6"
            sm="6"
            class="text-center text-md-right header-top-right"
          >
            <ul>
              <li>
                <a href="#"
                  ><v-icon color="pink"> mdi-email </v-icon>email@companyname.com</a
                >
              </li>
              <li>
                <a href="#"><v-icon color="pink"> mdi-phone </v-icon>+12 345 678 910</a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
