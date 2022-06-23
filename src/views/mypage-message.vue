<template>
	<div class="container">
		<div class="row my-4">
			<!-- 네브 -->
			<div class="col-xl-3 col-md-4 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 본문 -->
			<div class="col-xl-9 col-md-8 col-sm-12">
				<h3>메세지함</h3>
				<div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<button
						type="button"
						class="btn btn-primary"
						style="margin-bottom: 10px"
						:disabled="checked.length === 0"
					>
						삭제
						<!-- 삭제하는 함수만들기 -->
					</button>
				</div>
				<!-- 받은메세지, 보낸메시지 -->
				<div class="d-flex justify-content-between">
					<div class="btn-group" role="group" aria-label="Basic example">
						<button type="button" class="btn btn-outline-primary">
							받은메세지
						</button>
						<button type="button" class="btn btn-outline-primary">
							보낸메세지
						</button>
					</div>
					<!-- 모집중, 최신순 -->
					<div
						class="btn-group"
						role="group"
						aria-label="Button group with nested dropdown"
					>
						<button type="button" class="btn btn-primary">모집중</button>
						<div class="btn-group" role="group">
							<button
								email="btnGroupDrop4"
								type="button"
								class="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							></button>
							<div
								class="dropdown-menu"
								aria-labelledby="btnGroupDrop4"
								style=""
							>
								<a class="dropdown-item" href="#">모집마감</a>
							</div>
						</div>

						<button type="button" class="btn btn-primary">최신순</button>
						<div class="btn-group" role="group">
							<button
								email="btnGroupDrop4"
								type="button"
								class="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							></button>
							<div
								class="dropdown-menu"
								aria-labelledby="btnGroupDrop4"
								style=""
							>
								<a class="dropdown-item" href="#">오래된순</a>
							</div>
						</div>
					</div>
				</div>
				<!-- 메세지 테이블 -->
				<table
					class="table table-hover"
					style="margin-left: auto; margin-right: auto"
				>
					<thead>
						<tr>
							<th scope="col">
								<input
									class="form-check-input"
									type="checkbox"
									v-model="checked_all"
									@change="doSelectAll"
								/>
							</th>
							<th v-for="th in Headers" :key="th.key" class="text-left">
								{{ th.title }}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr :key="i" v-for="(user, i) in userData">
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
					</tbody>
				</table>
				<!-- pagination -->
				<div>
					<ul class="pagination justify-content-center">
						<li class="page-item disabled">
							<a class="page-link" href="#">&laquo;</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">1</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">2</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">3</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">4</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">5</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">&raquo;</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/comp-user-profile';
export default {
	nickname: 'MypagMessage',
	components: { CompUserProfile },
	data() {
		return {
			checked_all: false,
			checked: [],
			Headers: [
				{
					title: '닉네임',
					key: 'nickname',
				},
				{ title: '내용', key: 'message' },
				{ title: '장소', key: 'restaurant_location' },
				{ title: '날짜', key: 'data' },
			],
			userData: [
				{
					email: 0,
					nickname: '개발자의품격',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 1,
					nickname: '김민수',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 2,
					nickname: '원신희',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 3,
					nickname: '양세영',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 4,
					nickname: '유승완',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 5,
					nickname: '윤여진',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 6,
					nickname: '김준현',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 7,
					nickname: '차은우',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 8,
					nickname: '이민형',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 9,
					nickname: '정재현',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 10,
					nickname: '황민현',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 11,
					nickname: '연준',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 12,
					nickname: '문세윤',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
				{
					email: 13,
					nickname: '배고파',
					message: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					data: '2022.06.06',
				},
			],
		};
	},
	methods: {
		messageView() {
			this.$router.push('/mypage/message-view');
		},
		doSelect() {
			console.log(this.checked);
		},
		doSelectAll() {
			this.checked = [];
			if (this.checked_all) {
				for (let i in this.userData) {
					this.checked.push(this.userData[i].email);
				}
			}
		},
	},
};
</script>
<style scoped lang="scss"></style>
