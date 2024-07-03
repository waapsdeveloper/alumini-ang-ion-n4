import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { JobApplyComponent } from './job-apply/job-apply.component';
@Component({
  selector: 'app-job-profle',
  templateUrl: './job-profle.page.html',
  styleUrls: ['./job-profle.page.scss'],
})
export class JobProflePage extends BasePage implements OnInit {

  job: any;
  jobId: any;
  constructor(injector: Injector, private route: ActivatedRoute) {
    super(injector)
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.jobId = id;
    this.initialize()
  }

  async initialize() {
    const res = await this.network.getJobsById(this.jobId);
    console.log(res)
    this.job = res;

  }

  getNowDate(date: string) {

    const d = moment(date).format('hh:mm a');
    return d;
  }
  applyToJob(id: any) {

    this.modals.present(JobApplyComponent, { id: id })

  }

}
