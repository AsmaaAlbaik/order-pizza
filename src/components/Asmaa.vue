<template>
	<div class="container">
		<div class="text-center">
			Item
			<h1>{{ this.$route.params.id }}</h1>
			<p>{{ item.name }}</p>
            <span>{{item.age}}</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id,
			list: [
				{
					id: 1,
                    name: 'asmaa',
                    age: 24
				},
				{
					id: 2,
                    name: 'nisreen',
                    age: 27
				},
			],
		};
	},
	computed: {
		item() {
			return this.list.find((item) => item.id == this.id);
		},
	},
};
</script>
