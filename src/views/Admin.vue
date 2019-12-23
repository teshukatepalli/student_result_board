<template>
	<div>
		<div class="container p-4">
			<!-- {{results}} -->
			<h4>School Admitions</h4>
            <button @click="show = !show" class="float-right primary-button">Admission Form</button>
			<table class="table">
				<thead class="table-light">
					<th>Name</th>
					<th>Last Name</th>
					<th>Class</th>
					<th>Year of passing</th>
                    <th>Percentage of marks</th>
				</thead>
				<tbody>
					<template v-if="admissions.length">
						<tr v-for="(admission,index) in admissions" :key="index">
                            <td class="capitalize">{{admission.name}}</td>
                            <td>{{admission.last_name}}</td>
                            <td>{{admission.class}}</td>
                            <td>{{admission.year_of_passing}}</td>
                            <td>{{admission.percentage}}</td>
                        </tr>
					</template>
				</tbody>
			</table>
            <div v-if="admissions.length === 0">
                <p class="text-center">No Admintions Found</p>
            </div>
		</div>
        <div v-if="show" class="model">
            <div class="model-container">
                <div @click="show = !show" class="close-button">
                    <img class="float-right" src="../assets/close.svg" width="20px" alt="">
                </div>
                <h4>Admission Form</h4>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model="admissions_payload.name"  placeholder="name" onkeypress="return event.charCode >= 97 && event.charCode <= 122 || event.charCode >= 65 && event.charCode <= 90">
                    <span class="err">{{this.error.name}}</span>
                </div>
                <div class="form-group">
                    <label for="last name">Last Name</label>
                    <input type="text" v-model="admissions_payload.last_name" placeholder="last name" onkeypress="return event.charCode >= 97 && event.charCode <= 122 || event.charCode >= 65 && event.charCode <= 90 || admissions_payload.last_name < 21 ">
                    <span class="err">{{this.error.last_name}}</span>
                </div>
                <div class="form-group">
                    <label for="class">Class</label>
                    <input type="text" v-model="admissions_payload.class" placeholder="class" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode >= 97 && event.charCode <= 122 || event.charCode >= 65 && event.charCode <= 90">
                    <span class="err">{{this.error.class}}</span>
                </div>
                <div class="form-group">
                    <label for="year">Year of passing</label>
                    <input type="text" v-model="admissions_payload.year_of_passing" placeholder="year of passing" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
                    <span class="err">{{this.error.year_of_passing}}</span>
                </div>
                <div class="form-group">
                    <label for="percentage">Percentage</label>
                    <input type="text" v-model="admissions_payload.percentage" placeholder="percentage" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
                    <span class="err">{{this.error.percentage}}</span>
                </div>
                <button @click="checkerror()" class="float-right primary-button">SUBMIT</button>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            msg: "this is student result page",
            admissions: [],
            admissions_payload: {
                name: '',
                last_name: '',
                class: '',
                year_of_passing: '',
                percentage: ''
            },
            error: {
                name: '',
                last_name: '',
                class: '',
                year_of_passing: '',
                percentage: ''
            },
            show: false
		}
	},
	created() {
	},
	methods: {
        checkerror() {
            this.removeError()
            if(this.admissions_payload.name.length > 20) {
                this.error.name = 'Name should be less than 20 characters'
            }
            if(this.admissions_payload.name === '') {
                this.error.name = 'Please enter name'
            }
            if(this.admissions_payload.last_name === '') {
                this.error.last_name = 'Please enter last name'
            }
            if(this.admissions_payload.class === '') {
                this.error.class = 'Please enter class'
            }
            if(this.admissions_payload.last_name.length > 20) {
                this.error.last_name = 'Last Name should be less than 20 characters'
            }
            if(this.admissions_payload.year_of_passing > 2017) {
                this.error.year_of_passing = 'Year of passing should be less than 2017 or equal'
            }
            if(this.admissions_payload.year_of_passing === '') {
                this.error.year_of_passing = 'Please enter year of passing'
            }
            if(this.admissions_payload.percentage === '') {
                this.error.percentage = 'Please enter percentagge'
            }
            if(this.admissions_payload.name.length > 20 || this.admissions_payload.name === '' || this.admissions_payload.last_name === '' || this.admissions_payload.class === '' || this.admissions_payload.last_name.length > 20 || this.admissions_payload.year_of_passing > 2017 || this.admissions_payload.year_of_passing === '' || this.admissions_payload.percentage === '') {
            } else {
                this.updateAdmission()
            }
        },
        updateAdmission() {
            this.removeError()
            console.log(this.admissions_payload)
            this.admissions.push(JSON.parse(JSON.stringify(this.admissions_payload)));
            this.emptyPayload()
            this.show = !this.show;
        },
        emptyPayload() {
            this.admissions_payload.name = '';
            this.admissions_payload.last_name = '';
            this.admissions_payload.class = '';
            this.admissions_payload.year_of_passing = '';
            this.admissions_payload.percentage = '';
            this.removeError()
        },
        removeError() {
            this.error.name = ''
            this.error.last_name = ''
            this.error.year_of_passing = ''
        }
	}
}
</script>

<style>

</style>