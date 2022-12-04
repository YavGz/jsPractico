let arrEst = ["nico", "zule"]

function solution(estudiantes, deathCount, nuevo) {
  let newEst = estudiantes.map(
    function () {
      
      for (let i = deathCount; i >= 0; i-- ) {

        debugger

        if (i !== 0) {
          estudiantes.pop();
          console.log(estudiantes)
          console.log(i);
        } else if (i == 0) {
          estudiantes.push(nuevo);
          console.log(estudiantes);
        }
      }

      
      

    })
}

// solution(arrEst, 1, "Diego")