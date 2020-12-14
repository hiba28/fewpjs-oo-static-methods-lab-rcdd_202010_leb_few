class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize (string){
    return string.replace(`[^A-Za-z0-9-' ]+/g`,'')
  }
  static titleize (string){
     let not = ["the", "a"," an", "but", "of", "and", "for", "at", "by", "from"]
     let arr = string.split(" ")
     let output = []
     for(let i = 0 ; i < arr.length ; i++)
      {
        if(i === 0) output.push(arr[i])
        else{
          if(arr[i] !== not[i])
            output.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
          }
      }

     return output.join(" ")
  }
}
