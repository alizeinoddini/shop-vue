<template>
  <div class="product product-2">
    <figure class="product-media">
      <router-link to="/product">
        <img
          src="images/products/product-2.jpg"
          alt="تصویر محصول"
          class="product-image"
        />
      </router-link>

      <router-link
        to="/product"
        class="btn btn-primary"
        style="background-color: #c96; border: #c96"
        >افزودن به سبد خرید
      </router-link>
    </figure>

    <div class="product-body">
      <h3 class="product-title">
        <router-link to="/product">اسپیکر بلوتوث</router-link>
      </h3>

      <div class="product-price">79,000 تومان</div>
    </div>
  </div>
</template>
