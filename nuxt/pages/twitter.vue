<template>
  <body style="background-color: white">
  <div class="container">
    
    <div class="half">
      <img src="../images/logo.png" alt="Logo" style="width: 65%; height: auto;transform: translate(6%, 35%);">
    </div>
    
    <div class="half" style="align-content: left;">
      <div style="padding-top: 25%; padding-left: 15%;">
        
        <v-row class="mt-n4">
          <v-col>
            <p class="font" style="font-size: 80px; font-weight: bolder; white-space: nowrap">Happening now</p>
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <v-col>
            <p class="font" style="font-size: 40px; font-weight: bolder;">Join today.</p>  
          </v-col>
        </v-row>

        <v-row class="mt-n1">
          <v-col>
            <v-btn class="rounded-pill mx-auto" color="white" width="290" height="40">
              <p style="color: darkgray;">Sing up with Google</p>
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="mt-n5">
          <v-col>
            <v-btn class="rounded-pill mx-auto" color="white" width="290" height="40">
              <p style="color: black;">Sing up with Apple</p>
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="mt-n6">
          <v-col>   
            <div style="width: 290px;text-align: center;">
              <p class="font" style="font-size: 20px; color: solid black">or</p>
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-n6">
          <v-col>
            <v-btn class="rounded-pill mx-auto" color="blue" width="290" height="40">
              C<span class="text-lowercase" style="color: white;">reate account</span>
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="mt-n4">
          <v-col>
            <div style="width: 290px;font-size: 10px; color: gray;">
              By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-12">
          <v-col>
            <p class="font" style="font-size: 22px;">Already have an account?</p>
          </v-col>
        </v-row>

        <v-row class="mt-n2">
          <v-col>
            <v-btn class="rounded-pill mx-auto" color="white" width="290" height="40">
              <p style="color: blue;">Sign in</p>
            </v-btn>
          </v-col>
        </v-row>

      </div>
    </div>

  </div>
</body>
</template>

<script>

</script>

<style>

  .container {
    display: flex;
    height: 871px;
  }
  
  .half {
    flex: 1;
  }

  .half img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: auto;
  }

  .font {
  display: inline-block;
  transform: scale(1, 0.8);
  color: black; 
  font-family: Helvetica;
  }
</style>