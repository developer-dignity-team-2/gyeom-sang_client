<template>
	<div class="container">
		<div class="row my-4">
			<div class="col-lg-3 col-md-4 col-sm-12">
				<CompUserProfile />
			</div>
			<div class="col-lg-9 col-md-8 col-sm-12">
				<h3>메세지함</h3>
				<div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<button
						type="button"
						class="btn btn-primary disabled"
						style="margin-bottom: 10px"
					>
						삭제
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
								id="btnGroupDrop4"
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
								id="btnGroupDrop4"
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
								<input class="form-check-input" type="checkbox" />
								<label class="form-check-label" for="gridCheck"> </label>
							</th>
							<th v-for="th in Headers" :key="th.key" class="text-left">
								{{ th.title }}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr :key="i" v-for="(user, i) in userData">
							<td scope="row">
								<input class="form-check-input" type="checkbox" />
								<label class="form-check-label" for="gridCheck"> </label>
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
	name: 'MypagMessage',
	components: { CompUserProfile },
	data() {
		return {
			Headers: [
				{
					title: '닉네임',
					key: 'name',
				},
				{ title: '내용', key: 'message' },
				{ title: '장소', key: 'place' },
				{ title: '날짜', key: 'data' },
			],
			userData: [
				{
					id: 0,
					name: '개발자의품격',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: 2022.06,
				},
				{
					id: 1,
					name: '김민수',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: 2022.06,
				},
				{
					id: 2,
					name: '원신희',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: 2022.06,
				},
				{
					id: 3,
					name: '양세영',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 4,
					name: '유승완',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 5,
					name: '윤여진',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 6,
					name: '김준현',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 7,
					name: '차은우',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 8,
					name: '이민형',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 9,
					name: '정재현',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 10,
					name: '황민현',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 11,
					name: '연준',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 12,
					name: '문세윤',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
				{
					id: 13,
					name: '배고파',
					message: '메세지가 도착하였습니다',
					place: '제주도 할매 칼국수',
					data: '22.06.06',
				},
			],
		};
	},
	methods: {
		messageView() {
			this.$router.push('/mypage/message-view');
		},
	},
};
</script>
<style scoped lang="scss"></style>
