<template>
	<!-- 받은 메시지 -->
	<div class="pt-2">
		<i
			class="bi bi-check-square"
			style="cursor: pointer"
			@click="$refs.checkbox.click()"
		></i>
		<input
			class="form-check-input"
			style="display: none"
			type="checkbox"
			ref="checkbox"
			v-model="checked_all"
			@change="doSelectAll"
		/>
	</div>
	<ul v-if="$store.state.button.showMessage === 'R'">
		<li class="row" :key="item.id" v-for="item in items">
			<hr class="dropdown-divider" style="border-color: #f4f4f4" />

			<div class="col-1">
				<input
					class="form-check-input"
					type="checkbox"
					:value="item.id"
					v-model="checked"
					@change="doSelect()"
				/>
			</div>
			<div
				class="col-11"
				:class="{ readMessage: item.read_check === 'Y' }"
				style="cursor: pointer"
				@click="messageView(item.id)"
			>
				<span style="display: inline-block; width: 30%; text-align: left">{{
					item.receiver_nickname
				}}</span>
				<span style="display: inline-block; width: 70%; text-align: right">{{
					item.create_date.slice(0, 10)
				}}</span>
				<div
					class="text-left"
					style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap"
				>
					{{ item.message_description }}
				</div>
			</div>
		</li>
	</ul>
	<!-- 보낸 메시지 -->
	<ul v-if="$store.state.button.showMessage === 'S'">
		<!-- <div
			class="row"
			style="text-align: center; cursor: pointer"
			:key="i"
			v-for="(user, i) in formattedItems"
		> -->
		<li class="row" :key="item.id" v-for="item in items">
			<hr class="dropdown-divider" style="border-color: #f4f4f4" />

			<div class="col-1">
				<input
					class="form-check-input"
					type="checkbox"
					:value="item.id"
					v-model="checked"
					@change="doSelect()"
				/>
			</div>
			<div
				class="col-11"
				:class="{ readMessage: item.read_check === 'Y' }"
				style="cursor: pointer"
				@click="messageView(item.id)"
			>
				<span style="display: inline-block; width: 30%; text-align: left"
					><strong>{{ item.receiver_nickname }}</strong></span
				>
				<span style="display: inline-block; width: 70%; text-align: right">{{
					item.create_date.slice(0, 10)
				}}</span>
				<div
					class="text-left"
					style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap"
				>
					{{ item.message_description }}
				</div>
			</div>
		</li>
	</ul>
	<!-- </div> -->
</template>
<script>
export default {
	components: {},
	props: {
		items: {
			type: Array,
			default: function () {
				return [];
			},
		},
		headers: {
			type: Array,
			default: function () {
				return [];
			},
		},
	},
	data() {
		return {
			// dataSortKey: '',
			checked_all: false,
			checked: [],
			window: { width: 0, height: 0 },
		};
	},
	setup() {},
	created() {},
	unmounted() {},
	computed: {},
	mounted() {},
	// unmounted() {},
	methods: {
		handleMethod(method, id) {
			this.$emit('clickButtons', method, id);
		},
		doSelect() {
			this.$store.commit('message/checkedMessage', this.checked);
		},
		doSelectAll() {
			this.checked = [];
			if (this.checked_all) {
				for (let i in this.items) {
					this.checked.push(this.items[i].id);
				}
			}
			this.$store.commit('message/checkedMessage', this.checked);
		},
		// 메시지 읽음 처리
		async putReadMessage(id) {
			const loader = this.$loading.show({ canCancel: false });

			await this.$put(`/message/${id}`, {
				param: {
					// "message_description": "읽음 처리했습니다.",
					read_check: 'Y',
				},
			});

			loader.hide();
		},
		// 메시지 상세보기 라우터
		messageView(id) {
			this.$router.push({
				name: 'MypageMessageView',
				query: { messageId: id },
			});
			this.putReadMessage(id); // 메시지 읽음 처리
		},
	},
};
</script>
<style scoped lang="scss">
// 메시지 말줄임 처리
.nickname-width {
	max-width: 120px;
}
.description-width {
	max-width: 320px;
}
.location-width {
	max-width: 160px;
}
td {
	//  min-width: 200px;
	//  max-width: 300px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
// 메시지 읽음 처리
.readMessage {
	color: #cfcfcf;
}
</style>
