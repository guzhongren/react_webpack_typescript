// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../core/JSONSupport","../../core/kebabDictionary","./GPMessage"],function(b,a,c){a=a({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});return b.createSubclass({declaredClass:"esri.tasks.support.JobInfo",
properties:{jobId:"",jobStatus:{value:"",json:{read:a.fromJSON}},messages:{value:[],type:[c]}}})});