
  const array = [5, 2, 8, 1, 4];

 let ascen = array.sort((a,b)=>{
    return a - b ;
  })
  console.log(ascen)

  //   ==========

  let descen = array.sort((a,b)=>{
      return b - a ;
    })
  console.log(descen)