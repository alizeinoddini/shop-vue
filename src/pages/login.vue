<template>
  <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">خانه</router-link></li>
        <li class="breadcrumb-item"><router-link to="/">صفحات</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">
          ورود / ثبت نام
        </li>
      </ol>
    </div>
  </nav>

  <!-- ******************************************************** -->

  <!-- فرم ورود و ثبت نام -->

  <div class="container">
    <div>
      <div>
        <ul style="text-align: center">
          <li>
            <a style="color: red">ثبت نام/ورود</a>
          </li>
        </ul>
        <div>
          <div>
            <form>
              <div>
                <label
                  >آدرس ایمیل شما
                  <span style="color: rgb(253, 6, 6)">*</span></label
                >
                <input
                  type="email"
                  class="form-control"
                  name="register-email"
                />
              </div>

              <div>
                <label
                  >رمز عبور <span style="color: rgb(253, 6, 6)">*</span></label
                >
                <input
                  type="password"
                  class="form-control"
                  name="register-password"
                />
              </div>

              <div>
                <router-link
                  to="Admin/ltr/dashboard.html"
                  class="btn btn-primary btn-block h6 py-4 text-white"
                  style="background-color: rgb(227, 13, 13); border: #c96"
                  >ثبت نام /ورود</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginVue",
};
</script>
