<template>
	<div class="card rounded p-3" style="overflow: hidden">
		<div>
			<h5>{{ mannerTitle }}</h5>
			<ul :key="i" v-for="(manner, i) in myManners">
				<li class="mb-3">
					<div
						class="rounded-2"
						:class="[
							{ 'highlighter-active': highlighter === true },
							{ 'highlighter-active-nega': highlighter === false },
						]"
					>
						<div class="row">
							<div class="col-1">{{ i + 1 }}.</div>
							<div class="col-7">
								<span>{{ manner.question }}</span>
							</div>
							<div class="col-4" style="font-size: 1rem; text-align: end">
								<font-awesome-icon icon="fa-solid fa-spoon" />
								<span class="ps-1">{{ manner.count }}</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		mannerTitle: { type: String, default: '' },
		myManners: {
			type: Array,
			default: function () {
				return [];
			},
		},
		highlighter: { Boolean, default: '' },
	},
};
</script>
<style scoped lang="scss">
.favorite {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
}
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
}
.img-wrap.map-wrap {
	padding-bottom: 40%;
}
.img-wrap.pf {
	padding-bottom: 100%;
}
.img-wrap img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
ul,
dl {
	padding: 0;
	margin: 0;
	list-style: none;
}
li {
	display: block;
}
dl {
	display: flex;
}
dt {
	margin-right: 1rem;
}
</style>
