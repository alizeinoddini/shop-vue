<template>
  <div class="container pb-5">
    <div class="cat-blocks-container">
      <div class="row">
        <div class="col-6 col-sm-4 col-lg-2" v-for="item in items" :key="item">
          <a href="#" class="brand">
            <img :src="item.img" alt="نام برند" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBrands",

  data() {
    return {
      items: [
        {
          img: "images/brands/1.png",
        },
        {
          img: "images/brands/2.png",
        },
        {
          img: "images/brands/3.png",
        },
        {
          img: "images/brands/4.png",
        },
        {
          img: "images/brands/5.png",
        },
        {
          img: "images/brands/6.png",
        },
      ],
    };
  },
};
</script>
