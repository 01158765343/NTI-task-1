const fs =require("fs")

function oneStudent (name ,grades) {
    return {
        name,
        grades
    }
}

function addOneStudent(name , grades){
    let s =oneStudent(name, grades)
    let all = allStudent ()
    all.push(s)
    console.log(all)
    const a=JSON.stringify(all)
    fs.writeFileSync("./student/notes.json",a)

}

function allStudent (){
    try {
        const a =fs.readFileSync("./student/notes.json" ).toString()
        // console.log(JSON.parse(a),"from all")
        return JSON.parse(a)
    }catch (e){
        console.log(e)
        return []
    }
}


function handelGrades (name){
    let all=allStudent()




    let stuaden= all.filter((x)=>{
        return (x !==name)
    })

    if (stuaden){
        allGrades=[]
        stuaden.grades.map(x=>{
            x.numper()
            allGrades.push(x)
        })
        let total =allGrades[1]+allGrades[2]+allGrades[0] 
    
        return total
    } else {
        return "not found"
    }
    
}


function deletStudent (name){
    try {
        let a= allStudent()
        console.log(a)
        let s = a.filter(x=>{
            return ( x.name !== name )
    
        })
        const aa=JSON.stringify(s)
        fs.writeFileSync("./student/notes.json",a)
        return aa
    }catch(e){
        console.log(e)
    }
    // let s = a.filter(x=>{
    //     return ( x.name !== name )

    // })
    // const aa=JSON.stringify(s)
    // fs.writeFileSync("./student/notes.json",a)
    // return aa

}


module.exports ={
    addOneStudent,
    allStudent,
    oneStudent,
    deletStudent,
    handelGrades
}