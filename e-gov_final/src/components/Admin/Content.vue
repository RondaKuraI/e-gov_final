<template>
    <div>
      <v-container>
        <!--<h1 class="hidden-md-only text-h4 text-lg-h3 text-black px-4 py-2 mb-2">Dashboard</h1>-->
        <h1>Dashboard</h1>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="2" class="rounded-lg" color="error">
              <v-card-text class="d-flex justify-space-between align-center">
                <div class="">
                  <h4 class="text-white">USER REGISTRATIONS</h4>
                  <h2><strong>12</strong></h2>
                </div>
                <v-avatar color="teal-darken-3" size="60">
                  <v-icon icon="mdi-account-group" size="large"></v-icon>
                </v-avatar>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="2" class="rounded-lg" color="orange">
              <v-card-text class="d-flex justify-space-between align-center">
                <div class="">
                  <h4 class="text-white">TOTAL POPULATIONS</h4>
                  <h2><strong>12</strong></h2>
                </div>
                <v-avatar color="cyan-darken-3" size="60">
                  <v-icon icon="mdi-doctor" size="large"></v-icon>
                </v-avatar>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="2" class="rounded-lg" color="secondary">
              <v-card-text class="d-flex justify-space-between align-center">
                <div class="">
                  <h4 class="text-white">APPROVED REQUESTS</h4>
                  <h2><strong>12</strong></h2>
                </div>
                <v-avatar color="light-blue-darken-3" size="60">
                  <v-icon icon="mdi-account-multiple" size="large"></v-icon>
                </v-avatar>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="2" class="rounded-lg" color="primary">
              <v-card-text class="d-flex justify-space-between align-center">
                <div class="">
                  <h4 class="text-white">PENDING REQUESTS</h4>
                  <h2><strong>12</strong></h2>
                </div>
                <v-avatar color="blue-darken-3" size="60">
                  <v-icon icon="mdi-account" size="large"></v-icon>
                </v-avatar>
              </v-card-text>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Content',
    }
</script>

<style scoped>

</style>