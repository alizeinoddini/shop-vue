<template>
  <header class="header">
    <!-- هدر بالا -->
    <div class="header-top">
      <div class="container">
        <!-- هدر سمت راست -->

        <div class="header-right">
          <a href="index.html" class="logo">
            <img
              src="images/logo.png"
              alt="لوگو سایت"
              width="105"
              height="25"
            />
          </a>
        </div>

        <!-- پایان هدر سمت راست -->

        <!-- ********************************************************** -->

        <!-- هدر سمت چپ  -->

        <div class="header-left">
          <ul class="top-menu">
            <li>
              <ul>
                <li>
                  <a href="tel:#"
                    ><i class="icon-phone"></i>تلفن تماس : 09209290410</a
                  >
                </li>

                <li><a href="about.html">درباره ما</a></li>
                <li><a href="contact.html">تماس با ما</a></li>
                <li>
                  <a href="login.html"><i class="icon-user"></i>ورود</a>
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
          <a
            href="cart.html"
            class="dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-display="static"
          >
            <i class="icon-shopping-cart"></i>
            <span class="cart-count">2</span>
          </a>
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
