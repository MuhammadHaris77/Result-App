 

    var studentData = [
        {
             name : "raza",
             contact : 03153214541,
             age : 25 ,
             institute : "SAIMS",
             result : 1
           },
        {
              name : "faizan",
              contact : 03252514541,
              age : 12 ,
              institute : "SAIMS",
              result : 0
            },
         {
              name : "salman",
              contact : 03152514551,
              age : 16 ,
              institute : "SAIMS",
              result : 1
                },
         {
              name : "kashan",
              contact : 03352514541,
              age : 18 ,
              institute : "SAIMS",
              result : 0
            },
         {
              name : "faizan",
              contact : 03152514541,
              age : 16 ,
              institute : "SAIMS",
              result : 1
            },
         {
              name : "noman",
              contact : 03152514541,
              age : 14 ,
              institute : "SAIMS",
              result : 0
            },
         {
              name : "yahiya",
              contact : 03122514541,
              age : 12 ,
              institute : "SAIMS",
              result : 1
            },
         {
              name : "faisal",
              contact : 03152514541,
              age : 18 ,
              institute: "SAIMS",
              result : 0
            },
         {
              name : "umair",
              contact : 031544541,
              age : 21 ,
              institute : "SAIMS",
              result : 1
            },
         {
              name : "aqeel",
              contact : 03452514541,
              age : 17 ,
              institute : "SAIMS",
              result : 0
            },
      
      
      
       ]

       
       for (i = 0  ; i < studentData.length; i++  )
       {
         studentData[i].rollNo =   i+1 
        
       }

       var inp = document.getElementById('rollNumber');
       var dName = document.getElementById('PassoutPut')
       var dResult = document.getElementById('FailoutPut')   
      

     function searchRes(){

      for ( j = 0  ; j < studentData.length; j++ ){

        if(  studentData[j].rollNo == inp.value ){


          if(studentData[j].result) {
            dName.innerHTML = studentData[j].name
            dResult.innerHTML =  "Pass"
         }
         else{
               dName.innerHTML = studentData[j].name
               dResult.innerHTML =  "Fail"
         }
        }
      }


     }
        
      







