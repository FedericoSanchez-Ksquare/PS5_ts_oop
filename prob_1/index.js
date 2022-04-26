const work = document.getElementById("workId");
const workHours = document.getElementById("workHoursId");
const workPeriod = document.getElementById("workPeriodId");

const play = document.getElementById("playId");
const playHours = document.getElementById("playHoursId");
const playPeriod = document.getElementById("playPeriodId");

const study = document.getElementById("studyId");
const studyHours = document.getElementById("studyHoursId");
const studyPeriod = document.getElementById("studyPeriodId");

const exercise = document.getElementById("exerciseId");
const exerciseHours = document.getElementById("exerciseHoursId");
const exercisePeriod = document.getElementById("exercisePeriodId");

const social = document.getElementById("socialId");
const socialHours = document.getElementById("socialHoursId");
const socialPeriod = document.getElementById("socialPeriodId");

const self = document.getElementById("selfCareId");
const selfHours = document.getElementById("selfHoursId");
const selfPeriod = document.getElementById("selfPeriodId");

const btnDaily = document.getElementById("btnDaily");
const btnWeekly = document.getElementById("btnWeekly");
const btnMonthly = document.getElementById("btnMonthly");

const getDataDaily = async () => {
  let data;
  let res = await fetch(
    "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
  );
  data = await res.json();

  work.innerText = data[0].title;
  workHours.innerText = data[0].timeframes.daily.current + " Hours";
  workPeriod.innerText =
    "Last day - " + data[0].timeframes.daily.previous + "hrs";

  play.innerText = data[1].title;
  playHours.innerText = data[1].timeframes.daily.current + " Hours";
  playPeriod.innerText =
    "Last day - " + data[1].timeframes.daily.previous + "hrs";

  study.innerText = data[2].title;
  studyHours.innerText = data[2].timeframes.daily.current + " Hours";
  studyPeriod.innerText =
    "Last day - " + data[2].timeframes.daily.previous + "hrs";

  exercise.innerText = data[3].title;
  exerciseHours.innerText = data[3].timeframes.daily.current + " Hours";
  exercisePeriod.innerText =
    "Last day - " + data[3].timeframes.daily.previous + "hrs";

  social.innerText = data[4].title;
  socialHours.innerText = data[4].timeframes.daily.current + " Hours";
  socialPeriod.innerText =
    "Last day - " + data[4].timeframes.daily.previous + "hrs";

  self.innerText = data[5].title;
  selfHours.innerText = data[5].timeframes.daily.current + " Hours";
  selfPeriod.innerText =
    "Last day - " + data[5].timeframes.daily.previous + "hrs";
};
const getDataWeekly = async () => {
  let data;
  let res = await fetch(
    "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
  );
  data = await res.json();

  work.innerText = data[0].title;
  workHours.innerText = data[0].timeframes.weekly.current + " Hours";
  workPeriod.innerText =
    "Last Weekly - " + data[0].timeframes.weekly.previous + "hrs";

  play.innerText = data[1].title;
  playHours.innerText = data[1].timeframes.weekly.current + " Hours";
  playPeriod.innerText =
    "Last Weekly - " + data[1].timeframes.weekly.previous + "hrs";

  study.innerText = data[2].title;
  studyHours.innerText = data[2].timeframes.weekly.current + " Hours";
  studyPeriod.innerText =
    "Last Weekly - " + data[2].timeframes.weekly.previous + "hrs";

  exercise.innerText = data[3].title;
  exerciseHours.innerText = data[3].timeframes.weekly.current + " Hours";
  exercisePeriod.innerText =
    "Last Weekly - " + data[3].timeframes.weekly.previous + "hrs";

  social.innerText = data[4].title;
  socialHours.innerText = data[4].timeframes.weekly.current + " Hours";
  socialPeriod.innerText =
    "Last Weekly - " + data[4].timeframes.weekly.previous + "hrs";

  self.innerText = data[5].title;
  selfHours.innerText = data[5].timeframes.weekly.current + " Hours";
  selfPeriod.innerText =
    "Last Weekly - " + data[5].timeframes.weekly.previous + "hrs";
};
const getDataMonthly = async () => {
  let data;
  let res = await fetch(
    "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
  );
  data = await res.json();

  work.innerText = data[0].title;
  workHours.innerText = data[0].timeframes.monthly.current + " Hours";
  workPeriod.innerText =
    "Last Month - " + data[0].timeframes.monthly.previous + "hrs";

  play.innerText = data[1].title;
  playHours.innerText = data[1].timeframes.monthly.current + " Hours";
  playPeriod.innerText =
    "Last Month - " + data[1].timeframes.monthly.previous + "hrs";

  study.innerText = data[2].title;
  studyHours.innerText = data[2].timeframes.monthly.current + " Hours";
  studyPeriod.innerText =
    "Last Month - " + data[2].timeframes.monthly.previous + "hrs";

  exercise.innerText = data[3].title;
  exerciseHours.innerText = data[3].timeframes.monthly.current + " Hours";
  exercisePeriod.innerText =
    "Last Month - " + data[3].timeframes.monthly.previous + "hrs";

  social.innerText = data[4].title;
  socialHours.innerText = data[4].timeframes.monthly.current + " Hours";
  socialPeriod.innerText =
    "Last Month - " + data[4].timeframes.monthly.previous + "hrs";

  self.innerText = data[5].title;
  selfHours.innerText = data[5].timeframes.monthly.current + " Hours";
  selfPeriod.innerText =
    "Last Month - " + data[5].timeframes.monthly.previous + "hrs";
};

