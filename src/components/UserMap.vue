<template>
	<template>
		<div id="map"></div>
	</template>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			sampleData: '',
			map: null,
		};
	},
	mounted() {
		if (window.kakao && window.kakao.maps) {
			this.initMap();
		} else {
			const script = document.createElement('script');
			/* global kakao */
			script.onload = () => kakao.maps.load(this.initMap);
			script.src =
				'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=eb2949af46203caa71e9c2090bc8f54c';
			document.head.appendChild(script);
		}
	},
	unmounted() {},
	methods: {
		initMap() {
			var mapContainer = document.getElementById('map'), // 지도를 표시할 div
				mapOption = {
					center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
					level: 3, // 지도의 확대 레벨
				};
			this.map = new kakao.maps.Map(mapContainer, mapOption);
			console.log(this.map);

			// 마커가 표시될 위치입니다
			var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667); //eslint-disable-line no-unused-vars

			// 마커를 생성합니다
			var marker = new kakao.maps.Marker({
				position: this.markerPosition,
			});

			// 마커가 지도 위에 표시되도록 설정합니다
			marker.setMap(this.map);

			// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
			// marker.setMap(null);
		},
	},
};
</script>
