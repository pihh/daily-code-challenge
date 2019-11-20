// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  let can = true;

  for (let i = 0; i < note.length; i++) {
    const index = magazine.indexOf(note[i]);
    if (-1 === index) {
      can = false;
      break;
    }
    magazine.splice(index, 1);
  }
  console.log(can ? "Yes" : "No");
}
