<template>
	<div style="overflow: auto">
		<table class="table table-striped" v-if="items.length > 0">
			<thead>
				<tr>
					<th style="text-align: center">#</th>
					<th style="text-align: center" :key="th.key" v-for="th in headers">
						{{ th.title }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr :key="i" v-for="(item, i) in formattedItems">
					<td style="text-align: center">{{ i + 1 + sliceStart }}</td>
					<td style="text-align: center" :key="th.key" v-for="th in headers">
						<div v-if="th.key != 'GROSS_WEIGHT'">
							{{ item[th.key] }}
						</div>
						<input
							size="5"
							type="text"
							v-if="th.key === 'GROSS_WEIGHT'"
							v-model="item[th.key]"
						/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
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
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    sliceStart: {
      type: Number,
      default: 0
    },
    sliceEnd: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      // dataSortKey: ''
    }
  },
  setup() {},
  created() {},
  computed: {
    formattedItems: function () {
      // console.log('grid: ', this.items.length)
      return this.items.slice(this.sliceStart, this.sliceEnd)
    }
  },
  mounted() {},
  unmounted() {},
  methods: {
    changePage(start, end) {
      // console.log('changePage', start, end)
      this.sliceStart = start
      this.sliceEnd = end
    },
    handleMethod(method, id) {
      this.$emit('clickButtons', method, id)
    }
  }
}
</script>
