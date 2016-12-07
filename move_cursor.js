function move_cursor(l) {
    //but why?
    "use strict";
    var noOfHeaders = 5;
    
    for(i=1 ; i<=noOfHeaders; i++) {
        document.getElementById(i).style.visibility = "hidden";
    }
    
    document.getElementById(l).style.visibility = "visible";
}