// Write a code to find angles of triangle if two angles are given.
let angle1 = 30;
let angle2 = 60;
let angle3 = findAngle(angle1, angle2);

function findAngle(angle1, angle2) {
    let angle3 = 180 - angle1 - angle2;
    return angle3;
  }
  
  console.log(`${angle3}`);