<template>
  <div class="container" style="padding-right: 3%">
    <h2 class="title text-center mb-4">دسته بندی های محبوب</h2>

    <div class="cat-blocks-container">
      <div class="row">
        <div
          class="col-6 col-sm-4 col-lg-2"
          v-for="item in items"
          :key="item.title"
        >
          <router-link :to="item.link" class="cat-block">
            <figure>
              <span>
                <img :src="item.image" alt="Category image" />
              </span>
            </figure>

            <h3 class="cat-block-title">{{ item.title }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavriteCategory",
  data() {
    return {
      items: [
        {
          link: "/category",
          image: "images/category/1.png",
          title: "کامپیوتر و لپ تاپ",
        },
        {
          link: "/category",
          image: "images/category/2.png",
          title: "دوربین دیجیتال",
        },
        {
          link: "/category",
          image: "images/category/3.png",
          title: "گوشی هوشمند",
        },
        {
          link: "/category",
          image: "images/category/4.png",
          title: "تلویزیون",
        },
        {
          link: "/category",
          image: "images/category/5.png",
          title: "لوازم صوتی",
        },
        {
          link: "/category",
          image: "images/category/6.png",
          title: "ساعت هوشمند",
        },
      ],
    };
  },
};
</script>
