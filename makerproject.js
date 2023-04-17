
function newProject(){
  {
    var mymediumarray= new Array("Paper","Clay","Glass","Fabric","Fiber","Knitting","Crochet","Poem","Essay","Short Story","Natural or Found","Food","Jewelry","Music","Drawing","Painting","Digital","Collage","Photography","Embroidery","Programming");
    var randomMedium = mymediumarray[Math.floor(Math.random() * mymediumarray.length)];
    //alert(random);
    document.getElementById("mediummessage").innerHTML=randomMedium;
}

{
    var mytopicarray= new Array("Space","Flowers","Witchy","Ocean","Fairytale","Folkart","Functional","Bookish","Nature/Woods","Home","Music","LGBTQIA+","Night","Day","Winter","Autumn","Summer","Spring","Christmas","Future","History","Clothing","Interpretation","Replica","Americana","Celtic","French Canadian","Sports","Family","Fandom","Self","Philosophy");
    var randomTopic = mytopicarray[Math.floor(Math.random() * mytopicarray.length)];
    //alert(random);
    document.getElementById("topicmessage").innerHTML=randomTopic;
}
{
    var myaudiencearray= new Array("Me","Abby","Violet","John","Mom","Dad","Grandma","Friend","Children","Adults","Queer folks","Gift");
    var randomAudience = myaudiencearray[Math.floor(Math.random() * myaudiencearray.length)];
    //alert(random);
    document.getElementById("audiencemessage").innerHTML=randomAudience;
}
  {
    var mytimearray= new Array("1 hour","4 hours","8 hours","2 days","4 days","1 week","2 weeks","1 month","3 months","6 months","1 year");
    var randomTime = mytimearray[Math.floor(Math.random() * mytimearray.length)];
    //alert(random);
    document.getElementById("timemessage").innerHTML=randomTime;
}
  // Set the date we're counting down to
  //var randomTime = "1 year";

  countDownDate = new Date();
  if(randomTime === "2 days"){
    var plusDays = 2;
    //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + plusDays);
    }
    else if (randomTime === "1 hour"){
      var plusHours = 1;
      //countDownDate = new Date();
              countDownDate.setHours(countDownDate.getHours() + plusHours);
    }
    else if (randomTime === "4 hours"){
      var plusHours = 4;
      //countDownDate = new Date();
              countDownDate.setHours(countDownDate.getHours() + plusHours);
    }
   else if (randomTime === "8 hours"){
      var plusHours = 8;
      //countDownDate = new Date();
              countDownDate.setHours(countDownDate.getHours() + plusHours);
    }
    else if (randomTime === "4 days"){
      var plusDays = 4;
      //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + plusDays);
    }
    else if (randomTime === "1 week"){
      var plusDays = 7;
      //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + plusDays);
    }
    else if (randomTime === "2 weeks"){
      var plusDays = 14;
      //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + plusDays);
    }
    else if (randomTime === "1 month"){
      var plusMonths = 1;
      //countDownDate = new Date();
              countDownDate.setMonth(countDownDate.getMonth() + plusMonths);
    }
    else if (randomTime === "3 months"){
      var plusMonths = 3;
      //countDownDate = new Date();
              countDownDate.setMonth(countDownDate.getMonth() + plusMonths);
    }
    else if (randomTime === "6 months"){
      var plusMonths = 6;
      //countDownDate = new Date();
              countDownDate.setMonth(countDownDate.getMonth() + plusMonths);
    }
    else if (randomTime === "1 year"){
      var plusMonths = 12;
      //countDownDate = new Date();
              countDownDate.setMonth(countDownDate.getMonth() + plusMonths);
    }
    else {
        //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + 1);
    };
  
  
  //var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
  
   var outputFinal2 =  days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
   document.getElementById("countdown2").innerHTML = ""; 
   document.getElementById("countdown2").innerHTML = outputFinal2;
   console.log(outputFinal2);
    document.getElementById("countdowndt2").innerHTML = countDownDate.toLocaleString(countDownDate); 
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown2").innerHTML = "EXPIRED";
    }
  }, 1000);
};
function GetMedium(){
  {
      var mymediumarray= new Array("Paper","Clay","Glass","Fabric","Fiber","Knitting","Crochet","Poem","Essay","Short Story","Natural or Found","Food","Jewelry","Music","Drawing","Painting","Digital","Collage","Photography","Embroidery","Programming");
      var randomMedium = mymediumarray[Math.floor(Math.random() * mymediumarray.length)];
      //alert(random);
      document.getElementById("mediummessage").innerHTML=randomMedium;
  }
  };

  function GetTopic(){
    {
        var mytopicarray= new Array("Space","Flowers","Witchy","Ocean","Fairytale","Folkart","Functional","Bookish","Nature/Woods","Home","Music","LGBTQIA+","Night","Day","Winter","Autumn","Summer","Spring","Christmas","Future","History","Clothing","Interpretation","Replica","Americana","Celtic","French Canadian","Sports","Family","Fandom","Self","Philosophy");
        var randomTopic = mytopicarray[Math.floor(Math.random() * mytopicarray.length)];
        //alert(random);
        document.getElementById("topicmessage").innerHTML=randomTopic;
    }
    };
    function GetAudience(){
      {
          var myaudiencearray= new Array("Me","Abby","Violet","John","Mom","Dad","Grandma","Friend","Children","Adults","Queer folks","Gift");
          var randomAudience = myaudiencearray[Math.floor(Math.random() * myaudiencearray.length)];
          //alert(random);
          document.getElementById("audiencemessage").innerHTML=randomAudience;
      }
      };    

