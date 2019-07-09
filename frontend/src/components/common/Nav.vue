<template>
   <div>
   <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
        <router-link to="/">
        <!-- <img id="logo" src="http://mblogthumb2.phinf.naver.net/MjAxNzA4MDhfMTk4/MDAxNTAyMTc3OTUxOTcx.avHEJ1PWZ3qSqky8K6qq_j4370IfH3PzNzM9pMmWgaEg.E3zCR94B6hHgkWl0JOrjQGKJLwM-7CY2aNLCFaRLaMYg.JPEG.hojumart1/%EC%9D%B4%EB%AF%B8%EC%A7%80_3.jpg?type=w800"> -->
        </router-link>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><router-link to="/">Home</router-link></li>
      <li><router-link to="/calculator">계산기</router-link></li>
      <li><router-link to="/memberlist">회원목록</router-link></li>
      <li><router-link to="/loginform">로그인</router-link></li>
      <li><router-link to="/joinform">회원가입</router-link></li>
    </ul>
  </div>
</nav>
   </div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>
#logo{
    width: 1.2cm;
    height: 1.2cm;
}
</style>
