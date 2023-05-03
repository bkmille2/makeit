document.querySelector(".newprojbtn").addEventListener("click",myProject);
document.querySelector(".refresh-medium").addEventListener("click", myMedium);
document.querySelector(".refresh-topic").addEventListener("click", myTopic);
document.querySelector(".refresh-audience").addEventListener("click", myAudience);
document.querySelector(".refresh-time").addEventListener("click", myTime);

var mymediumarray = ["Paper","Clay","Glass","Fabric","Fiber","Knitting","Crochet","Poem","Essay","Short Story","Natural or Found","Food","Jewelry","Music","Drawing","Painting","Digital","Collage","Photography","Embroidery","Programming"];
var mytopicarray = ["Space","Flowers","Witchy","Ocean","Fairytale","Folkart","Functional","Bookish","Nature/Woods","Home","Music","LGBTQIA+","Night","Day","Winter","Autumn","Summer","Spring","Christmas","Future","History","Clothing","Interpretation","Replica","Americana","Celtic","French Canadian","Sports","Family","Fandom","Self","Philosophy"];
var myaudiencearray = ["Me","Abby","Violet","John","Mom","Dad","Grandma","Friend","Children","Adults","Queer folks","Gift"];
var mytimearray = [["1 hour","Hours",1],["4 hours","Hours",4],["8 hours","Hours",8],["2 days", "Date",2],["4 days","Date",4],["1 week","Date",7],["2 weeks","Date",14],["1 month","Month",1],["3 months", "Month",3],["6 months","Month",6],["1 year","Month",12]];
var randomTime;

function myMedium(){
  {
    var randomMedium = mymediumarray[Math.floor(Math.random() * mymediumarray.length)];
    //alert(random);
    document.getElementById("mediummessage").innerHTML=randomMedium;
}
};
function myTopic(){
  {
      var randomTopic = mytopicarray[Math.floor(Math.random() * mytopicarray.length)];
      //alert(random);
      document.getElementById("topicmessage").innerHTML=randomTopic;
  }
  };
function myAudience(){
    {
        var randomAudience = myaudiencearray[Math.floor(Math.random() * myaudiencearray.length)];
        //alert(random);
        document.getElementById("audiencemessage").innerHTML=randomAudience;
    }
    };    

function myTime(){
  countDownDate = new Date();

  {
      randomTime = mytimearray[Math.floor(Math.random() * mytimearray.length)];
      //alert(random);
      document.getElementById("timemessage").innerHTML=randomTime[0];
      var nowPlus = randomTime[2];
      var timeFrame = randomTime[1];
  };

  if(timeFrame === "Date"){
    countDownDate.setDate(countDownDate.getDate() + nowPlus);
  }
  else if (timeFrame === "Hours"){
    countDownDate.setHours(countDownDate.getHours() + nowPlus);
  }
  else if (timeFrame === "Month"){
    countDownDate.setMonth(countDownDate.getMonth() + nowPlus);
  }
  else {
      //countDownDate = new Date();
      countDownDate.setDate(countDownDate.getDate() + 1);
  };
  timeOutputTest();
  };
 
  function timeOutputTest(){
    var x = setInterval(function() {
     
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      console.log(countDownDate);

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="countdown"
    
     countDownFinal =  days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
     document.getElementById("countdown").innerHTML = countDownFinal;
      document.getElementById("countdowndt2").innerHTML = countDownDate.toLocaleString(countDownDate); 
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown2").innerHTML = "EXPIRED";
      }
    }, 1000);
  };

function myProject(){
  myMedium();
  myTopic();
  myAudience();
  myTime();
  timeOutputTest();
};
