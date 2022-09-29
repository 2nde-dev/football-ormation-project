let tName = teamN.value;
let goalKeeper = gKeeper1.value;
let rightBack = rightB2.value;
let leftBack = leftB3.value;
let centerBack4 = centralB4.value;
let centerBack5 = centralB5.value;
let defensiveMidfielder = difensiveM6.value;
let centerMidfielder = centralM8.value;
let attackingCenterlMidfielder = attackingCM10.value;
let rightWinger = rightW7.value;
let leftWinger = leftW11.value;
let centerForward = centerF9.value;

class Club {
  constructor(
    teamName,
    GK_1,
    RB_2,
    LB_3,
    CB_4,
    CB_5,
    DM_6,
    CM_8,
    ACM_10,
    RW_7,
    LW_11,
    CF_9
  ) {
    this.teamName = teamName;
    this.GK_1 = GK_1;
    this.RB_2 = RB_2;
    this.LB_3 = LB_3;
    this.CB_4 = CB_4;
    this.CB_5 = CB_5;
    this.DM_6 = DM_6;
    this.CM_8 = CM_8;
    this.ACM_10 = ACM_10;
    this.RW_7 = RW_7;
    this.LW_11 = LW_11;
    this.CF_9 = CF_9;
  }
}
function formation() {
  const newClub = new Club(
    tName,
    goalKeeper,
    rightBack,
    leftBack,
    centerBack4,
    centerBack5,
    defensiveMidfielder,
    centerMidfielder,
    attackingCenterlMidfielder,
    rightWinger,
    leftWinger,
    centerForward
  );
  console.log(newClub.tName.value);
}
