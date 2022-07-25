<template>
	<div class="card rounded" style="overflow: hidden">
		<div @click="detail(itemData.id)">
			<div class="img-wrap">
				<img
					:src="
						VUE_APP_DOMAIN_URL + '/static/images/' + itemData.dining_thumbnail
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
						<span style="cursor: default">{{
							itemData.nickname || itemData.host_nickname
						}}</span>
					</div>
				</div>
			</div>
			<div
				class="card-body"
				style="cursor: pointer; padding: 2rem 2rem 2rem; min-height: 17rem"
			>
				<div class="d-flex justify-content-between aling-item-center">
					<h5
						class="card-title m-0"
						style="
							font-weight: bold;
							font-size: 1.6rem;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						"
					>
						{{ itemData.dining_table_title }}
					</h5>
					<!-- 찜 기능 -->
					<div
						class="favorite"
						style="margin-top: -0.18rem"
						@click.stop="addFavorite(itemData.id)"
					>
						<i
							v-show="favorite === 'N'"
							class="bi bi-heart"
							style="font-size: 1.7rem; color: #ffcb00; cursor: pointer"
						></i>
						<i
							v-show="favorite === 'Y'"
							class="bi bi-heart-fill"
							style="font-size: 1.7rem; color: #ffcb00; cursor: pointer"
						></i>
					</div>
				</div>

				<!-- 식당 이름/식사 일시 -->
				<div class="my-3">
					<div class="card-text mb-1">
						<i class="bi bi-geo-alt bi-w"></i>
						<span> {{ itemData.restaurant_name }}</span>
					</div>
					<div class="card-text">
						<i class="bi bi-clock bi-w"></i>
						<span>{{ dateFormat() }}</span>
					</div>
				</div>
				<!-- 밥상 해시 정보 -->
				<div class="babsang-info">
					<span>#{{ currentStatus() }}</span>
					<span>#D-{{ countDday() }}</span>
					<span>#{{ recruitGender() }}</span>
					<span>#{{ itemData.dining_count }}인상</span>
				</div>
				<div>
					<div class="mt-3" style="font-size: 0.8rem; margin-bottom: 4px">
						{{ countAppliedSpoons.length }}명이 신청했어요
					</div>
					<div class="d-flex">
						<div
							class="author-image me-1"
							v-for="(item, index) in countAppliedSpoons"
							:key="index"
						>
							<img
								:src="item.spoon_profile_image"
								alt=""
								style="width: 1.5rem; height: 1.5rem; border-radius: 50%"
							/>
						</div>
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
			favorite: '',
			ampm: '',
			hourVal: '',
			countAppliedSpoons: '',
		};
	},
	props: {
		itemData: Object,
	},
	computed: {
		VUE_APP_DOMAIN_URL() {
			return process.env.VUE_APP_DOMAIN_URL;
		},
	},

	created() {
		this.favorite = this.itemData.active_yn;
		this.countSpoons();
	},
	methods: {
		async countSpoons() {
			const confirmUsers = (
				await this.$get(`/babsang/${this.itemData.id}/babsangSpoons`)
			).result;
			this.countAppliedSpoons = confirmUsers.filter(
				user => user.apply_yn === 'Y',
			);
		},
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
			let startDay = new Date(+s_year, s_month - 1, +s_day);

			const endValue = this.itemData.recruit_end_date;
			let e_year = endValue.slice(0, 4);
			let e_month = endValue.slice(5, 7);
			let e_day = endValue.slice(8, 10);
			let endDay = new Date(+e_year, e_month - 1, +e_day);

			const gap = endDay.getTime() - startDay.getTime();
			return Math.ceil(gap / (1000 * 60 * 60 * 24));
		},
		dateFormat() {
			const dayValue = this.itemData.dining_datetime;
			let year = dayValue.slice(0, 4);
			let month = dayValue.slice(5, 7);
			let day = dayValue.slice(8, 10);
			let hour = dayValue.slice(11, 13);
			let min = dayValue.slice(14, 16);

			if (hour > 11) {
				this.ampm = '오후';
			} else {
				this.ampm = '오전';
			}
			if (hour > 12) {
				this.hourVal = hour - 12;
			} else {
				this.hourVal = hour;
			}
			let dayObj = new Date(+year, month - 1, +day);
			const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
			let week = WEEKDAY[dayObj.getDay()];

			return `${month}월 ${day}일(${week}) ${this.ampm} ${this.hourVal}:${min}`;
		},

		// 찜 여부 표시
		async addFavorite(id) {
			const likeId = id;
			if (this.favorite === 'N') {
				this.favorite = 'Y';
				await this.$post('/babsang/bookmark', {
					param: {
						dining_table_id: likeId,
						active_yn: this.favorite,
					},
				});
				console.log(likeId);
				console.log(this.favorite);
			} else {
				this.favorite = 'N';

				await this.$put('/babsang/bookmark', {
					param: {
						active_yn: this.favorite,
						cancel_date: new Date()
							.toISOString()
							.replace('T', ' ')
							.replace(/\..*/, '')
							.toString(),
					},
					dining_table_id: likeId,
				});
				console.log(likeId);
				console.log(this.favorite);
			}
		},

		detail(id) {
			let userGender =
				this.$store.state.user.userData.gender === 'female' ? 'F' : 'M';
			let itemGender = this.itemData.gender_check;
			// 성별 validation
			if (userGender === itemGender || itemGender === 'ALL') {
				this.$router.push({
					name: 'Babsang',
					params: { babsangId: id },
				});
			} else {
				let gender = this.recruitGender();
				this.$swal({
					title: `${gender}용 밥상 ㅠㅠ`,
					text: `이 밥상은 ${gender}용이므로 다른 밥상을 이용해 주세요~`,
					icon: 'warning',
					iconColor: '#ffcb00',
					confirmButtonText: '확인',
					confirmButtonColor: '#ffcb00',
				});
			}
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
i.bi-geo-alt {
	&:before {
		vertical-align: -0.2em;
	}
}
i.bi-w {
	padding: 0 0.5rem 0 0;
}

.card-img-center {
	width: 100%;
	height: 14rem;
	object-fit: cover;
}

.babsang-info {
	span {
		margin-right: 1rem;
		font-size: 1rem;
		font-weight: bold;
		color: #ffcb00;
	}
}
.dday-btn {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
</style>
