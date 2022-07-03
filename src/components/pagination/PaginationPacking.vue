<template>
	<!-- BEGIN pagination -->
	<nav aria-label="Page navigation example">
		<div class="d-flex justify-content-center">
			<ul class="pagination">
				<li
					class="page-item"
					:class="{ disabled: currentPage - maxPagination < 1 }"
				>
					<button class="page-link" @click="addPaging(-1)">
						<span aria-hidden="true">&laquo;</span>
					</button>
				</li>
				<li
					class="page-item"
					:class="{ active: currentPage == pageli.page }"
					v-for="pageli in calPageList"
					:key="pageli.page"
				>
					<button class="page-link" @click="changePage(pageli.page)">
						{{ pageli.page }}
					</button>
				</li>
				<li
					class="page-item"
					:class="{ disabled: start + maxPagination > pageList.length }"
				>
					<button class="page-link" @click="addPaging(1)">
						<span aria-hidden="true">&raquo;</span>
					</button>
				</li>
			</ul>
		</div>
		<!-- 페이지 표시 개수 select -->
		<!-- <div class="d-flex align-items-right justify-content-right">
			<span class="fs-6 me-1" style="width: 80px">표시개수 : </span>
			<select
				class="form-select form-select-sm"
				v-model="resultPerPage"
				id="floatingSelect"
				@change="initPaging"
				style="max-width: 80px"
			>
				<option value="12">12</option>
				<option value="24">24</option>
				<option :value="itemCount">전체</option>
			</select>
		</div> -->
	</nav>
	<!-- END pagination -->
</template>
<script>
/* eslint-disable */
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    itemCount: {
      type: Number, // 불러온 데이터 개수
      default: 0
    }
  },
  data() {
    return {
      resultPerPage: 12, // 한페이지에 보여질 result 개수
      pageLength: 0,
      pageList: [],
      start: 0, // 페이지네이션 start
      end: 0, // 페이지네이션 end
      currentPage: 1,
      maxPagination: 5 // 최대 페이지네이션
    }
  },
  watch: {
    items() {
      this.initPaging()
    }
  },
  setup() {},
  created() {
    this.initPaging() // 페이지네이션 초기화
  },
  computed: {
    calPageList: function () {
      // console.log('pageList: ', this.pageList)
      // console.log('itemCount: ', this.itemCount)
      return this.pageList.slice(this.start - 1, this.end)
    }
  },
  mounted() {},
  unmounted() {},
  methods: {
    // 페이지네이션 초기화
    initPaging() {
      this.pageLength = Math.ceil(this.itemCount / this.resultPerPage)

      this.pageList = []
      for (let i = 1; i <= this.pageLength; i++) {
        this.pageList.push({ page: i })
      }

      this.start = 1
      this.end = this.pageLength
      if (this.pageLength > 5) {
        this.end = 5
      }
      // console.log(
      //   `resultPerPage:${this.resultPerPage} pageLength:${this.pageLength} itemCount:${this.itemCount} start:${this.start} end:${this.end} `
      // )
      this.changePage(1)
    },
    addPaging(num) {
      if (num > 0) {
        this.start += this.maxPagination
        this.end += this.maxPagination
        if (this.end > this.pageList.length) {
          this.end = this.pageList.length
        }
      } else {
        this.start -= this.maxPagination
        this.end = this.start + this.maxPagination - 1
      }
      this.changePage(this.start)
    },
    changePage(num) {
      this.currentPage = num
      const start = this.resultPerPage * (this.currentPage - 1)
      const end = this.resultPerPage * this.currentPage

      this.$emit('changePage', start, end)
    }
  }
}
</script>
<style scoped lang="scss">
.pagination {
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  color: #fff;
  text-decoration: none;
  background-color: #ffcb00;
  border: 1px solid #ffcb00;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}

.page-link:hover {
  z-index: 2;
  color: #fff;
  // background-color: #f3969a;
  background-color: #FF7851;
  // border-color: #f3969a;
  border-color: #FF7851;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  // background-color: #f3969a;
  background-color: #FFA78E;
  // border-color: #f3969a;
  border-color: #FFA78E;
}

.page-item.disabled .page-link {
  color: #fff;
  pointer-events: none;
  // background-color: #cce8e0;
  background-color: #FFDF9C;
  // background-color: #FFF9E1;
  // border-color: #f4f4f4;
  border-color: #FFDF9C;
  // border-color: #FFF9E1;
}

.page-link {
  padding: 0.375rem 0.75rem;
}

// .page-item:first-child .page-link {
//   border-top-left-radius: 0.4rem;
//   border-bottom-left-radius: 0.4rem;
// }

// .page-item:last-child .page-link {
//   border-top-right-radius: 0.4rem;
//   border-bottom-right-radius: 0.4rem;
// }
</style>
