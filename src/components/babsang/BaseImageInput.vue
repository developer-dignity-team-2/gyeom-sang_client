<template>
	<div class="row my-4">
		<div class="col">
			<div class="img-wrap rounded">
				<div
					class="image-input"
					:style="{ 'background-image': `url(${imageData})` }"
					@click="chooseImage"
				>
					<input
						class="form-control"
						ref="fileInput"
						type="file"
						@input="onSelectFile"
					/>
					<button class="btn loadBtn btn-primary m-2" @click="chooseImage">
						<font-awesome-icon icon="fa-solid fa-image" />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			imageData: null,
		};
	},

	methods: {
		chooseImage() {
			this.$refs.fileInput.click();
		},
		onSelectFile() {
			const input = this.$refs.fileInput;

			const files = input.files;
			if (files && files[0]) {
				const reader = new FileReader();
				reader.onload = e => {
					this.imageData = e.target.result;
				};
				reader.readAsDataURL(files[0]);
			}
		},
	},
};
</script>
<style scoped lang="scss">
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
	background-color: #f7f7f7;
}
.image-input {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: block;
	//width: 500px;
	//height: 100px;
	cursor: pointer;
	background-size: cover;
	background-position: center center;
}
.loadBtn {
	position: absolute;
	bottom: 0;
	right: 0;
}
.placeholder {
	background: #f0f0f0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #333;
	font-size: 18px;
}
.form-control {
	display: none;
}
</style>
