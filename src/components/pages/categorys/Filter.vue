<template>
  <aside class="col-lg-3 order-lg-first">
    <div class="sidebar sidebar-shop">
      <div class="widget widget-clean">
        <label>فیلترها : </label>
        <a href="#" class="sidebar-filter-clear">پاک کردن همه</a>
      </div>

      <div class="widget widget-collapsible">
        <h3 class="widget-title">دسته بندی</h3>

        <div id="widget-1">
          <div>
            <div class="filter-items filter-items-count">
              <div class="filter-item">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="cat-1"
                  />
                  <label class="custom-control-label" for="cat-1">لپتاپ</label>
                </div>
                <span class="item-count">3</span>
              </div>

              <div class="filter-item">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="cat-2"
                  />
                  <label class="custom-control-label" for="cat-2"
                    >موبایل
                  </label>
                </div>
                <span class="item-count">0</span>
              </div>

              <div class="filter-item">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="cat-3"
                  />
                  <label class="custom-control-label" for="cat-3"
                    >لوازم جانبی موبایل</label
                  >
                </div>
                <span class="item-count">4</span>
              </div>

              <div class="filter-item">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="cat-4"
                  />
                  <label class="custom-control-label" for="cat-4"
                    >نرم افزار و بازی</label
                  >
                </div>
                <span class="item-count">2</span>
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>

      <!-- ========== -->
      <div class="widget widget-collapsible">
        <h3 class="widget-title">برند</h3>

        <div class="collapse show" id="widget-4">
          <div class="widget-body">
            <div class="filter-items">
              <div class="filter-item">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="brand-1"
                  />
                  <label class="custom-control-label" for="brand-1"
                    >سامسونگ</label
                  >
                </div>
              </div>

              <div class="filter-item">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="brand-2"
                  />
                  <label class="custom-control-label" for="brand-2">
                    هوآوی</label
                  >
                </div>
              </div>

              <div class="filter-item">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="brand-3"
                  />
                  <label class="custom-control-label" for="brand-3"
                    >ایسوس</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "CategorysFilter",
};
</script>