const getDataOnLoad = async () => {
  btnDaily.setAttribute("style", "color: white");
  btnWeekly.setAttribute("style", "color:rgba(255, 255, 255, 0.63)");
  btnMonthly.setAttribute("style", "color:rgba(255, 255, 255, 0.63)");
  let data;
  let res = await fetch(
    "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
  );
  data = await res.json();

  work.innerText = data[0].title;
  workHours.innerText = data[0].timeframes.daily.current + " Hours";
  workPeriod.innerText =
    "Last day - " + data[0].timeframes.daily.previous + "hrs";

  play.innerText = data[1].title;
  playHours.innerText = data[1].timeframes.daily.current + " Hours";
  playPeriod.innerText =
    "Last day - " + data[1].timeframes.daily.previous + "hrs";

  study.innerText = data[2].title;
  studyHours.innerText = data[2].timeframes.daily.current + " Hours";
  studyPeriod.innerText =
    "Last day - " + data[2].timeframes.daily.previous + "hrs";

  exercise.innerText = data[3].title;
  exerciseHours.innerText = data[3].timeframes.daily.current + " Hours";
  exercisePeriod.innerText =
    "Last day - " + data[3].timeframes.daily.previous + "hrs";

  social.innerText = data[4].title;
  socialHours.innerText = data[4].timeframes.daily.current + " Hours";
  socialPeriod.innerText =
    "Last day - " + data[4].timeframes.daily.previous + "hrs";

  self.innerText = data[5].title;
  selfHours.innerText = data[5].timeframes.daily.current + " Hours";
  selfPeriod.innerText =
    "Last day - " + data[5].timeframes.daily.previous + "hrs";
};

const buttonSelected = (value) => {
  switch (value) {
    case 1:
      btnDaily.setAttribute("style", "color: white");
      btnWeekly.setAttribute("style", "color:rgba(255, 255, 255, 0.63)");
      btnMonthly.setAttribute("style", "color:rgba(255, 255, 255, 0.63)");
      break;
    case 2:
      btnWeekly.setAttribute("style", "color:white");
      btnDaily.setAttribute("style", "color:rgba(255, 255, 255, 0.63)");
      btnMonthly.setAttribute("style", "color:rgba(255, 255, 255, 0.63)");
      break;
    case 3:
      btnMonthly.setAttribute("style", "color:white");
      btnWeekly.setAttribute("style", "color:rgba(255, 255, 255, 0.63)");
      btnDaily.setAttribute("style", "color:rgba(255, 255, 255, 0.63)");
      break;
  }
};

getDataOnLoad();
