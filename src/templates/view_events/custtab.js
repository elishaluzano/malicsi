function openData(dt, game_date) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(game_date).style.display = "block";
    dt.currentTarget.className += " active";
}

function openData2(dt, game_date) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(game_date).style.display = "block";
    //dt.currentTarget.className += " active";
}

function nextTab() {
    // Declare all variables
    var activeTab, nextActive, date;
    // Get active tablink
    activeTab = document.getElementsByClassName("tablinks active");
    console.log(activeTab[0].innerHTML);
    // Get next sibling
    nextActive = activeTab[0];
    console.log("next1: ");
    console.log(nextActive.parentElement.nextSibling);
    console.log("next2: ");
    console.log(nextActive.parentElement.nextSibling.nextSibling);
    
    /*
    if (nextActive.parentElement.nextSibling.nextSibling == null) {
        nextActive = nextActive.parentElement.nextSibling.children[0];
    } else {
        */
        nextActive = nextActive.parentElement.nextSibling.children[0];
    //}

    date = nextActive.innerHTML;
    console.log("date " + date);
    date = date.replace(" ", "_");
    date += "_game";
    console.log("date " + date);
    // Set next sibling to active
    openData2(event,date);
    nextActive.className += " active";
    // Show data of next sibling
    // Unset active tablink class
    activeTab[0].className = "tablinks";
    console.log("homaygulay may pamileee " + nextActive.className);
}

function prevTab() {
    // Declare all variables
    var activeTab, previousActive, date;
    // Get active tablink
    activeTab = document.getElementsByClassName("tablinks active");
    console.log(activeTab[0].innerHTML);
    // Get previous sibling
    previousActive = activeTab[0];
      //previousActive = previousActive.parentElement.previousSibling.children[0];
    previousActive = previousActive.parentElement.previousSibling.children[0];

    date = previousActive.innerHTML;
    console.log("date " + date);
    date = date.replace(" ", "_");
    date += "_game";
    console.log("date " + date);
    // Set previous sibling to active
    openData2(event,date);
    // Show data of next sibling
    // Unset active tablink class
    activeTab[0].className = "tablinks";
    previousActive.className += " active";
    console.log("previous active " + previousActive.className + "||" + activeTab[0].className);
}

document.getElementById("defaultOpen").click();


