<template>
  <div class="page-header text-center" style="background-color: seashell">
    <div class="container">
      <h1 class="page-title"><span>فروشگاه</span></h1>
    </div>
  </div>
  <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">خانه</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="categorys">فروشگاه</router-link>
        </li>
      </ol>
    </div>
  </nav>

  <div class="page-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div>
            <div class="row">
              <div
                class="col-6 col-sm-4 col-lg-3"
                v-for="i in Array(8)"
                :key="i"
              >
                <ProductBox />
              </div>
            </div>
          </div>

          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a
                  class="page-link page-link-prev"
                  href="#"
                  aria-label="Previous"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  قبلی
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>

              <li class="page-item">
                <a class="page-link page-link-next" href="#"> بعدی </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- *************************************************************** -->

        <!-- سایدبار فیلتر ها -->
        <Filter />
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "@/components/productBox.vue";
import Filter from "@/components/pages/categorys/Filter.vue";
export default {
  name: "CategorysVue",
  components: {
    ProductBox,
    Filter,
  },
};
</script>
