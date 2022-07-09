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
	props: ['isShow', 'lat', 'long'],
	data() {
		return {
			marker: '',
			mapInstance: '',
			options: {
				center: '',
				level: '',
			},
			placeName: '',
			placeAddress: '',
		};
	},
	mounted() {
		window.addEventListener('resize', this.initMap);
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
			const placeLatLon = new kakao.maps.LatLng(this.lat, this.long);
			this.options = {
				center: placeLatLon,
				level: 2,
			};
			this.mapInstance = new kakao.maps.Map(container, this.options);
			this.marker = new kakao.maps.Marker({
				position: placeLatLon,
			});

			this.marker.setMap(this.mapInstance);
		},
	},
};
</script>
<style scoped lang="scss"></style>
