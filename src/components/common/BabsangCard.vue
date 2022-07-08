<template>
	<div class="card rounded" style="overflow: hidden">
		<!-- 찜 기능 -->
		<div class="favorite" style="z-index: 1" @click="addFavorite">
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
						<!-- 서버에서 받은 데이터 중 프로필 사진 필드가 빠져 있어요 -->
						<img :src="itemData.profile_image" alt="" />
						<span style="cursor: default">{{ itemData.nickname }}</span>
					</div>
				</div>
			</div>
			<div class="card-body" style="cursor: pointer; padding: 2.3rem 2rem">
				<div>
					<h5 class="card-title" style="font-weight: bold">
						{{ itemData.restaurant_name }}
					</h5>
					<!-- <p class="card-text mb-1">{{ itemData.nickname }}</p> -->
					<p class="card-text mb-2">
						<i class="bi bi-geo-alt"></i>{{ itemData.restaurant_location }}
					</p>
					<p class="card-text mb-4">
						<i class="bi bi-calendar-check me-2"></i>{{ startDate() }} ~
						{{ endDate() }}
					</p>
				</div>
				<div>
					<button type="button" class="btn btn-primary me-2">
						{{ currentStatus() }}
					</button>
					<button type="button" class="btn btn-secondary me-2">
						{{ recruitGender() }}
					</button>
					<button type="button" class="btn btn-secondary">
						1/{{ itemData.dining_count }}
					</button>
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
		startDate() {
			return this.itemData.recruit_start_date.toString().slice(0, 10);
		},
		endDate() {
			return this.itemData.recruit_end_date.toString().slice(0, 10);
		},
		// 찜 여부 표시
		addFavorite() {
			if (this.favorite === 'N') {
				this.favorite = 'Y';
			} else {
				this.favorite = 'N';
			}
			console.log(this.favorite);
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
