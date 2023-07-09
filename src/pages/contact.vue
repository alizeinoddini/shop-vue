<template>
  <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">خانه</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">تماس با ما</li>
      </ol>
    </div>
  </nav>
  <div class="container">
    <div
      class="page-header page-header-big text-center"
      style="background-color: red"
    >
      <h1 class="page-title text-white">
        تماس با ما<span class="text-white">ارتباط خود را با ما حفظ کنید</span>
      </h1>
    </div>
  </div>

  <div class="page-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-2 mb-lg-0">
          <h2 class="title mb-1">اطلاعات تماس</h2>
          <p class="mb-3" style="text-align: right">
            هر روز هفته میتوانید با با در تماس باشید
          </p>
          <div class="row">
            <div class="col-sm-7" style="text-align: right">
              <div class="contact-info">
                <h3>دفتر</h3>

                <ul class="contact-list">
                  <li>
                    <i class="icon-map-marker" style="text-align: right"></i>
                    تهران، میدان آزادی، خیابان آزادی، پلاک 7
                  </li>
                  <li>
                    <i class="icon-phone"></i>
                    <a href="tel:#">55667788</a>
                  </li>
                  <li>
                    <i class="icon-envelope"></i>
                    <a href="mailto:#">info@example.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-sm-5" style="text-align: right">
              <div class="contact-info">
                <h3>ساعت کار دفتر</h3>

                <ul class="contact-list">
                  <li>
                    <i class="icon-clock-o"></i>
                    <span class="text-dark">شنبه تا چهارشنبه</span> <br />11 صبح
                    تا 7 عصر
                  </li>
                  <li>
                    <i class="icon-calendar"></i>
                    <span class="text-dark">پنج شنبه</span> <br />11 صبح تا 5
                    عصر
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="mt-4 mb-5" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactVue",
};
</script>
