<template>
  <div class="page-header text-center" style="background-color: seashell">
    <div class="container">
      <h1 class="page-title"><span>سبد خرید</span></h1>
    </div>
  </div>
  <nav aria-label="breadcrumb" class="breadcrumb-nav">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">خانه</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/categorys">فروشگاه</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">سبد خرید</li>
      </ol>
    </div>
  </nav>

  <div class="page-content">
    <div>
      <div class="container">
        <div class="row" v-if="products">
          <!-- جدول صورت حساب -->

          <div class="col-lg-9">
            <table class="table table-cart table-mobile">
              <thead>
                <tr>
                  <th>محصول</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                  <th>مجموع</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="product-col">
                    <div class="product">
                      <figure class="product-media">
                        <router-link to="/product">
                          <img :src="products.img" alt="تصویر محصول" />
                        </router-link>
                      </figure>

                      <h3 class="product-title">
                        <router-link to="/product">{{
                          products.name
                        }}</router-link>
                        <button
                          class="btn btn-danger mx-5"
                          @click="DeleteItems"
                        >
                          حذف
                        </button>
                      </h3>
                    </div>
                  </td>

                  <td class="price-col">{{ products.price }}</td>
                  <td class="quantity-col">
                    <!-- تعداد -->
                    <div class="cart-product-quantity">
                      <input
                        type="number"
                        class="form-control"
                        v-model="products.count"
                        min="1"
                        max="10"
                        step="1"
                      />
                    </div>

                    <!-- ***************************************************************************************** -->
                  </td>

                  <!-- قیمت مجموع -->
                  <td class="total-col">
                    {{ products.price * products.count }}
                  </td>
                  <td class="remove-col"></td>
                </tr>

                <!-- ********************************************************* -->
              </tbody>
            </table>
          </div>

          <!-- پایان جدول صورت حساب -->

          <!-- **************************************************************************** -->

          <div class="col-lg-3">
            <div style="text-align: center">
              <h3>جمع سبد خرید</h3>

              <table class="table">
                <tbody>
                  <tr>
                    <td>جمع کل سبد خرید :</td>
                    <td class="text-left">
                      {{ products.price * products.count }} تومان
                    </td>
                  </tr>

                  <!-- شیوه ارسال -->

                  <tr>
                    <td>شیوه ارسال :</td>
                    <td>از گزینه های زیر یک روش راانتخاب کنید</td>
                  </tr>

                  <tr>
                    <td>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="free-shipping"
                          name="shipping"
                          class="custom-control-input"
                          value="0"
                          @change="SetPricePost($event, 'ارسال رایگان')"
                        />
                        <label class="custom-control-label" for="free-shipping"
                          >ارسال رایگان</label
                        >
                      </div>
                    </td>
                    <td class="text-left">0,000 تومان</td>
                  </tr>

                  <tr>
                    <td>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="standart-shipping"
                          name="shipping"
                          class="custom-control-input"
                          value="10000"
                          @change="SetPricePost($event, 'پست سفارشی')"
                        />
                        <label
                          class="custom-control-label"
                          for="standart-shipping"
                          >پست سفارشی :</label
                        >
                      </div>
                    </td>
                    <td class="text-left">10,000 تومان</td>
                  </tr>

                  <tr class="summary-shipping-row">
                    <td>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="express-shipping"
                          name="shipping"
                          class="custom-control-input"
                          value="20000"
                          @change="SetPricePost($event, 'پست پیشتاز')"
                        />
                        <label
                          class="custom-control-label"
                          for="express-shipping"
                          >پست پیشتاز :</label
                        >
                      </div>
                    </td>
                    <td class="text-left">20,000 تومان</td>
                  </tr>

                  <!-- پایان شیوه ارسال -->

                  <!-- ******************************************** -->

                  <tr>
                    <td>مبلغ قابل پرداخت :</td>
                    <td class="text-left">
                      {{ products.price * products.count + Number(pricePost) }}
                      تومان
                    </td>
                  </tr>
                </tbody>
              </table>
              <router-link
                to="cart/checkout"
                class="btn btn-outline-primary-2 btn-order btn-block"
                >رفتن به صفحه پرداخت</router-link
              >
            </div>
          </div>
        </div>

        <div v-else class="text-center">
          <h1>هیچ محصولی وجود ندارد</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartVue",
  data() {
    return {
      products: {},
      pricePost: 0,
    };
  },
  mounted() {
    this.products = JSON.parse(localStorage.getItem("products"));
  },
  methods: {
    SetPricePost(e, name) {
      this.pricePost = e.target.value;
      localStorage.setItem(
        "products",
        JSON.stringify({
          ...this.products,
          post: name,
          postPrice: Number(e.target.value),
        })
      );
    },
    DeleteItems() {
      localStorage.removeItem("products");
      this.products = null;
    },
  },
};
</script>
