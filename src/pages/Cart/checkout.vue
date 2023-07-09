<template>
  <div class="page-header text-center" style="background-color: seashell">
    <div class="container">
      <h1 class="page-title"><span>صفحه پرداخت </span></h1>
    </div>
  </div>

  <nav aria-label="breadcrumb" class="breadcrumb-nav">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">خانه</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/categorys">فروشگاه</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">صفحه پرداخت</li>
      </ol>
    </div>
  </nav>

  <div class="page-content">
    <div class="checkout">
      <div class="container">
        <!-- فرم پرداخت  -->

        <form>
          <div class="row">
            <div class="col-lg-9">
              <h2 style="text-align: center">جزئیات صورت حساب</h2>
              <div class="row">
                <div class="col-sm-6">
                  <label
                    >نام <span style="color: rgb(253, 6, 6)">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>

                <div class="col-sm-6">
                  <label
                    >نام خانوادگی
                    <span style="color: rgb(253, 6, 6)">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>

              <label>نام شرکت (اختیاری)</label>
              <input type="text" class="form-control" />

              <label>کشور <span style="color: rgb(253, 6, 6)">*</span></label>
              <input type="text" class="form-control" />

              <div class="row">
                <div class="col-sm-6">
                  <label
                    >شهر <span style="color: rgb(253, 6, 6)">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>

                <div class="col-sm-6">
                  <label
                    >شهرستان <span style="color: rgb(253, 6, 6)">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <label
                    >خیابان <span style="color: rgb(253, 6, 6)">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="نام خیابان و پلاک"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <label
                    >کد پستی <span style="color: rgb(253, 6, 6)">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>

                <div class="col-sm-6">
                  <label
                    >تلفن <span style="color: rgb(253, 6, 6)">*</span></label
                  >
                  <input type="tel" class="form-control" />
                </div>
              </div>

              <label>ایمیل <span style="color: rgb(253, 6, 6)">*</span></label>
              <input type="email" class="form-control" />
            </div>

            <!-- پایان فرم پرداخت -->

            <!-- ********************************************************************* -->

            <!-- باکس پرداخت -->

            <div class="col-lg-3">
              <div>
                <h3 style="text-align: center">سفارش شما</h3>

                <table class="table">
                  <thead>
                    <tr>
                      <th>محصول</th>
                      <th class="text-left">جمع</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td><a href="#"> لپ تاپ مایکروسافت </a></td>
                      <td class="text-left">152,000 تومان</td>
                    </tr>
                    <tr>
                      <td>جمع سبد خرید</td>
                      <td class="text-left">236,000 تومان</td>
                    </tr>
                    <tr>
                      <td>شیوه ارسال :</td>
                      <td class="text-left">ارسال رایگان</td>
                    </tr>
                    <tr>
                      <td>مبلغ قابل پرداخت :</td>
                      <td class="text-left">236,000 تومان</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button
                type="submit"
                class="btn btn-outline-primary-2 btn-order btn-block"
              >
                <span class="btn-text">ثبت</span>
                <span class="btn-hover-text">پرداخت</span>
              </button>
            </div>
          </div>

          <!-- پایان باکمس پرداخت -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutVue",
};
</script>
