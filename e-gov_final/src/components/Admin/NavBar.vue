<template>
    <nav>
      <v-toolbar app color="blue-grey-darken-4" scroll-behavior="inverted">
        <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">E-Governance </span>
          <span>Portal</span>
        </v-toolbar-title>
  
        <template #append>
          <v-btn icon class="mr-2">
            <v-badge dot color="error">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
          </v-btn>
          
          <v-menu>
            <template #activator="{props}">
              <v-avatar v-bind="props">
                <v-img cover src="https://i.pinimg.com/564x/d4/59/89/d4598938659abfc00f2688aacb20702b.jpg"></v-img>
              </v-avatar>
            </template>
  
            <v-card min-width="200px">
              <v-list :lines="false" density="compact" nav>
                <v-list-item to="/profile" prepend-icon="mdi-heart-outline">
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
  
                <v-list-item to="/settings" prepend-icon="mdi-cog-outline">
                  <v-list-item-title>Change Password</v-list-item-title>
                </v-list-item>
  
                <v-list-item to="/" prepend-icon="mdi-account-outline">
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </template>
      </v-toolbar>

      <v-navigation-drawer v-model="isDrawerOpen" color="blue-grey-darken-4">
        <v-img src="https://i.pinimg.com/564x/c2/c9/3a/c2c93a4b265f925c0d23188b36073a87.jpg" class="pa-4" max-height="200"
                cover>
              <div class="text-center mt-4">
                  <v-avatar class="mb-4" color="grey-darken-1" size="64">
                      <v-img aspect-ratio="30" src="https://i.pinimg.com/564x/c0/30/a6/c030a61c8803bb91d21080796919d6df.jpg"/>
                  </v-avatar>
                  <h2 class="text-yellow-lighten-5">Admin</h2>
              </div>
          </v-img>
  
          <v-divider></v-divider>
  
        <v-list density="compact" nav>
          <!--<v-list-subheader>Menu</v-list-subheader>-->
          <v-list-item to="/dashboard" prepend-icon="mdi-view-dashboard">Dashboard</v-list-item>
          <v-divider></v-divider>
          <!-- <v-list-group value="Hakdog">
            <template #activator="{props}">
              <v-list-item v-bind="props" prepend-icon="mdi-home-account">Barangay Lists</v-list-item>
            </template>
            <v-list-item to="/dashboard/brgy-bigaan" prepend-icon="mdi-map-marker" density="compact">Bigaan</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker" density="compact">Calangatan</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker" density="compact">Calsapa</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker" density="compact">Ilag</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker" density="compact">Lumangbayan</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker" density="compact">Tacligan</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker" density="compact">Poblacion</v-list-item>
            <v-list-item to="/" prepend-icon="mdi-map-marker" density="compact">Caagutayan</v-list-item>
          </v-list-group> -->
          <v-list-item to="/dashboard/records" prepend-icon="mdi-clipboard-list-outline">Records</v-list-item>
          <v-list-item to="/dashboard/users" prepend-icon="mdi-account-group-outline">Users</v-list-item>
          <v-list-item to="/dashboard/barangay" prepend-icon="mdi-cog">Barangays</v-list-item>
          <v-list-item to="/dashboard/documents" prepend-icon="mdi-file-document-multiple-outline">Documents</v-list-item>
          <v-list-item to="/dashboard/reports" prepend-icon="mdi-chart-bar">Reports and Analytics</v-list-item>


          <!-- <v-list-item to="/dashboard/reports" prepend-icon="mdi-account-circle">Reports/Documents</v-list-item>
          <v-list-item to="/dashboard/req_docu" prepend-icon="mdi-account-circle">Requested Documents</v-list-item> -->
    
          <!-- <v-list-group value="Hakddog">
            <template #activator="{props}">
              <v-list-item v-bind="props" prepend-icon="mdi-folder">Barangays</v-list-item>
            </template>
            <v-list-item prepend-icon="mdi-map-marker-outline" density="compact" v-for="barangay in barangays" :key="barangay.id" @click="navigate(`/dashboard/barangay/${barangay.id}`)">{{barangay.name}}</v-list-item>
          </v-list-group> -->
       
          <v-list-item to="/dashboard/settings" prepend-icon="mdi-cog">Settings</v-list-item>
          
        </v-list>
          
      </v-navigation-drawer>
    </nav>
  </template>
  
  <script>
  export default {
      name: 'NavBar',
      data: () => ({
          isDrawerOpen: true,
        //   barangays: [
        //   { id: 1, name: 'Bigaan' },
        //   { id: 2, name: 'Calangatan' },
        //   { id: 3, name: 'Calsapa' },
        //   { id: 4, name: 'Ilag' },
        //   { id: 5, name: 'Lumangbayan' },
        //   { id: 6, name: 'Tacligan' },
        //   { id: 7, name: 'Poblacion' },
        //   { id: 8, name: 'Caagutayan' },
        //   // Add more barangays as needed
        // ],
      }),
      methods: {
      navigate(route) {
        this.$router.push(route);
        this.drawer = false;
      },
    },
  }
  </script>