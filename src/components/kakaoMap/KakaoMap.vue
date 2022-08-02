<template>
	<div class="map-back" @click="closePopupByWindow($event)">
		<div class="map-wrap">
			<div class="map-container card">
				<div class="card-header">식당 검색</div>
				<h4
					class="card-title my-3"
					style="text-align: left; padding-left: 1rem"
				>
					원하는 식당을 검색해 보세요.
				</h4>
				<div class="map-area row" style="display: flex; padding: 0 2rem">
					<div id="map" class="col-md-9"></div>

					<div class="searchbox col-md-3 pe-0">
						<input
							class="form-control me-sm-2 mb-3"
							type="search"
							placeholder="Search"
							v-model="keywordValue"
							@input="searchPlace"
						/>

						<div class="results">
							<div
								class="place p-1"
								v-for="rs in search.results"
								:key="rs.id"
								@click="showPlace(rs)"
							>
								<strong>{{ rs.place_name }}</strong>
								<span>{{ rs.road_address_name }}</span>
							</div>
						</div>
					</div>
				</div>
				<button
					@click="closePopup"
					type="button"
					class="btn-primary border close p-1"
					style="width: 10rem; margin: 1rem auto; border-radius: 0.4rem"
				>
					선택하기
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	props: ['isShow'],
	data() {
		return {
			// 지도
			infowindow: '',
			marker: '',
			map: null,
			// 장소 검색 객체
			ps: null,
			bounds: '',
			mapInstance: '',
			search: {
				keyword: null,
				pgn: null,
				results: [],
			},
			keywordValue: '',
			options: {
				center: '',
				level: '',
			},
			placeName: '',
			placeAddress: '',
			placeLatitude: '',
			placeLongitude: '',
		};
	},
	mounted() {
		if (!window.kakao || !window.kakao.maps) {
			const script = document.createElement('script');
			script.src =
				'//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=' +
				process.env.VUE_APP_KAKAO_API_KEY;
			document.head.appendChild(script);
			/* global kakao */

			script.addEventListener('load', () => {
				kakao.maps.load(this.initMap);
			});
		} else {
			this.initMap();
		}
	},

	unmounted() {},
	methods: {
		closePopupByWindow(e) {
			if (e.target.className === 'map-back') {
				this.$store.commit('toggleShow');
			}
		},
		closePopup() {
			if (
				this.placeName &&
				this.placeAddress &&
				this.placeLatitude &&
				this.placeLongitude
			) {
				this.$store.commit('toggleShow');
				this.$emit(
					'placeInfo',
					this.placeName,
					this.placeAddress,
					this.placeLatitude,
					this.placeLongitude,
				);
			} else {
				// alert('선택된 식당정보가 없습니다.');
				this.$swal({
					text: `선택된 식당정보가 없습니다.`,
					icon: 'warning',
					iconColor: '#ffcb00',
					confirmButtonText: '확인',
					confirmButtonColor: '#ffcb00',
				});
			}
		},
		initMap() {
			const container = document.getElementById('map');
			this.options = {
				center: new kakao.maps.LatLng(37.566826, 126.9786567),
				level: 6,
			};
			this.mapInstance = new kakao.maps.Map(container, this.options);
		},

		searchPlace(e) {
			this.keywordValue = e.target.value;
			const keyword = e.target.value.trim();
			if (keyword.length === 0) {
				return;
			}
			const ps = new kakao.maps.services.Places();
			ps.keywordSearch(keyword, (data, status, pgn) => {
				this.search.keyword = keyword;
				this.search.pgn = pgn;
				this.search.results = data;
			});
		},
		showPlace(place) {
			// 해당 좌표 정보 객체 생성 (y : lat, x : long)
			const moveLatLon = new kakao.maps.LatLng(place.y, place.x);
			this.marker = new kakao.maps.Marker({
				position: moveLatLon,
			});

			// 중심 좌표로 지도 이동
			this.mapInstance.setCenter(moveLatLon);

			// 해당 좌표 마커 생성
			this.marker.setMap(this.mapInstance);

			// 마커에 인포윈도우 생성
			const iwContent = `<div style="padding:5px;">${place.place_name}<br>${place.road_address_name}<br></div>`;

			this.infowindow = new kakao.maps.InfoWindow({
				position: moveLatLon,
				content: iwContent,
				removable: true,
			});

			this.infowindow.open(this.mapInstance, this.marker);
			this.placeName = place.place_name;
			this.placeAddress = place.address_name;
			this.placeLatitude = place.y;
			this.placeLongitude = place.x;
		},
	},
};
</script>
<style scoped lang="scss">
.map-back {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
	background: rgba(0, 0, 0, 0.2);
	.map-wrap {
		width: 70vw;
		.map-container {
			background: rgba(255, 255, 255, 1);
			overflow: hidden;
			position: relative;

			.map-area {
				width: 100%;
				overflow: hidden;

				.searchbox {
					height: 60vh;

					.results {
						.place {
							border-bottom: 1px solid rgba(0, 0, 0, 0.1);
							cursor: pointer;
							strong {
								display: block;
								font-size: 14px;
								font-weight: bold;
							}

							span {
								font-size: 11px;
							}
						}
					}
				}

				#map {
					height: 60vh;
				}
			}
		}
	}
	@media (max-width: 575.98px) {
		.map-wrap {
			width: 100vw;
			.map-container {
				background: rgba(255, 255, 255, 1);
				overflow: hidden;
				position: relative;

				.map-area {
					width: 100%;
					overflow: hidden;
					height: 70vh;

					.searchbox {
						height: 60vh;

						.results {
							.place {
								border-bottom: 1px solid rgba(0, 0, 0, 0.1);
								cursor: pointer;
								strong {
									display: block;
									font-size: 14px;
									font-weight: bold;
								}

								span {
									font-size: 11px;
								}
							}
						}
					}

					#map {
						height: 30vh;
						margin-bottom: 1rem;
					}
				}
			}
		}
	}
}
</style>
