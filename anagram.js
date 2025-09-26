const readline = require("readline-sync")

 function check(str1,str2){

    let a = []
    let b = []

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    if(str1.length != str2.length || str1===str2) return "false" 
    
    else{

        a = str1.split("")
        a.sort()

        b = str2.split("")
        b.sort()

        for(let i=0; i<a.length;i++){

            if(a[i]!=b[i])
                return "false" 
        }

        return "true"
         
    }

}

    let s1 = readline.question("String A: ")
    let s2 = readline.question("String B: ")

    console.log(check(s1,s2));