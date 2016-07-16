System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var JobPost;
    return {
        setters:[],
        execute: function() {
            JobPost = (function () {
                function JobPost(id, title, description, is_hosting_employee, is_urgent, business_id, user_id, job_type_id, job_naming_id, contract_type_id, study_level_id, diploma_id, job_xp_level_id, alert_frequency_id, week_work_hours, start_date, end_date, is_asap) {
                    this.id = id;
                    this.title = title;
                    this.description = description;
                    this.is_hosting_employee = is_hosting_employee;
                    this.is_urgent = is_urgent;
                    this.business_id = business_id;
                    this.user_id = user_id;
                    this.job_type_id = job_type_id;
                    this.job_naming_id = job_naming_id;
                    this.contract_type_id = contract_type_id;
                    this.study_level_id = study_level_id;
                    this.diploma_id = diploma_id;
                    this.job_xp_level_id = job_xp_level_id;
                    this.alert_frequency_id = alert_frequency_id;
                    this.week_work_hours = week_work_hours;
                    this.start_date = start_date;
                    this.end_date = end_date;
                    this.is_asap = is_asap;
                }
                return JobPost;
            }());
            exports_1("JobPost", JobPost);
        }
    }
});
