<template>
	<div class="card rounded" style="overflow: hidden">
		<!-- 찜 기능 -->
		<div class="favorite" style="z-index: 1" @click="addFavorite(itemData.id)">
			<i
				v-show="favorite === 'N'"
				class="bi bi-heart pt-3 pe-2"
				style="font-size: 1.5rem; color: #ffcb00; cursor: pointer"
			></i>
			<i
				v-show="favorite === 'Y'"
				class="bi bi-heart-fill pt-3 pe-2"
				style="font-size: 1.5rem; color: #ffcb00; cursor: pointer"
			></i>
			<!-- 빨간색 찜 버튼 -->
			<!-- <i
					v-show="favorite === 'n'"
					class="bi bi-heart pt-3 pe-2"
					style="font-size: 1.5rem; color: rgb(255 72 95); cursor: pointer"
				></i>
				<i
					v-show="favorite === 'y'"
					class="bi bi-heart-fill pt-3 pe-2"
					style="font-size: 1.5rem; color: rgb(255 72 95); cursor: pointer"
				></i> -->
			<!-- <font-awesome-icon
					icon="fa-solid fa-star"
					style="color: #ffd24c; font-size: 1.5rem; cursor: pointer"
				/> -->
		</div>
		<div @click="detail(itemData.id)">
			<div class="img-wrap">
				<img
					:src="
						'https://nicespoons.com/static/images/' + itemData.dining_thumbnail
					"
					class="card-img-center"
					:alt="itemData.restaurant_name"
				/>

				<div class="shadow"></div>
				<div class="author">
					<div class="author-image">
						<img
							:src="itemData.host_profile_image || itemData.profile_image"
							alt=""
						/>
						<span style="cursor: default">{{ itemData.nickname }}</span>
					</div>
				</div>
			</div>
			<div
				class="card-body"
				style="cursor: pointer; padding: 2.3rem 2rem 1.5rem"
			>
				<div>
					<h5 class="card-title mb-3" style="font-weight: bold">
						{{ itemData.dining_table_title }}
					</h5>

					<p class="card-text mb-2 me-3" style="display: inline-block">
						<i class="bi bi-geo-alt"></i> {{ itemData.restaurant_name }}
					</p>
					<p class="card-text mb-4" style="display: inline-block">
						<i class="bi bi-calendar-check me-2"></i>{{ dateFormat() }}
					</p>

					<!-- <p class="card-text mb-4">D-{{ countDday() }}</p> -->
				</div>
				<div>
					<button type="button" class="btn btn-primary me-2">
						{{ currentStatus() }}
					</button>
					<button type="button" class="btn btn-primary me-2">
						D-{{ countDday() }}
					</button>
					<button type="button" class="btn btn-secondary me-2">
						{{ recruitGender() }}
					</button>
					<button type="button" class="btn btn-secondary">
						{{ itemData.dining_count }}인상
					</button>
				</div>
				<div>
					<div class="mt-3" style="font-size: 0.8rem">3명이 신청했어요</div>
					<div class="author-image">
						<img
							:src="itemData.host_profile_image || itemData.profile_image"
							alt=""
							style="width: 1.5rem; border-radius: 50%"
						/>
						<img
							:src="itemData.host_profile_image || itemData.profile_image"
							alt=""
							style="width: 1.5rem; border-radius: 50%"
						/>
						<img
							:src="itemData.host_profile_image || itemData.profile_image"
							alt=""
							style="width: 1.5rem; border-radius: 50%"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BabsangCard',
	data() {
		return {
			favorite: 'N',
		};
	},
	props: {
		itemData: Object,
	},
	computed() {},
	methods: {
		currentStatus() {
			let currentStatus = this.itemData.dining_status;
			let status;
			if (currentStatus === 0) {
				status = '모집중';
			} else if (currentStatus === 1) {
				status = '모집 마감';
			} else {
				status = '모집 확정';
			}
			return status;
		},
		recruitGender() {
			let gender = this.itemData.gender_check;
			let genderStatus;
			if (gender === 'ALL') {
				genderStatus = '혼성';
			} else if (gender === 'F') {
				genderStatus = '여성';
			} else {
				genderStatus = '남성';
			}
			return genderStatus;
		},
		countDday() {
			const strValue = this.itemData.recruit_start_date;
			let s_year = strValue.slice(0, 4);
			let s_month = strValue.slice(5, 7);
			let s_day = strValue.slice(8, 10);
			let startDay = new Date(s_year, s_month - 1, s_day);

			const endValue = this.itemData.recruit_end_date;
			let e_year = endValue.slice(0, 4);
			let e_month = endValue.slice(5, 7);
			let e_day = endValue.slice(8, 10);
			let endDay = new Date(e_year, e_month - 1, e_day);

			const gap = endDay.getTime() - startDay.getTime();
			const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
			return result;
		},
		dateFormat() {
			const dayValue = this.itemData.dining_datetime;
			let year = dayValue.slice(0, 4);
			let month = dayValue.slice(5, 7);
			let day = dayValue.slice(8, 10);
			let dayObj = new Date(year, month - 1, day);
			const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
			let week = WEEKDAY[dayObj.getDay()];

			return `${month}월 ${day}일(${week}) PM 6시`;
		},

		// 찜 여부 표시
		async addFavorite(id) {
			const likeId = id;
			if (this.favorite === 'N') {
				this.favorite = 'Y';
				await this.$post('https://nicespoons.com/api/v1/babsang/bookmark', {
					param: {
						dining_table_id: likeId,
						active_yn: this.favorite,
					},
				});
				console.log(likeId);
				console.log(this.favorite);
			} else {
				this.favorite = 'N';

				await this.$put('https://nicespoons.com/api/v1/babsang/bookmark', {
					param: {
						active_yn: this.favorite,
						cancel_date: new Date(),
					},
					dining_table_id: likeId,
				});
				console.log(likeId);
				console.log(this.favorite);
			}
		},

		detail(id) {
			this.$router.push({
				name: 'Babsang',
				params: { babsangId: id },
			});
		},
	},
};
</script>

<style scoped lang="scss">
.card {
	border-radius: 1.8rem !important;
	border: none;
	box-shadow: 0 10px 30px rgb(35 38 45 / 14%);
	.dday {
		color: #575757;
		font-weight: 600;
		font-size: 0.7rem;
		line-height: 0;
		background-color: #ffcb00;
		padding: 0.35rem;
		border-radius: 0.2rem;
		vertical-align: middle;
		letter-spacing: 0.1em;
	}
	.img-wrap {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100%;
		.author {
			position: absolute;
			bottom: 1rem;
			left: 1rem;
			.author-image {
				> img {
					width: 2.5rem;
					height: 2.5rem;
					border-radius: 50%;
					margin-right: 0.7rem;
				}
				> span {
					font-weight: bold;
					color: rgb(255, 255, 255);
				}
			}
		}
		.shadow {
			position: absolute;
			width: 100%;
			height: 80px;
			left: 0;
			bottom: 0;
			background: linear-gradient(transparent, #000000e3);
			opacity: 0.5;
		}
		img.card-img-center {
			transition: all 0.4s ease;
		}
		&:hover {
			img.card-img-center {
				transform: scale(1.1);
				transition: all 0.4s ease;
			}
		}
	}
}

.favorite {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
}
.card-img-center {
	width: 100%;
	height: 16rem;
	object-fit: cover;
}
</style>
