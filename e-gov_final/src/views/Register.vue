<template>
    <v-app>
        <div class="background"></div>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="10" lg="4" class="mx-auto">
                <v-card class="pa-4">
                    <div class="text-center">
                        <h2 class="text-blue-grey-darken-4">Register</h2>
                    </div>
                    <v-form>
                        <v-card-text>
                            <v-text-field
                                type="text"
                                label="First Name"
                                placeholder="First Name"
                                prepend-inner-icon="mdi-account"
                                variant="outlined"
                                color="blue-grey-darken-4"
                            />
                            <v-text-field
                                type="text"
                                label="Last Name"
                                placeholder="Last Name"
                                prepend-inner-icon="mdi-account"
                                variant="outlined"
                                color="blue-grey-darken-4"
                            />
                            <v-text-field
                                type="email"
                                label="Email"
                                placeholder="Email"
                                prepend-inner-icon="mdi-email"
                                variant="outlined"
                                color="blue-grey-darken-4"
                            />
                            <v-text-field
                                :type=" passwordShow ? 'text' : 'password' "
                                label="Password"
                                placeholder="Password"
                                prepend-inner-icon="mdi-key"
                                variant="outlined"
                                color="blue-grey-darken-4"
                                :append-inner-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append-inner="passwordShow = !passwordShow"
                            />
                            <v-checkbox label="I accept the Terms & Conditions" class="mt-n4" color="blue-grey-darken-4"></v-checkbox>
                            <v-btn type="submit" block color="blue-grey-darken-4">Register</v-btn>
                        </v-card-text>
                        <h4> Already have an account?
                        <a href="/">Sign In</a>
                        </h4>
                    </v-form>
                </v-card>
            </v-col>
        </v-main>
    </v-app>
  </template>
  <script>
  
  export default {
    name: 'RegisterView',
  
    data: () => ({
        passwordShow: false,
    })
  }
  
  </script>
  <style>
  .background {
    background-image: url(@/assets/Storm.jpg) !important;
    height: 300px;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
  }
  </style>