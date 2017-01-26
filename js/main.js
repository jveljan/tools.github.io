$(function() {

  var keys = "ABVGD?E@Z?IJKLQMNWOPRST]UFHC^X[abvgd|e`z?ijklqmnwoprst}ufhc~x{";
  var vals = "АБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШабвгдѓежзѕијклљмнњопрстќуфхцчџш";
  function convert(mkfont) {
    var rv = '';
    for(var i=0; i<mkfont.length; i++) {
      var c = mkfont.charAt(i);
      var idx = keys.indexOf(c);
      if(idx !== -1 && c !== '?') {
        rv += vals.charAt(idx);
      } else {
        rv += c;
      }
    }
    return rv;
  }

  $('#convert-btn').click(function() {
    var fromTxt = $('#ta-from').val();
    if(!fromTxt) {
      alert('please enter from text');
      return;
    }
    var toTxt = convert(fromTxt);
    $('#ta-to').val(toTxt);
    
  });
})