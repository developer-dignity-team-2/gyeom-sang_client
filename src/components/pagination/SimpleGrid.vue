<template>
	<!-- 받은 메시지 -->
	<div style="overflow: auto" v-if="$store.state.button.showMessage === 'R'">
		<table class="table table-hover" v-if="items.length > 0">
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
					<th
						style="text-align: center"
						:class="{
							'th-description-width': th.key === 'message_description',
						}"
						:key="th.key"
						v-for="th in headers[0]"
					>
						{{ th.title }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					style="text-align: center; cursor: pointer"
					:key="i"
					v-for="(user, i) in formattedItems"
				>
					<td style="width: 40px">
						<input
							class="form-check-input"
							type="checkbox"
							:value="user.id"
							v-model="checked"
							@change="doSelect"
						/>
					</td>
					<td
						v-for="th in headers[0]"
						:key="th.key"
						class="text-left"
						:class="{
							'nickname-width': th.key === 'sender_nickname',
							'description-width': th.key === 'message_description',
							'location-width': th.key === 'restaurant_location',
							readMessage: user.read_check === 'Y',
						}"
						@click="messageView(user.id)"
					>
						{{ user[th.key] }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- 보낸 메시지 -->
	<div style="overflow: auto" v-if="$store.state.button.showMessage === 'S'">
		<table class="table table-hover" v-if="items.length > 0">
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
					<th
						style="text-align: center"
						:class="{
							'th-description-width': th.key === 'message_description',
						}"
						:key="th.key"
						v-for="th in headers[1]"
					>
						{{ th.title }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					style="text-align: center; cursor: pointer"
					:key="i"
					v-for="(user, i) in formattedItems"
				>
					<td style="width: 40px">
						<input
							class="form-check-input"
							type="checkbox"
							:value="user.id"
							v-model="checked"
							@change="doSelect"
						/>
					</td>
					<td
						v-for="th in headers[1]"
						:key="th.key"
						class="text-left"
						:class="{
							'nickname-width': th.key === 'receiver_nickname',
							'description-width': th.key === 'message_description',
							'location-width': th.key === 'restaurant_location',
							readMessage: user.read_check === 'Y',
						}"
						@click="messageView(user.id)"
					>
						{{ user[th.key] }}
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
        return [];
      },
    },
    headers: {
      type: Array,
      default: function () {
        return [];
      },
    },
    sliceStart: {
      type: Number,
      default: 0,
    },
    sliceEnd: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      // dataSortKey: '',
      checked_all: false,
      checked: [],
    };
  },
  setup() {},
  created() {},
  computed: {
    formattedItems: function () {
      // console.log('grid: ', this.items.length)
      return this.items.slice(this.sliceStart, this.sliceEnd);
    },
  },
  mounted() {},
  unmounted() {},
  methods: {
    changePage(start, end) {
      // console.log('changePage', start, end)
      this.sliceStart = start;
      this.sliceEnd = end;
    },
    handleMethod(method, id) {
      this.$emit('clickButtons', method, id);
    },
    doSelect() {
      this.$store.commit('message/checkedMessage', this.checked);
      console.log('Vuex Test : ', this.$store.state.message.checkedMessage);
    },
    doSelectAll() {
      this.checked = [];
      if (this.checked_all) {
        for (let i in this.items) {
          this.checked.push(this.items[i].id);
        }
      }
      this.$store.commit('message/checkedMessage', this.checked);
      console.log(
        'vuex에 전체 선택 메시지 테스트 : ',
        this.$store.state.message.checkedMessage
      );
    },
    // 메시지 읽음 처리
    async putReadMessage(id) {
      const loader = this.$loading.show({ canCancel: false });

      const readMessage = await this.$put(
        `https://nicespoons.com/api/v1/message/${id}`,
        {
          param: {
            // "message_description": "읽음 처리했습니다.",
            "read_check": "Y"
          },
        },
      );

	  loader.hide();
      console.log(readMessage);
    },
    // 메시지 상세보기 라우터
    messageView(id) {
      console.log("messageView : ", id);
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
  color: #CFCFCF
}
</style>
