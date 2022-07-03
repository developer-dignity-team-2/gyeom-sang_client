<template>
	<div style="overflow: auto">
		<table class="table table-striped" v-if="items.length > 0">
			<thead>
				<tr>
					<th scope="col" style="text-align: center">
						<input
							class="form-check-input"
							type="checkbox"
							v-model="checked_all"
							@change="doSelectAll"
						/>
					</th>
					<!-- <th style="text-align: center">#</th> -->
					<th style="text-align: center" :key="th.key" v-for="th in headers">
						{{ th.title }}
					</th>
				</tr>
			</thead>
			<!-- <tbody v-if="showMessage === 'R'"> -->
			<tbody>
				<tr
					style="text-align: center"
					:key="i"
					v-for="(user, i) in formattedItems"
				>
					<td scope="row">
						<input
							class="form-check-input"
							type="checkbox"
							:value="user.email"
							v-model="checked"
							@change="doSelect"
						/>
					</td>
					<!-- <td style="text-align: center">{{ i + 1 + sliceStart }}</td> -->
					<td
						v-for="th in headers"
						:key="th.key"
						class="text-left"
						@click="messageView()"
					>
						{{ user[th.key] }}
					</td>
				</tr>
			</tbody>
			<!-- <tbody v-if="showMessage === 'S'">
				<tr :key="i" v-for="(user, i) in sentMessage">
					<td scope="row">
						<input
							class="form-check-input"
							type="checkbox"
							:value="user.email"
							v-model="checked"
							@change="doSelect"
						/>
					</td>
					<td
						v-for="th in Headers"
						:key="th.key"
						class="text-left"
						@click="messageView()"
					>
						{{ user[th.key] }}
					</td>
				</tr>
			</tbody> -->
			<!-- <tbody>
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
			</tbody> -->
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
    },
  },
  data() {
    return {
      // dataSortKey: '',
      checked_all: false,
			checked: [],
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
    },
    doSelect() {
			console.log(this.checked);
	},
	doSelectAll() {
		this.checked = [];
		if (this.checked_all) {
			for (let i in this.items) {
				this.checked.push(this.items[i].email);
			}
		}
	console.log(this.checked)
	},
	async getMessageDetail() {
		const userMessages = await this.$get(
			'https://nicespoons.com/api/v1/message/13',
		);
		console.log(userMessages);
	},
	messageView() {
		this.$router.push('/mypage/message-view');
		this.getMessageDetail();
	},
  }
}
</script>
