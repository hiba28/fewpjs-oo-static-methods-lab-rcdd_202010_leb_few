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
     for(let i = 0 ; i < arr.length ; i++)
      {
        arr[0].toUpperCase()
        arr[i] !== not[i] ? arr[i].capitalize : arr[i]
      }

     return arr.join(" ")
  }
}
