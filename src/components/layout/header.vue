<template>
  <header class="header">
    <!-- هدر بالا -->
    <div class="header-top">
      <div class="container">
        <!-- هدر سمت راست -->

        <div class="header-right">
          <router-link to="/" class="logo">
            <img
              src="images/logo.png"
              alt="لوگو سایت"
              width="105"
              height="25"
            />
          </router-link>
        </div>

        <!-- پایان هدر سمت راست -->

        <!-- ********************************************************** -->

        <!-- هدر سمت چپ  -->

        <div class="header-left">
          <ul class="top-menu">
            <li>
              <ul>
                <li>
                  <a href="tel:09209290410"
                    ><i class="icon-phone"></i>تلفن تماس : 09209290410</a
                  >
                </li>

                <li><router-link to="about">درباره ما</router-link></li>
                <li><router-link to="contact">تماس با ما</router-link></li>
                <li>
                  <router-link to="login"
                    ><i class="icon-user"></i>ورود</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- پایان هدر چپ -->
      </div>
    </div>
    <!-- پایان  هدر بالا -->

    <!-- ****************************************** -->

    <!-- هدر پائین -->

    <div class="header-middle sticky-header">
      <div class="container">
        <!-- هدر سمت چپ -->

        <div class="header-left"></div>

        <div class="dropdown cart-dropdown">
          <router-link
            to="/cart"
            class="dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-display="static"
          >
            <i class="icon-shopping-cart"></i>
            <span class="cart-count">2</span>
          </router-link>
        </div>
      </div>

      <!-- پایان هدر سمت چپ -->
    </div>

    <!-- پایان هدر پائین -->
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>
