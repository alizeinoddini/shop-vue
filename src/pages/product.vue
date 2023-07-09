<template>
  <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
    <div class="container d-flex align-items-center">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">خانه</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/categorys">محصولات</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">جزئیات محصول</li>
      </ol>
    </div>
  </nav>

  <div class="page-content">
    <div class="container">
      <!-- توضیحات کوتاه محصول -->

      <div>
        <div class="row">
          <div class="col-md-6">
            <div>
              <div class="row">
                <figure class="product-main-image">
                  <img :src="product.img" alt="تصویر محصول" />
                </figure>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div style="text-align: right">
              <!-- عنوان محصول -->

              <h1 class="product-title">{{ product.name }}</h1>

              <!-- قیمت -->
              <div class="product-price">
                {{ product.price * product.count }}
              </div>

              <!-- توضیحات محصول -->

              <div>
                <p>
                  ایرپاد — ایرپاد برای گوشی های اندروید ; هندزفری بلوتوث کیو سی
                  وای T13. QCY T13 earbuds · 8 ساعت · 5 . زمان لازم برای شارژ ;
                  هندزفری بلوتوث کیو ...
                </p>
              </div>

              <!-- تعداد -->

              <div class="row">
                <label for="qty">تعداد : </label>
                <div class="product-details-quantity">
                  <input
                    type="number"
                    id="qty"
                    class="form-control"
                    v-model="product.count"
                    min="1"
                    max="10"
                    step="1"
                  />
                </div>
              </div>

              <div class="mb-3"></div>

              <div>
                <button
                  @click="AddToCart"
                  to="cart"
                  class="btn btn-primary btn-block py-4 h5 text-white"
                  style="background-color: #c96; border: #c96; cursor: pointer"
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-5"></div>

      <!-- پایان توضیحات کوتاه محصول -->

      <!-- ******************************************************* -->

      <!-- اطلاعات محصول  -->

      <div style="text-align: right">
        <ul>
          <li style="text-align: center">
            <a style="color: red">اطلاعات محصول</a>
          </li>
        </ul>
        <div>
          <div>
            <div>
              <ul>
                <li>ورژن بلوتوث 5.1</li>

                <li>مدت زمان پخش موزیک 8 ساعت</li>
              </ul>
              <p>
                هدفون های بی سیم جایگزین مناسب، ولی گران قیمت، برای هندزفری سیمی
                محسوب می شوند. در حالیکه شرکت اپل با بهترین Airpods های گران
                قیمت در بازار یکه تازی می کند، شرکت های دیگر سعی دارند برای
                کابران اندروید گزینه های مناسب تری را پیسنهاد بدهند.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- پایان اطلاعات محصول -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductVue",
  data() {
    return {
      product: {
        name: "اسپیکر بلوتوثی",
        count: 1,
        price: "84000",
        img: "images/products/product-2.jpg",
      },
    };
  },

  methods: {
    AddToCart() {
      localStorage.setItem("products", JSON.stringify(this.product));
      alert("با موفقیت به سبد خرید اضافه شد");
      this.$router.push("/cart");
    },
  },
};
</script>
