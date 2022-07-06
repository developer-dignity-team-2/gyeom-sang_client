<template>
	<div>
		<h1>카카오맵 테스트</h1>
		<div class="controll">
			<button @click="zoomIn()">ZOOM+</button>
			<button @click="zoomOut()">ZOOM-</button>
			<span id="maplevel"></span>
		</div>
		<div class="map-area">
			<div class="searchbox">
				<div>
					<input
						type="text"
						v-model="keywordValue"
						@keyup.enter="searchPlace"
					/>
				</div>
				<div class="results">
					<div
						class="place"
						v-for="rs in search.results"
						:key="rs.id"
						@click="showPlace(rs)"
					>
						<h3>{{ rs.place_name }}</h3>
						<p>{{ rs.road_address_name }}</p>
					</div>
				</div>
			</div>
		</div>
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
			console.log(this.search);
		},
		showPlace(place) {
			console.log(place);
			const moveLatLon = new kakao.maps.LatLng(place.y, place.x);
			this.marker = new kakao.maps.Marker({
				position: moveLatLon,
			});
			// 해당 좌표로 지도 이동
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
			// kakao.maps.event.addListener(this.marker, 'click', function (place) {
			// 	console.log(place);
			// });
		},
		zoomIn() {
			const level = this.mapInstance.getLevel();
			this.mapInstance.setLevel(level - 1);
			this.displayLevel();
		},
		zoomOut() {
			const level = this.mapInstance.getLevel();
			this.mapInstance.setLevel(level + 1);
			this.displayLevel();
		},
		displayLevel() {
			const levelEl = document.getElementById('maplevel');
			levelEl.innerHTML = '현재 지도 레벨은' + this.mapInstance.getLevel();
		},
	},
};
</script>
