<template>
  <div id="contact" class="">
      <div class="l col-md-6 hidden-xs">
          <img src="public/assets/img/call.jpg" />
          <div class="text-3">
              <h1 style="font-family: 'Raleway', sans-serif; color:red; text-decoration:underline;">Contact</h1>
          </div>
          <div class="back">
              <router-link to="/" class="fa fa-backward" style="color:rgba(0,0,0,1);"></router-link>
          </div>


      </div>

      <!--  Bagian Kanan  -->
      <div class="r-p col-md-6 col-xs-12">
          <div class="CV">
              <h1 class="border"><span style="font-family: 'Abril Fatface', cursive;">Contact</span></h1>


              <div class="cv-resume-tittle">
              <h2 style="font-family: 'Abril Fatface', cursive; text-align:center;">If you want contact me, you can see my social media.</h2>
              </div>
              <div class="cv-icon-block">
                  <div class="cv-icon-container"><a href="https://www.facebook.com/dio.adita" style="font-size:75px;" class="fa fa-facebook"></a></div>
              </div>
              <div class="cv-icon-block">
                  <div class="cv-icon-container"><a href="https://twitter.com/dioas" style="font-size:75px;" class="fa fa-twitter"></a></div>
              </div>
              <div class="cv-icon-block">
                  <div class="cv-icon-container"><a href="https://www.linkedin.com/profile/view?id=AAIAAAx4eS8BQiP7AICkumRNbMlPXUillAOqJ9Q&trk=nav_responsive_tab_profile" style="font-size:75px;" class="fa fa-linkedin"></a></div>
              </div>
              <div class="cv-icon-block">
                  <div class="cv-icon-container"><a href="https://plus.google.com/+dioadhita/posts" style="font-size:75px;" class="fa fa-google-plus"></a></div>
              </div>
              <div class="cv-icon-block">
                  <div class="cv-icon-container">
                    <input type="file" name="pic" accept="image/*">
                  </div>
              </div>
              </div>
          <hr>

      </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>
