<template>
  <div id="myprofile">
    <div id="profile" class="">
      <div class="l col-md-6 hidden-xs">
          <img src="public/assets/img/me.jpg" />
          <div class="text-3">
              <h1 style="font-family: 'Abril Fatface', cursive; color:rgba(255,255,255,1); text-decoration:underline;">PROFILE</h1>
          </div>
          <div class="back">
              <router-link to="/" class="fa fa-backward" style="color:rgba(0,0,0,1);"></router-link>
          </div>
      </div>

      <!--  Bagian Kanan  -->
      <div class="r-p col-md-6 col-xs-12">
          <div class="CV">
              <h1 class="border"><span style="font-weight:bold;">ABOUT ME</span></h1>
              <hr />
              <p style="font-size:18px; color:rgba(204,204,204,1);">Hello , my name Dio Adhita Saputra . All my friends call me Dio, Nice to meet You. I like to draw and learn new things . sometimes I always do whatever I want and no one can forbid . Why? because life only once and do the best for it . I really like to design a website and make a funny cartoon characters for my friend.
              </p>

              <ul class="cv-table">
                  <hr />
                  <li>
                      <div class="cv-table-left">
                          <p><i class="cv-icon fa fa-user" style="font-size:20px;"></i>Date of Birth</p>
                      </div>
                      <div class="cv-table-right">
                          <p>1 April 1992</p>
                      </div>
                  </li>
                  <hr />
                  <li>
                      <div class="cv-table-left">
                          <p><i class="cv-icon fa fa-language"></i>Languages</p>
                      </div>
                      <div class="cv-table-right">
                          <p>English, Indonesia</p>
                      </div>
                  </li>
                  <hr />
                  <li>
                      <div class="cv-table-left">
                          <p><i class="cv-icon fa fa-gamepad"></i>Hobbies</p>
                      </div>
                      <div class="cv-table-right">
                          <p>Badminton, Games, Basket</p>
                      </div>
                  </li>
                  <hr />
                  <li>
                      <div class="cv-table-left">
                          <p><i class="cv-icon fa fa-external-link"></i>Website</p>
                      </div>
                      <div class="cv-table-right">
                          <p>www.dioadhita.com</p>
                      </div>
                  </li>
              </ul>

              <h1 class="border"><span style="font-weight:bold;">WHAT CAN I DO ?</span></h1>
              <hr />
              <div class="cv-icon-block">
                  <div class="cv-icon-container"><i style="font-size:75px;" class="fa fa-paint-brush"></i></div>
                  <div class="cv-icon-text">
                      <h3 style="font-weight:bold; font-family: 'Source Sans Pro', sans-serif;">Web Design</h3>
                      <p>I made a web interface to look more attractive and also responsive which can spoil the eye, usually I work with the team in making a project.</p>
                  </div>
              </div>
              <div class="cv-icon-block">
                  <div class="cv-icon-container"><i style="font-size:75px;" class="fa fa-pencil"></i></div>
                  <div class="cv-icon-text">
                      <h3 style="font-weight:bold; font-family: 'Source Sans Pro', sans-serif;">Graphic Design</h3>
                      <p>
                          I really like to draw, therefore I have always made a hobby of drawing and anything with all my expertise as icon, edit photos and create cartoons to my friends</p>
                  </div>
              </div>
              <div class="cv-icon-block">
                  <div class="cv-icon-container"><i style="font-size:75px;" class="fa fa-android"></i></div>
                  <div class="cv-icon-text">
                      <h3 style="font-weight:bold; font-family: 'Source Sans Pro', sans-serif;">Game Mobile</h3>
                      <p>
                          I also really like to make some simple games for android.</p>
                  </div>
              </div>
              <div class="cv-icon-block">
                  <div class="cv-icon-container"><i style="font-size:75px;" class="fa fa-video-camera"></i></div>
                  <div class="cv-icon-text">
                      <h3 style="font-weight:bold; font-family: 'Source Sans Pro', sans-serif;">Video Editing</h3>
                      <p>
                          Sometimes, I like to make some videos that I edit for me to enjoy myself. I usually video together with my friends.</p>
                  </div>
              </div>
          </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myprofile'
}
</script>
