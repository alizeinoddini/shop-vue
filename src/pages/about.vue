<template>
  <nav class="breadcrumb-nav">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">خانه</router-link></li>
        <li class="breadcrumb-item"><router-link to="/">صفحات</router-link></li>
        <li class="breadcrumb-item active">درباره ما</li>
      </ol>
    </div>
  </nav>
  <div class="container">
    <div
      class="page-header page-header-big text-center"
      style="background-color: red"
    >
      <h1 class="page-title text-white">درباره ما</h1>
    </div>
  </div>

  <div class="page-content">
    <div class="container">
      <div class="row"></div>

      <div class=""></div>
    </div>

    <div class="bg-light-2">
      <div class="container">
        <div class="row pt-5">
          <div class="col-lg-5 mb-3 mb-lg-0">
            <h2 class="title" style="text-align: right">ما که هستیم</h2>
            <p class="lead text-primary mb-3" style="text-align: right">
              <br />
              ارزانی در گرانی . خرید خود را آسوده انجام دهید
            </p>
            <p class="mb-2"></p>
          </div>

          <div class="col-lg-6 offset-lg-1">
            <div class="about-images">
              <img
                src="images/about/img-1.jpg"
                alt=""
                class="about-img-front"
              />
              <img src="images/about/img-2.jpg" alt="" class="about-img-back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutVue",
};
</script>
