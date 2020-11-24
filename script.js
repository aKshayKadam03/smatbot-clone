// partner page start

   var cards = document.querySelectorAll(".partnerCard")
   
   for(var i = 0; i < cards.length; i++){
   
   if( i === 0){
      cards[0].addEventListener("mouseover",partnerColorChange1)
      cards[0].addEventListener("mouseout",backToOriginal1)
   }
   else if( i===1 ){
      cards[1].addEventListener("mouseover",partnerColorChange2)
      cards[1].addEventListener("mouseout",backToOriginal2)
   }
   else{
      cards[2].addEventListener("mouseover",partnerColorChange3)
      cards[2].addEventListener("mouseout",backToOriginal3)
   }
   
   }
  

   function partnerColorChange1(){
      var top = document.querySelectorAll(".cardTop")
         for( var i = 0; i < top.length; i++){
            top[0].style.backgroundImage = "linear-gradient(to right, #8252fa 0%, #eca2f1 100%), radial-gradient(circle at top left, #8252fa, #eca2f1)";
            top[0].style.color = "white"
         }
      var bottom = document.querySelectorAll(".partnerBtn")
         for( var i = 0; i < top.length; i++){
            bottom[0].style.backgroundImage = "linear-gradient(to right, #8252fa 0%, #eca2f1 100%), radial-gradient(circle at top left, #8252fa, #eca2f1)";
         }
      
      var btn = document.querySelectorAll(".primaryBtn")
         for( var i = 0; i < btn.length; i++){
            btn[0].style.border = none;
           
         }
       
   }
   
   function backToOriginal1(){
      var top = document.querySelectorAll(".cardTop")
      for( var i = 0; i < top.length; i++){
         top[0].style.backgroundImage = "linear-gradient(to right, #fff 0%, #fff 100%), radial-gradient(circle at top left, #fff, #fff)"; 
         top[0].style.color = "black"
      }
      var bottom = document.querySelectorAll(".partnerBtn")
      for( var i = 0; i < top.length; i++){
         bottom[0].style.backgroundImage = "linear-gradient(to right, #fff 0%, #fff 100%), radial-gradient(circle at top left, #fff, #fff)"; 
      }
   }
   
   function partnerColorChange2(){
      var top = document.querySelectorAll(".cardTop")
         for( var i = 0; i < top.length; i++){
            top[1].style.backgroundImage = "linear-gradient(to right, #8252fa 0%, #eca2f1 100%), radial-gradient(circle at top left, #8252fa, #eca2f1)";
            top[1].style.color = "white"
         }
      var bottom = document.querySelectorAll(".partnerBtn")
         for( var i = 0; i < top.length; i++){
            bottom[1].style.backgroundImage = "linear-gradient(to right, #8252fa 0%, #eca2f1 100%), radial-gradient(circle at top left, #8252fa, #eca2f1)";
            
         }
      
      var btn = document.querySelectorAll(".primaryBtn")
         for( var i = 0; i < btn.length; i++){
            btn[1].style.border = none;
           
         }
       
   }
   
   function backToOriginal2(){
      var top = document.querySelectorAll(".cardTop")
      for( var i = 0; i < top.length; i++){
         top[1].style.backgroundImage = "linear-gradient(to right, #fff 0%, #fff 100%), radial-gradient(circle at top left, #fff, #fff)"; 
         top[1].style.color = "black" 
      }
      var bottom = document.querySelectorAll(".partnerBtn")
      for( var i = 0; i < top.length; i++){
         bottom[1].style.backgroundImage = "linear-gradient(to right, #fff 0%, #fff 100%), radial-gradient(circle at top left, #fff, #fff)"; 
         
      }
   }
   
   
   function partnerColorChange3(){
      var top = document.querySelectorAll(".cardTop")
         for( var i = 0; i < top.length; i++){
            top[2].style.backgroundImage = "linear-gradient(to right, #8252fa 0%, #eca2f1 100%), radial-gradient(circle at top left, #8252fa, #eca2f1)";
            top[2].style.color = "white"
         }
      var bottom = document.querySelectorAll(".partnerBtn")
         for( var i = 0; i < top.length; i++){
            bottom[2].style.backgroundImage = "linear-gradient(to right, #8252fa 0%, #eca2f1 100%), radial-gradient(circle at top left, #8252fa, #eca2f1)";
            
         }
      
      var btn = document.querySelectorAll(".primaryBtn")
         for( var i = 0; i < btn.length; i++){
            btn[2].style.border = none;
         }
       
   }
   
   function backToOriginal3(){
      var top = document.querySelectorAll(".cardTop")
      for( var i = 0; i < top.length; i++){
         top[2].style.backgroundImage = "linear-gradient(to right, #fff 0%, #fff 100%), radial-gradient(circle at top left, #fff, #fff)"; 
         top[2].style.color = "black"
      }
      var bottom = document.querySelectorAll(".partnerBtn")
      for( var i = 0; i < top.length; i++){
         bottom[2].style.backgroundImage = "linear-gradient(to right, #fff 0%, #fff 100%), radial-gradient(circle at top left, #fff, #fff)"; 
      }
   }
   
   
   
   

// partner page end



// var submit = document.getElementById("sub")
 
// submit.addEventListener("click",function(e){
//    e.preventDefault(); 
// })



// var imgBtn = document.getElementById("clickableImage")
  
// imgBtn.addEventListener("click",openWindow)
    

 
//  function openWindow(){
//     var divMain = document.createElement("div")
//     document.body.appendChild(divMain);
    
//     divMain.setAttribute("class","chatBox")
    
//     var div1 = document.createElement("div")
//     div1.style.backgroundColor = "purple"
//     divMain.appendChild(div1)
    
//     var botIcon = document.createElement("img")
//     botIcon.setAttribute("src","https://custpostimages.s3.ap-south-1.amazonaws.com/11/favicon.png")
//     botIcon.style.height = "55px"
//     div1.appendChild(botIcon)
    
//     var head = document.createElement("h1")
//     head.textContent = "SmatBot"
//     head.style.color = "white"
//     div1.appendChild(head)
    
//     var clickImage = document.getElementById("clickableImage")
//     clickImage.setAttribute("src","https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/close_modal_white.png")
//     clickImage.style.backgroundColor = "black"
//     clickImage.style.borderRadius = "50%"
//     clickImage.style.height = "25px"
//     clickImage.style.width = "25px"
//     clickImage.style.padding = "20px"
    
//     imgBtn.addEventListener("click",function(){ 
//         var div = document.querySelector(".chatBox")
//         div.remove();
//         clickImage.setAttribute("src","https://custpostimages.s3.ap-south-1.amazonaws.com/11/favicon.png")
       
//    })

     
    
//  }
  
  