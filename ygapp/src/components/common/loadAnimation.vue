<template>
  <div class="main">
    <div class="loadani">
      <p>加载中</p>
      <mt-spinner :type="2" color="#fff" :size="80"></mt-spinner>
    </div>
  </div>  
</template>

<script>
  export default {
    name:'loadAnimation',
  }
</script>

<style>
.main{
  width:200rem;
  height:100rem;
  background-color:gray;
  opacity:0.3

}
.loadani{
  width:30rem;
  height:30rem;
  position:absolute;
  margin:30rem 0 0 18rem;
  font-size:5rem;
  background-color:black;
  border-radius:10%;
  padding-top:5rem;
  color:#fff;
  opacity:1;
  text-align:center;
}
</style>