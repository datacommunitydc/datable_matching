

var startJoyRide = function() {
    //$(window).load(function () {
        $('#joyRideTipContent').joyride({
            autoStart: true,
            postStepCallback: function (index, tip) {
                if (index == 2) {
                    $(this).joyride('set_li', false, 1);
                }
            },
            modal: true,
            expose: true
        });
    //});
};

var observer = new MutationObserver(function(mutations) {
    joyride_hooked = false;
    joyride_running = false;
    if (joyride_running==false) {

        mutations.forEach(function(mutation) {
            if (!mutation.addedNodes) return

            if (joyride_hooked==false) {
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                    if (joyride_hooked==false) {
                        var filters_html = $('.kshfSummary .summaryName_text');
                        if (filters_html.length>0) {
                            var exp_patt = /Experience Level/i;
                            for (var k=0; k<filters_html.length; k++) {
                                //console.log(String(k));
                                if (filters_html[k].textContent.match(exp_patt)!=null) {
                                    var gotcha = $(filters_html[k]);
                                    gotcha.addClass("so-awesome");
                                    joyride_hooked = true;
                                    break
                                }
                            }
                        }
                        //var node = mutation.addedNodes[i]
                    }
                }
            } else {
                //startJoyRide();
                joyride_running = true;
            }
        })
    }
});

//// stop watching using:
//observer.disconnect()
//
//var init_guide = function() {
//
//    filters_html = $('.kshfSummary .summaryName_text');
//    var exp_patt = /Experience Level/i;
//    for (var k=0; k<filters_html.length; k++) {
//        console.log(String(k));
//        if (filters_html[k].textContent.match(exp_patt)!=null) {
//            var gotcha = $(filters_html[k]);
//            gotcha.addClass("so-awesome");
//            break
//        }
//    }
//}

