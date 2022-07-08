<template>
	<div class="mapBackground">
		<div class="mapContainer">
			<div id="map" style="width: auto; padding-bottom: 40%"></div>
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
				console.log('----------kakao maps object----------');
				console.log(kakao.maps);
				kakao.maps.load(this.initMap);
			});
		} else {
			this.initMap();
		}
	},

	unmounted() {},
	methods: {
		initMap() {
			const container = document.getElementById('map');
			this.options = {
				center: new kakao.maps.LatLng(37.566826, 126.9786567),
				level: 6,
			};
			this.mapInstance = new kakao.maps.Map(container, this.options);
			console.log(this.mapInstance);
			this.displayLevel();
		},

		showPlace(place) {
			console.log('------------선택한 마커 정보------------');
			console.log(place);
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
		},
	},
};
</script>
<style scoped lang="scss">
//.mapBackground {
//	//position: fixed;
//	//display: flex;
//	//justify-content: center;
//	//align-items: center;
//	//width: 100vw;
//	//height: 100vh;
//	//top: 50%;
//	//left: 50%;
//	//transform: translate3d(-50%, -50%, 0);
//	//background: rgba(0, 0, 0, 0.5);
//	.mapContainer {
//		button.close {
//			position: absolute;
//			top: 0;
//			right: 0;
//		}
//		background: rgba(255, 255, 255, 1);
//		width: 50vw;
//		height: 70vh;
//		overflow: hidden;
//		position: relative;
//
//		.map-area {
//			.searchbox {
//				.results {
//					h3 {
//						font-size: 12px;
//						font-weight: bold;
//					}
//					p {
//						font-size: 12px;
//					}
//					.place {
//						cursor: pointer;
//						border-bottom: 1px solid #999;
//					}
//				}
//			}
//			#map {
//			}
//		}
//	}
//}
</style>
