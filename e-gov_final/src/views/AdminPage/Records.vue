<template>
    <div>
      <NavBar />
      
      <v-container>
          <h1>Records</h1>
        
          <v-card elevation="10">        
            <v-data-table
              :headers="headers"
              :items="documents"
              item-key="name">
              <template v-slot:top>
                <v-toolbar color="blue-grey-darken-3">
                  <v-toolbar-title>List of Records</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-btn class="me-2" color="blue">Edit</v-btn>
                <v-btn color="red">Delete</v-btn>
              </template>
            </v-data-table>
          </v-card>
      </v-container>
    </div>
  </template>

<script>
import NavBar from '@/components/Admin/NavBar.vue';
    export default {
        name: 'Records',
        components: {
            NavBar,
        },
    }
</script>

<style scoped>

</style>