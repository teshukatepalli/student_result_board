<template>
	<div>
		<div class="container p-4">
			<!-- {{results}} -->
			<h4>Student Result Board</h4>
			<table class="table">
				<thead class="table-light">
					<th>Student Name</th>
					<th>Roll Number</th>
					<th>Total Marks</th>
					<th>Status</th>
				</thead>
				<tbody>
					<template v-for="(result,index) in results">
						<tr :key="index" :class="getStatus(result.marks).total===heighest?'green':getStatus(result.marks).status === 'fail' ? 'red' : ''">
						<td class="capitalize">{{result.name}}</td>
						<td>{{result.rollNumber}}</td>
						<td>{{total(result.marks)}}</td>
						<td>{{getStatus(result.marks).total===heighest?'Topper':getStatus(result.marks).status}}</td>
					</tr>
					</template>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: "this is student result page",
			results: '',
			heighest: 0
		}
	},
	created() {
		this.studentResults()
	},
	methods: {
		studentResults() {
			this.$axios.get('/data.json')
			.then(response => {
				this.results = response.data.sort((a, b) => a.name.toLowerCase() !== b.name.toLowerCase() ? a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 : 0)
			})
		},
		getStatus(marks) {
			let sum = parseInt(marks.Maths) + parseInt(marks.English) + parseInt(marks.Science);
			sum > this.heighest?this.heighest = sum:null;
			if(parseInt(marks.Maths) < 19 || parseInt(marks.English) < 19 || parseInt(marks.Science) < 19 ) {
				return {
					status: 'fail',
					total: sum
				}
			}
			return {
					status: 'pass',
					total: sum
				}
		},
		total(marks) { 
			let total = parseInt(marks.Maths) + parseInt(marks.English) + parseInt(marks.Science)
			return total

		}
	}
}
</script>

<style>

</style>