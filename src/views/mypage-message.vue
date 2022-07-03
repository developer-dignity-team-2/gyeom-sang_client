<template>
	<div class="container mb-5">
		<div class="row my-4">
			<!-- 네브 -->
			<div class="col-xl-3 col-md-4 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 본문 -->
			<div class="col-xl-9 col-md-8 col-sm-12">
				<div class="col border rounded p-3">
					<h3>메세지함</h3>

					<!-- 버튼 -->
					<div class="row mt-4 mb-4">
						<!-- 받은메세지, 보낸메시지 -->
						<div class="col-xl-6 col-12 mb-2">
							<div class="row">
								<div
									class="col-12 btn-group"
									role="group"
									aria-label="Basic example"
								>
									<button
										type="button"
										:class="{
											'btn btn-primary': showMessage === 'R',
											'btn btn-outline-primary': showMessage === 'S',
										}"
										@click="selectReceivedMessage"
									>
										<!-- <button type="button" class="btn btn-outline-primary"> -->
										받은 메세지
									</button>
									<button
										type="button"
										:class="{
											'btn btn-primary': showMessage === 'S',
											'btn btn-outline-primary': showMessage === 'R',
										}"
										@click="selectSentMessages"
									>
										보낸 메세지
									</button>
								</div>
							</div>
						</div>
						<!-- 모집중/모집 마감/전체 보기, 최신순/오래된 순 -->
						<div class="col-xl-6 col-12">
							<div class="row">
								<div class="col-8">
									<div class="row">
										<ButtonModule />
									</div>
								</div>
								<!-- 삭제 -->
								<div
									class="col-4 btn-group"
									role="group"
									aria-label="Basic example"
								>
									<button
										type="button"
										class="btn btn-danger"
										:disabled="checked.length === 0"
									>
										<i class="bi bi-trash3-fill"></i>
										삭제
									</button>
								</div>
							</div>
						</div>
					</div>
					<!-- 메세지 테이블 -->
					<!-- <table
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
						<tbody v-if="showMessage === 'R'">
							<tr :key="i" v-for="(user, i) in receivedMessage">
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
						<tbody v-if="showMessage === 'S'">
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
						</tbody>
					</table> -->
					<!-- pagination -->
					<div>
						<grid-pagination
							:headers="headers"
							:items="userMessages"
							@click-buttons="handleClickButtons"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/profile/CompUserProfile';
import ButtonModule from '@/components/profile/ButtonModule';
import GridPagination from '@/components/pagination/GridPagination';
export default {
	nickname: 'MypagMessage',
	components: { CompUserProfile, ButtonModule, GridPagination },
	data() {
		return {
			userMessages: [],
			showMessage: 'R', // 받은 메시지 R, 보낸 메시지 S
			// checked_all: false,
			checked: [],
			headers: [
				{
					title: '닉네임',
					key: 'nickname',
				},
				{ title: '내용', key: 'message_description' },
				{ title: '장소', key: 'restaurant_location' },
				{ title: '날짜', key: 'create_date' },
			],
			userData: [
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc1@gmail.com',
					nickname: '숟갈1',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc2@gmail.com',
					nickname: '숟갈2',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc3@gmail.com',
					nickname: '숟갈3',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc4@gmail.com',
					nickname: '숟갈4',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc5@gmail.com',
					nickname: '숟갈5',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc6@gmail.com',
					nickname: '숟갈6',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc7@gmail.com',
					nickname: '숟갈7',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc8@gmail.com',
					nickname: '숟갈8',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc9@gmail.com',
					nickname: '숟갈9',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
				{
					email: 'abc10@gmail.com',
					nickname: '숟갈10',
					message_description: '메세지가 도착하였습니다',
					restaurant_location: '제주도 할매 칼국수',
					create_date: '2022.06.06',
				},
			],
			// receivedMessage: [],
			// sentMessage: [],
		};
	},
	setup() {},
	created() {
		this.getMessages();
	},
	mounted() {},
	unmounted() {},
	methods: {
		// pagination
		handleClickButtons(method, id) {
			if (method === 'showEditModal') {
				this.modalDetailPayload.id = id;
				this.showEditModal();
			} else if (method === 'showEList') {
				this.showEList(id);
			} else if (method === 'sendMessage') {
				this.sendMessage(id);
			}
		},
		messageView() {
			// this.$router.push('/mypage/message-view');
			this.getMessageDetail();
		},
		// doSelect() {
		// 	console.log(this.checked);
		// },
		// doSelectAll() {
		// 	this.checked = [];
		// 	if (this.checked_all) {
		// 		for (let i in this.userData) {
		// 			this.checked.push(this.userData[i].email);
		// 		}
		// 	}
		// },
		selectReceivedMessage() {
			this.showMessage = 'R';
		},
		selectSentMessages() {
			this.showMessage = 'S';
		},
		async getMessages() {
			// const userMessages = await this.$get(
			// 	'https://nicespoons.com/api/v1/message',
			// );
			// this.receivedMessage = userMessages.result.filter(
			// 	r => r.message_type === 'R',
			// );
			// console.log(this.receivedMessage);
			// this.sentMessage = userMessages.result.filter(
			// 	r => r.message_type === 'S',
			// );
			this.userMessages = this.userData;
		},
		async getMessageDetail() {
			const userMessages = await this.$get(
				'https://nicespoons.com/api/v1/message/13',
			);
			console.log(userMessages);
		},
	},
};
</script>
<style scoped lang="scss">
.favorite {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
}
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
}
.img-wrap.map-wrap {
	padding-bottom: 40%;
}
.img-wrap.pf {
	padding-bottom: 100%;
}
.img-wrap img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
ul,
dl {
	padding: 0;
	margin: 0;
	list-style: none;
}
li {
	display: block;
}
dl {
	display: flex;
}
dt {
	margin-right: 1rem;
}

// 받은 메시지/보낸 메시지 선택 버튼
.btn-primary {
	color: #575757;
	background-color: #ffcb00;
	border-color: #ffcb00;
}
.btn-outline-primary {
	color: #575757;
	border-color: #ffcb00;
	&:hover {
		background-color: #ffcb00;
	}
}

// 모집 중/모집 완료, 최신순/오래된 순 버튼
.btn-container {
	display: inline-block;
	position: relative;
	height: 1em;
}

button {
	position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
	transition: all 0.1s ease-out;
}

.slide-up-enter-from {
	opacity: 0;
	transform: translateY(10px);
}

.slide-up-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
