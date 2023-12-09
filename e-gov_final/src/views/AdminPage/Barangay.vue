<template>
    <NavBar />
    <v-container>
        <v-card>
          <v-tabs
            v-model="tab"
            bg-color="blue-grey-darken-2"
          >
            <v-tab value="Bigaan">Bigaan</v-tab>
            <v-tab value="Calangatan">Calangatan</v-tab>
            <v-tab value="Calsapa">Calsapa</v-tab>
            <v-tab value="Ilag">Ilag</v-tab>
            <v-tab value="Lumangbayan">Lumangbayan</v-tab>
            <v-tab value="Tacligan">Tacligan</v-tab>
            <v-tab value="Poblacion">Poblacion</v-tab>
            <v-tab value="Caagutayan">Caagutayan</v-tab>
          </v-tabs>
      
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="Bigaan">
                Brgy. Bigaan
              </v-window-item>
      
              <v-window-item value="Calangatan">
                Brgy. Calangatan
              </v-window-item>
      
              <v-window-item value="Calsapa">
                Brgy. Calsapa
              </v-window-item>

              <v-window-item value="Ilag">
                Brgy. Ilag
              </v-window-item>

              <v-window-item value="Lumangbayan">
                Brgy. Lumangbayan
              </v-window-item>

              <v-window-item value="Tacligan">
                Brgy. Tacligan
              </v-window-item>

              <v-window-item value="Poblacion">
                Brgy. Poblacion
              </v-window-item>

              <v-window-item value="Caagutayan">
                Brgy. Caagutayan
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
    </v-container>
</template>
<script>

import NavBar from '@/components/Admin/NavBar.vue';
    export default {
        name: 'Barangay',
        components: {
            NavBar,
        },
      data: () => ({
        tab: null,
      }),
    }
</script>