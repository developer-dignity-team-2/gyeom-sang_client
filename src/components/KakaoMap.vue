<template>
	<div>
		<h1>카카오맵 테스트</h1>
		<div id="map" style="width: 500px; height: 500px"></div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			// 지도
			infowindow: '',
			map: null,
			// 장소 검색 객체
			ps: null,
			bounds: '',
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
		initMap() {
			this.infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
			console.log(this.infowindow);

			const mapContainer = document.getElementById('map'); // 지도를 표시할 div
			const mapOption = {
				center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
				level: 3, // 지도의 확대 레벨
			};

			this.map = new kakao.maps.Map(mapContainer, mapOption);

			this.ps = new kakao.maps.services.Places();
			console.log(this.ps);

			this.ps.keywordSearch('이태원 맛집', this.placesSearchCB);

			// const container = document.getElementById('map');
			// const options = {
			// 	center: new kakao.maps.LatLng(37.2429362, 131.8624647, 16),
			// 	level: 5,
			// };
			// this.map = new kakao.maps.Map(container, options);
			// console.log('로드 성공!');
		},
		placesSearchCB(data, status) {
			if (status === kakao.maps.services.status.ok) {
				this.bounds = new kakao.maps.LatLngBounds();

				for (let i = 0; i < data.length; i++) {
					this.displayMarker(data[i]);
					this.bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}
				this.map.setBounds(this.bounds);
			}
		},
		displayMarker(place) {
			const marker = new kakao.maps.Marker({
				map: this.map,
				position: new kakao.maps.LatLng(place.y, place.x),
			});

			marker.addEventListener('click', function () {
				this.infowindow.setContent(
					'<div style="padding:5px;font-size:12px;">' +
						place.place_name +
						'</div>',
				);
				this.infowindow.open(this.map, marker);
			});
		},
	},
};
</script>
