function accordinClick(target){
    console.log("open");
    console.log(target);
    
    const sections = document.getElementsByClassName("accordion-section");
    for(let i=0; i<sections.length; i++){
    sections[i].style.contentVisibility="hidden";

    }

    const section =document.getElementById(target);
    section.style.contentVisibility="visible";

//     if (section.style.contentVisibility=="visible"){
//         section.style.contentVisibility="hidden";
//     }
//     else{
//         section.style.contentVisibility="visible";
//     }
   
//     var divToHide = document.getElementsByClassName(accordion-section);
//    ";
//     }
    

}
