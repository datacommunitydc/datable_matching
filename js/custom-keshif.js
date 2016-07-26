function getContinueShoppingURL(form){

        // -- Get the href of the currently displayed webpage --
        form.shopping_url.value = window.location.href;
      }
var browser;
var candidate_introductions = [];

function refreshSelectedList(){
  var str="";
  browser.records.forEach(function(candidate){
    if(candidate.customSelect){
      str='<span class="selectBox">'+candidate.id()+"</span>"+str;
    }
  });
  $("#SelectedContainer").html(str);
};

google.setOnLoadCallback(function(){
//  var paypal = '<form class="PayPalBuyButton"  target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">' +
//              '<input type="hidden" name="cmd" value="_xclick">' +
//              '<INPUT TYPE="hidden" name="charset" value="utf-8">' +
//              '<input type="hidden" name="item_name" value="CandidateIntro_'+this.id+'">' +
//              '<input type="hidden" name="amount" value="35">' +
//              '<input type="hidden" name="tax" value="0">' +
//              '<input type="hidden" name="quantity" value="1">'+
//              '<input type="hidden" name="no_note" value="1">'+
//              '<input type="hidden" name="currency_code" value="USD">'+
//              '<input type="hidden" name="business" value="seang@datacommunitydc.org">'+
//              //'<input type="hidden" name="hosted_button_id" value="6NKAMDC6VZ2AQ">' +
//              '<input class="PayPalSubmit" type="submit" value="Get Introduced!" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
//            '</form>';
  browser = new kshf.Browser({
    domID: "#datable_demo", // This is the DOM id, might be different for your page.
    itemName: "Datable Candidates",
    barChartWidth: 100,
    leftPanelLabelWidth: 230,
    middlePanelLabelWidth: 230,
    source: {
      gdocId: '1O0zxuuLB_wRRAbf80O7WkKFl0ie-P4prhmJDSjNdtUk',
      tables: "Candidate_Pool"
    },
    loadedCb: function(){
      this.records.forEach(function(r){
        r.data.id = r.data["Candidate #"];
        r.data.rand = r.data.id;
      });
      // shuffle ( http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array )
      for(var i = this.records.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = this.records[i].data.rand;
          this.records[i].data.rand = this.records[j].data.rand;
          this.records[j].data.rand = temp;
      }
    },
    summaries: [
      // { name: "When was the last time you committed code?" },
      { name: "Experience Level", value: "What's your experience level?",
        catSortBy: [
          "Veteran (10+ years)",
          "Senior (5+ years)",
          "Mid-Level (3-5 years)",
          "Junior (1-3 years)",
          "Entry Level (0 years)"
        ] },
      { name: "Degrees earned", value: 'What Degrees have you earned?', catSplit: ", " },
      { name: "Data Science Techniques", value: "What Data Science techniques have you worked with?", catSplit: ", " },
      { name: "Languages and Libraries", value: "What languages & libraries do you use?", catSplit: ", " },
      { name: "Community and Engagement",
        description: "My description",
        value: function(){
          var r=[];
          if(this["Have you managed teams before?"]==="Yes")
              r.push("Managed teams before");
          if(this["Have you ever presented your work at an event?"]==="Yes")
              r.push("Presented at an event");
          if(this["Startup and/or Business Experience?"]==="Yes")
              r.push("Startup Experience");
          if(this["Have you accepted or would you accept freelance work?"]==="Yes")
              r.push("Freelance work");
          if(this["Are you a US Citizen?"]==="Yes")
              r.push("US Citizen");
          if(this["Are you a community organizer?"]==="Yes")
              r.push("Community Organizer");
          if(this["Have you ever founded a startup, or joined a startup in the early stages, that achieved market traction or better?"]==="Yes")
              r.push("Founded/Joined a Startup");
          if(this["Have you ever been involved with BD, sales, or managed a client relationship?"]==="Yes")
              r.push("BD/ sales / management experience");
          if(this["Do you volunteer for others' community events?"]==="Yes")
              r.push("Volunteered at community events");
          if(this["Have you provided successful introductions to another community organizer?"]==="Yes")
              r.push("Provided organizers with successful introductions");
          if(this[""]==="Yes") r.push("");
          return r;
        } },

      { name: "Experience in Sectors", value: 'What sectors have you worked in?', collapsed: true, catSplit: ", " },

      { name: "Security Clearance", value: 'Do you have a Security Clearance?', collapsed: true, panel: 'left' },

      //{ name: "When was the last time you committed code?", panel: "middle", collapsed: true },

      //{ name: "Data Community DC Events Attended", catSplit: ", ", panel: 'middle', collapsed: true },
    ],
    recordDisplay: {
      // sort by "id" instead of "rand" if you want fixed sort order by candidate id.
      sortBy: { name: "rand", label: function(){ return "#"+this.id; }},
      sortColWidth: 62,
      textSearch: "Describe yourself in one sentence.",
      recordView: function(){
        var major = this["Describe yourself in one sentence."];
        if(major===null) major = "-";
        var minor = this["Please describe three data science or data related projects you've worked on in the last three years. These can be features of larger projects, consulting projects, classified work described generally, or open source contributions."];
        return "<span class='selectBox'>Introduce #"+this.id+"</span>" +
    //    return '<form class="PayPalSubmit" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">'+
    //'  <input type="hidden" name="cmd" value="_cart">'+
    //'  <input type="hidden" name="cbt" value="Welcome to Datable">'+
    //'  <input type="hidden" name="image_url" value="https://drive.google.com/file/d/0BxSU0Aiu9Sx5OHVNV0J0alRseW8">'+
    //'  <input type="hidden" name="add" value="1">'+
    //'  <!--<input type="hidden" name="custom" value="what it is!">-->'+
    //'  <input type="hidden" name="shopping_url" value="match.datacommunitydc.org">'+
    //'  <input type="hidden" name="no_shipping" value="1">'+
    //'  <input type="hidden" name="no_note" value="0">'+
    //'  <INPUT TYPE="hidden" name="charset" value="utf-8">'+
    //'  <input type="hidden" name="item_name" value="Candidate '+this.id+'">'+
    //'  <input type="hidden" name="item_number" value="'+this.id+'">'+
    //'  <input type="hidden" name="invoice" value="User statment here">'+
    //'  <input type="hidden" name="amount" value="35">'+
    //'  <input type="hidden" name="currency_code" value="USD">'+
    //'  <input type="hidden" name="business" value="andrew@datacommunitydc.org">'+
    //'  <input type="submit" onclick=getContinueShoppingURL(this.form) value="Add # '+this.id+'" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">'+
    //'</form>'+
//        return '<form class="PayPalBuyButton"  target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">' +
//              '<input type="hidden" name="cmd" value="_cart">' +
//              '<input type="hidden" name="upload" value="1">' +
//              '<INPUT TYPE="hidden" name="charset" value="utf-8">' +
//              '<input type="hidden" name="item_name_'+this.id+'" value="1">' +
//              '<input type="hidden" name="amount_'+this.id+'" value="35">' +
//              '<input type="hidden" name="currency_code" value="USD">'+
//              '<input type="hidden" name="business" value="seang@datacommunitydc.org">'+
//              '<input class="PayPalSubmit" type="submit" value="Get Introduced!" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
//            '</form>'  +
//        return '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">'+
//               ' <input type="hidden" name="cmd" value="_s-xclick">'+
//               ' <input type="hidden" name="hosted_button_id" value="6NKAMDC6VZ2AQ">'+
//               ' <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">'+
//               ' <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">'+
//            '</form>' +

//        return '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">'+
//              '<input type="hidden" name="cmd" value="_s-xclick">'+
//              '<input type="hidden" name="hosted_button_id" value="MY6KVVK33SE2Y">'+
//              '<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">'+
//              '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">'+
//            '</form>'+



          // major description
          "<div class='descr_major'>" + major + "</div>"+
          // minor description
          ((minor!==null)?("<div class='descr_minor'> <span style='font-weight:400'>Experience</span>: "+minor+"</div>"):"")
          ;
      },
      onDOM: function(d){
        var id = this.id;
        var button_text = "Introduce #" +String(id);
        var remove_text = "Selected #" +String(id);
        d3.select(d.DOM.record).select(".selectBox").on("click",
          function(){
            if(d.customSelect) {
                d.customSelect = false;
                candidate_introductions = candidate_introductions.filter(
                    function (value) { return value != id; });
                console.log("candidate_introductions: ",candidate_introductions)
            }
            else {
                d.customSelect = true;
                candidate_introductions.push(id);
                console.log("candidate_introductions: ",candidate_introductions)
            }
            this.textContent = d.customSelect?remove_text:button_text;
            d3.select(this).classed("customSelect",d.customSelect);
            refreshSelectedList();
            //window.open("www.datacommunitydc.org/sponsorship/candidate-pool-introduction");
          });
      }
    }
  });
  d3.select("#kshfLogo").html(kshf.kshfLogo);
});