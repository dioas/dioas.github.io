<template>
  <div>
    <!--  Bagian Kiri  -->
    <div id="home" class="col-md-12 col-lg-12" style="padding:0;">
<div class="l col-xs-12 col-md-6">
    <img src="public/assets/img/me.jpg" />
    <div class="text-1">
        <h1>HELLO
                    <br />
					I'M <span style="color:#00BFFF">Dio Adhita Saputra</span></h1>
        <hr />
        <h2 style="font-family: 'Abril Fatface', cursive; color:rgba(255,255,255,1); text-decoration:underline;">Front End Engineer</h2>
        <p class="hidden-xs social-media">
            <a class="fa fa-facebook" href="#" title="Facebook" style="color:rgba(255,255,255,1);"></a>
            <a class="fa fa-linkedin" href="#" title="Linkedin" style="color:rgba(255,255,255,1);"> </a>
            <a class="fa fa-twitter" href="#" title="Twitter" style="color:rgba(255,255,255,1);"></a>
            <a class="fa fa-instagram" href="#" title="Instagram" style="color:rgba(255,255,255,1);"></a>
            <a class="fa fa-google-plus" href="#" title="Plus" style="color:rgba(255,255,255,1);"></a>
        </p>
    </div>
    <div class="mask"></div>

</div>

<!--  Bagian Kanan  -->
<div class="r col-md-6 col-xs-12">
    <div class="bungkus gambar-Profile">
        <router-link id="link-profile" to="profile">
            <div class="kanan" style="border-bottom:solid 1px #000000;">
                <div class="logo">
                    <p style="font-size:40px; text-align:center; margin-top:30px;"><span style="display:inline-block; background-color:rgba(255,255,255,0.5); border-radius:50%; height:55px; width:55px; text-align:center; padding-top:7px;"><i class="fa fa-user"></i> </span></p>
                </div>
                <p style="font-size:40px; text-align:center; margin-top:30px;">&nbsp; &nbsp;PROFILE</p>
            </div>
        </router-link>


    </div>

    <div class="bungkus gambar-Resume" style="border-bottom:solid 1px #000000;">
        <router-link id="link-resume" to="resume">
            <div class="kanan">
                <div class="logo">
                    <p style="font-size:40px; text-align:center; margin-top:30px;"><span style="display:inline-block; background-color:rgba(255,255,255,0.5); border-radius:50%; height:55px; width:55px; text-align:center; padding-top:7px;"><i class="fa fa-graduation-cap"></i> </span></p>
                </div>
                <p style="font-size:40px; text-align:center; margin-top:30px;">&nbsp; &nbsp;RESUME</p>
            </div>
        </router-link>
    </div>

    <div class="bungkus gambar-Portofolio">
        <router-link id="link-test" to="portofolio">
            <div class="kanan" style="border-bottom:solid 1px #000000;">
                <div class="logo">
                    <p style="font-size:40px; text-align:center; margin-top:30px;"><span style="display:inline-block; background-color:rgba(255,255,255,0.5); border-radius:50%; height:55px; width:55px; text-align:center; padding-top:7px;"><i class="fa fa-briefcase"></i> </span></p>
                </div>
                <p style="font-size:40px; text-align:center; margin-top:30px;">&nbsp; &nbsp;PORTOFOLIO</p>
            </div>
        </router-link>
    </div>
    <div class="bungkus gambar-contact">
        <router-link id="#link-test" to="contact">
        <div class="kanan">
            <div class="logo">
                <p style="font-size:40px; text-align:center; margin-top:30px;"><span style="display:inline-block; background-color:rgba(255,255,255,0.5); border-radius:50%; height:55px; width:55px; text-align:center; padding-top:7px;"><i class="fa fa-tablet"></i> </span></p>
            </div>
            <p style="font-size:40px; text-align:center; margin-top:30px;">&nbsp; &nbsp;CONTACT</p>
        </div>
        </router-link>
    </div>
</div>
 </div>

  </div>

</template>

<script>
export default {
  name: 'profile'
}
</script>

