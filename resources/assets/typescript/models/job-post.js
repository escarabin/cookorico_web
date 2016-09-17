"use strict";
var JobPost = (function () {
    function JobPost(id, title, description, business_id, user_id, job_type_id, job_naming_id, contract_type_id, study_level_id, diploma_id, job_xp_level_id, alert_frequency_id, week_work_hours, start_date, end_date, is_asap, is_hosting_employee, is_urgent) {
        if (is_asap === void 0) { is_asap = false; }
        if (is_hosting_employee === void 0) { is_hosting_employee = false; }
        if (is_urgent === void 0) { is_urgent = false; }
        this.id = id;
        this.title = title;
        this.description = description;
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
        this.is_hosting_employee = is_hosting_employee;
        this.is_urgent = is_urgent;
    }
    return JobPost;
}());
exports.JobPost = JobPost;
//# sourceMappingURL=job-post.js.map