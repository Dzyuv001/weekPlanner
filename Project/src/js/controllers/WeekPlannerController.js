import WeekPlannerView from "../views/WeekPlannerView";
import WeekDay from "../controllers/WeekDaysController";
import WeekPlannerModel from "../models/WeekPlannerModel";

export default class WeekPlanner {
  constructor(element, config, data) {
    this.WeekPlannerView = new WeekPlannerView();
    this.WeekPlannerView.RenderView(element);
    this.WeekPlannerModel = new WeekPlannerModel();
    this.WeekDays = [];
    const WeekDayData = this._GetDayData();
    this._ConfigureWeekDays(element, WeekDayData);
    this._Events(element);
  }

  _GetDayData() {
    return this.WeekPlannerModel.GetDayTitles();
  }

  _ConfigureWeekDays(element, WeekDayData) {
    for (let i = 0; i < 7; i++) {
      this.WeekDays.push(new WeekDay(element, WeekDayData[i], i));
    }
  }

  _Events(element) {
    document.getElementsByClassName(element)[0].addEventListener("click", e => {
      if (e.target && e.target.classList.contains("wkPlan-col__day")) {
        //used to get the percentage click position 
       let yPositionPercent = Math.floor(e.offsetY/e.target.offsetHeight*96);
       console.log(yPositionPercent);
      //  this.WeekDays[]
      }
    });
  }
}
