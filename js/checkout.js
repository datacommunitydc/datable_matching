
// window.REMODAL_GLOBALS = {
//   NAMESPACE: 'remodal',
//   DEFAULTS: {
//     hashTracking: true,
//     closeOnConfirm: true,
//     closeOnCancel: true,
//     closeOnEscape: true,
//     closeOnOutsideClick: true,
//     modifier: ''
//   }
// };

$(document).on('opening', '.remodal', function () {
  console.log('opening');
});
$(document).on('opened', '.remodal', function (e) {
    console.log('opened');
    if (e.currentTarget.className.includes('modal1') | e.currentTarget.className.includes('modal3')) {
        var list = ["Candidates Selected: "];
        if (candidate_introductions.length>0) {
            $("#step_one_confirm").html("Please confirm these are the candidates you would like to meet.");
            for (var k = 0; k < candidate_introductions.length; k++) {
                list.push("#"+String(candidate_introductions[k]));
                if (k < (candidate_introductions.length - 1)) list.push(", ");
            }
            $('.candidate_introductions').html(list);
        } else {
            //list = "Hmmmm, searching for your Candidates...";
            //$('#candidate_introductions').html(list);
            $('.candidate_introductions').html('<img src="./images/spongebobsearching_cantfindcandidates.png">');
        }
    }
});
$(document).on('closing', '.remodal', function (e) {
  console.log('closing' + (e.reason ? ', reason: ' + e.reason : ''));
    if (e.currentTarget.className.includes('modal1')) {
        $('.candidate_introductions').html("");
    }
});
$(document).on('closed', '.remodal', function (e) {
    console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
});
$(document).on('confirmation', '.remodal', function (e) {
    console.log('confirmation');
    if (e.currentTarget.className.includes('modal1')) {
        if (candidate_introductions.length>0) {
            document.location.href = "#modal2";
        } else {
            alert("Please choose a Candidate first!");
        }
    } else if (e.currentTarget.className.includes('modal2')) {

        document.location.href = "#modal3";

        //var valid_email = $("#ToSform").validator('validate');
        //
        //var ToS = document.getElementById('ToS');
        //var $35 = document.getElementById('3500');
        //if (ToS.checked & $35.checked) {
        //    GAPI = "AIzaSyCefU-TsBcjKq3JJj9P4_FZEvpMTP7MHAI";
        //    GOauth = "379783866480-nt99oo3eidogjt1notr93a5bqej2me0j.apps.googleusercontent.com";
        //    //document.location.href = "#modal3";
        //} else {
        //    alert("Please accept all Terms of Service before proceeding.");
        //    //document.location.href = "#modal2";
        //}
    }
});
$(document).on('cancellation', '.remodal', function () {
  console.log('cancellation');
});
//  Usage:
//        $(function() {
//
//          // In this case the initialization function returns the already created instance
//          var inst = $('[data-remodal-id=modal]').remodal();
//
//          inst.open();
//          inst.close();
//          inst.getState();
//          inst.destroy();
//        });
//  The second way to initialize:
//$('[data-remodal-id=modal2]').remodal({
//  modifier: 'with-red-theme'
//});

//$("#ToSform").validator('').on('submit', function (e) {
//  if (e.isDefaultPrevented()) {
//    alert("bad kitteh!")
//  } else {
//    alert("good kitteh :)")
//  }
//});