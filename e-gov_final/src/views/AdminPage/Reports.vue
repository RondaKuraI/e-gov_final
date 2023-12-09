<template>
    <div>
      <NavBar />
      
      <v-container>
          <h1>Reports</h1>

          <!-- <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card height="330">
              <v-img class="align-end text-white" src="https://i.pinimg.com/564x/2f/7b/b5/2f7bb5ab944bd1551d3a7004686d7424.jpg" cover>
                <v-card-title>Certificate of Winning Candidacy</v-card-title>
              </v-img>
              <v-card-text>
                <div>I imagine you think of this activity as something characters from a Jane Austin novel did.</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="elevated" class="">View</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
  
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card height="330">
              <v-img class="align-end text-white" src="https://i.pinimg.com/564x/5f/ac/89/5fac89d95a0f31dfeb8879717f047dfe.jpg" cover>
                <v-card-title>Barangay Assembly Reports</v-card-title>
              </v-img>
              <v-card-text>
                <div></div>
                <div>The coach smiled at the player who tossed the frisbee. If you could buy anything you wanted, what would you buy?</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="elevated">View</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
  
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card height="330">
              <v-img class="align-end text-white" src="https://i.pinimg.com/564x/0d/8d/1c/0d8d1c7995acef2ea5967e951482516e.jpg" cover>
                <v-card-title>Certificate of Hakdog</v-card-title>
              </v-img>
              <v-card-text>
                <div></div>
                <div>She wished she had the budget to buy take-out, because she really wanted Thai food.</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="elevated">View</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row> -->
      </v-container>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/Admin/NavBar.vue';
    export default {
      name: 'Req_Docu',
      components: {
        NavBar,
      },
      data: () => ({
        isDrawerOpen: true,
        dialog: false,
        headers: [
        { title: 'Name', align: 'start', sortable: false, key: 'Name' },
        { title: 'Purpose', align: 'start', key: 'purpose' },
        { title: 'Date Requested', align: 'start', key: 'date_requested' },
        { title: 'Status', align: 'start', key: 'status' },
        { title: 'Tracking Code', align: 'start', key: 'tracking_code' },
        { title: 'Actions', align: 'start', key: 'actions' },
        ],
      documents: [
        { Name: 'Fern', purpose: 'Low', date_requested: '20cm', status: 'Yes', },
      ]
      }),
    }
  </script>
  
  <style scoped>
  
  </style>