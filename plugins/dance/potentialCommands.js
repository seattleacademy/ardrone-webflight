//possible commands

deps.client.takeoff();
this.takeoff() //within after
this.stop();
this.clockwise(.5);  //value between 0 and 1
this.clockwise(-.5);  //turns counter-clockwise
this.land();
this.up(.5); //speed between 0 and 1
this.right(.5); //speed between 0
this.right(-.5); //speed between 0
this.front(.5); //speed between 0
this.animateLeds("snake",2,3); //name, hz (cycles per second), duration in seconds

// var LED_ANIMATIONS = exports.LED_ANIMATIONS = [
//   'blinkGreenRed','blinkGreen','blinkRed','blinkOrange','snakeGreenRed','fire',
//   'standard','red','green','redSnake','blank','rightMissile','leftMissile','doubleMissile',
//   'frontLeftGreenOthersRed','frontRightGreenOthersRed','rearRightGreenOthersRed',
//   'rearLeftGreenOthersRed','leftGreenRightRed','leftRedRightGreen','blinkStandard',
// ];