function newTimeMsg(){
  {
      var mytimearray= new Array("1 hour","4 hours","8 hours","2 days","4 days","1 week","2 weeks","1 month","3 months","6 months","1 year");
      var randomTime = mytimearray[Math.floor(Math.random() * mytimearray.length)];
      //alert(random);
      document.getElementById("timemessage").innerHTML=randomTime;
    }
    // Set the date we're counting down to
  //var randomTime = "1 year";

  countDownDate = new Date();
  if(randomTime === "2 days"){
    var plusDays = 2;
    //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + plusDays);
    }
    else if (randomTime === "1 hour"){
      var plusHours = 1;
      //countDownDate = new Date();
              countDownDate.setHours(countDownDate.getHours() + plusHours);
    }
    else if (randomTime === "4 hours"){
      var plusHours = 4;
      //countDownDate = new Date();
              countDownDate.setHours(countDownDate.getHours() + plusHours);
    }
   else if (randomTime === "8 hours"){
      var plusHours = 8;
      //countDownDate = new Date();
              countDownDate.setHours(countDownDate.getHours() + plusHours);
    }
    else if (randomTime === "4 days"){
      var plusDays = 4;
      //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + plusDays);
    }
    else if (randomTime === "1 week"){
      var plusDays = 7;
      //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + plusDays);
    }
    else if (randomTime === "2 weeks"){
      var plusDays = 14;
      //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + plusDays);
    }
    else if (randomTime === "1 month"){
      var plusMonths = 1;
      //countDownDate = new Date();
              countDownDate.setMonth(countDownDate.getMonth() + plusMonths);
    }
    else if (randomTime === "3 months"){
      var plusMonths = 3;
      //countDownDate = new Date();
              countDownDate.setMonth(countDownDate.getMonth() + plusMonths);
    }
    else if (randomTime === "6 months"){
      var plusMonths = 6;
      //countDownDate = new Date();
              countDownDate.setMonth(countDownDate.getMonth() + plusMonths);
    }
    else if (randomTime === "1 year"){
      var plusMonths = 12;
      //countDownDate = new Date();
              countDownDate.setMonth(countDownDate.getMonth() + plusMonths);
    }
    else {
        //countDownDate = new Date();
              countDownDate.setDate(countDownDate.getDate() + 1);
    };
  
  
  //var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
  
   var outputFinal2 =  days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
   document.getElementById("countdown2").innerHTML = ""; 
   document.getElementById("countdown2").innerHTML = outputFinal2;
   console.log(outputFinal2);
    document.getElementById("countdowndt2").innerHTML = countDownDate.toLocaleString(countDownDate); 
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown2").innerHTML = "EXPIRED";
    }
  }, 1000);
  
  };