$(document).ready(function() {
    $.ajax({
      url: "https://api.jsonbin.io/b/5e99f36b5fa47104cea282ff/3",
      dataType: "json",
      success: function(response) {
        $.each(response.apartments, function(i, apartment) {
          var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");
            var listing = "<a href='#' id=" + apartment.id + " class='list-group-item " + apartmentClass + " listings'><h4 class='list-group-item-heading'>" + apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>";
            $(".apartments").append(listing);
        });
      },
        error: function(error) {
          console.log(error);
        }
    });

    $(".filter").click(function() {
      $(".filter").removeClass("active");
      $(this).addClass("active");

      $(".listings").show();

      var city = $(this).attr("id");
      if (city != "all") {
        $(".listings").not("." + city).css("display", "none");
      }
    });

    $(document).on("click", ".listings", function(){
      var id = $(this).attr("id");

      $.ajax({
        url: "https://api.jsonbin.io/b/5e99f36b5fa47104cea282ff/3",
        dataType: "json",
        success: function(response) {
          var selectedApartment = $.grep(response.apartments, function(apartment){
            return apartment.id == id;
          })
          var address = selectedApartment[0].address;

          $("#myModal").modal("show");

          $(".close").click(fu/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/create-account
/shop/us/b/total-solution-packs
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/letsgetup?programId=LetsGetUp
/shop/us/b/fitness/programs/9wcf?programId=9WCF
/shop/us/b/fitness/programs/30daybreakaway?programId=30DayBreakaway
/shop/us/b/fitness/programs/barreblend?programId=BarreBlend
/shop/us/b/fitness/programs/muscleburnsfat?
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/barreblend?programId=BarreBlend
/shop/us/b/nutrition-programs/programs/2bmindset?programId=2BMindset
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/muscleburnsfat
/shop/us/b/nutrition-programs?
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/10rounds?programId=10Rounds
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/liift4?programId=LIIFT4
/shop/us/b/fitness/programs/6weeksofthework?programId=6WeeksofTheWork
/shop/us/b/nutrition-programs/programs/2bmindset?programId=2BMindset
/shop/us/b/fitness/programs/6weeksofthework?programId=6WeeksofTheWork
/shop/us/b/nutrition-programs/programs/ultimateportionfix?programId=UltimatePortionFix
/shop/us/b/fitness/programs/morningmeltdown100?programId=MorningMeltdown100
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/nutrition-programs/programs/2bmindset?programId=2BMindset
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/21dayfix?programId=21DayFix
/shop/us/b/fitness/programs/21dayfix?programId=21DayFix
/shop/us/b/fitness/programs/21dayfix?programId=21DayFix
/shop/us/b/fitness/programs/21dayfix?programId=21DayFix
/shop/us/b/fitness/programs/80dayobsession?programId=80DayObsession
/shop/us/b/fitness/programs/22minutehardcorps?programId=22MinuteHardCorps
/shop/us/b/fitness/programs/80dayobsession?programId=80DayObsession
/shop/us/b/fitness/programs/80dayobsession?programId=80DayObsession
/shop/us/b/fitness/programs/bodybeast?programId=BodyBeast
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/bodybeast?programId=BodyBeast
/shop/us/b/fitness/programs/brazilbuttlift?programId=BrazilButtLift
/shop/us/b/fitness/programs/brazilbuttlift?programId=BrazilButtLift
/shop/us/b/fitness/programs/brazilbuttlift?programId=BrazilButtLift
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/cize?programId=CIZE
/shop/us/b/fitness/programs/coredeforce?programId=CoreDeForce
/shop/us/b/fitness/programs/countryheat?programId=CountryHeat
/shop/us/b/fitness/programs/doubletime?programId=DoubleTime
/shop/us/b/fitness/programs/focust25?programId=FOCUST25
/shop/us/b/fitness/programs/themastershammerandchisel?programId=TheMastersHammerandChisel
/shop/us/b/fitness/programs/hiphopabs?programId=HipHopAbs
/shop/us/b/fitness/programs/insanity?programId=INSANITY
/shop/us/b/fitness/programs/insanity?programId=INSANITY
/shop/us/b/fitness/programs/insanitytheasylum?programId=INSANITYTHEASYLUM
/shop/us/b/fitness/programs/insanitytheasylumvol2?programId=INSANITYTHEASYLUMVol2
/shop/us/b/fitness/programs/insanitymax30?programId=INSANITYMAX30
/shop/us/b/fitness/programs/mesdemas?programId=MesdeMas
/shop/us/b/fitness/programs/p90?programId=P90
/shop/us/b/fitness/programs/p90x?programId=P90X
/shop/us/b/fitness/programs/p90x2?programId=P90X2
/shop/us/b/fitness/programs/p90x3?programId=P90X3
/shop/us/b/fitness/programs/p90xoneonone?programId=P90XOneonOne
/shop/us/b/fitness/programs/transform20?programId=Transform20
/shop/us/b/fitness/programs/piyo?programId=PiYo
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/shiftshop?programId=ShiftShop
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/turbofire?programId=TurboFire
/shop/us/b/fitness/programs/turbofire?programId=TurboFire
/shop/us/b/fitness/programs/turbojam?programId=TurboJam
/shop/us/b/fitness/programs/taicheng?programId=TaiCheng
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/3weekyogaretreat?programId=3WeekYogaRetreat
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/youv2?programId=YOUv2
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/slimin6?programId=Slimin6
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/beachbodyondemand?programId=BeachbodyOnDemand
/shop/us/b/fitness/programs/rockinbody?programId=RockinBody
/shop/us/b/fitness/programs/9wcf?programId=9WCF
/shop/us/b/fitness/programs/645?programId=645
/shop/us/b/fitness/programs/645?programId=645
/shop/us/b/fitness/programs/letsgetup?programId=LetsGetUp
/shop/us/b/fitness/programs/job1?programId=job1nction() {
            $("#myModal").modal("hide");
          });

          $("#myModal").on("hidden.bs.modal", function(){
            window.open("http://maps.google.com/?q=" + address);
          });

          },
          error: function(error) {
            console.log(error);
          }
      });
    });
});
