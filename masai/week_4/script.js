var arrobj=[]

function stdDetails(){
    var name=document.getElementById('name').value
    var grade=document.getElementById('grade').value
    var section=document.getElementById('section').value
    var examtype=document.getElementById('examtype').value
    var subject=document.getElementById('subject').value
    var marks=document.getElementById('marks').value
   
    var stdobj = {
        Name: name,
        Grade:grade,
        Section:section,
        Examtype:examtype,
        Subject:subject,
        Marks:marks
    }

    arrobj.push(stdobj);
    event.preventDefault();
    console.log(arrobj);

    //assign value to filter
    var std1=document.createElement('option')
    std1.innerHTML=name
    std1.value=name
    var optionfilter=document.getElementById('selName')
    optionfilter.appendChild(std1)
}


//to ses student details
function findDeatils(){
    var studentName=document.getElementById('selName').value
    var result=document.getElementById('showResult')
    var show=""
    //alert(studentName)
    arrobj.forEach(function(element){
    //console.log(element)
        if(studentName==element.Name){
            //console.log(element)
            for(key in element){
                show=show+key+':- '+element[key]+'<br />'
            }
        }
    })
    result.innerHTML=show
}


//filter std through Grade
function selectGradeFilter(){
    var stdGrade=document.querySelector('.selectFilter').value
    alert(stdGrade)
    var marks=[]
    arrobj.forEach(function(element){
        if(stdGrade==element.Grade){
            for(key in element){
                //marks+=element[key]
                marks.push(element[key])
            }
        }
    })
    //alert(marks)
}



