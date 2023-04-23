//Struggling with functions, but much more comfortable calling the classes or targeting specific elements.
//Linking external JS is not working, ended up using script tag in HTML
// How to make the content disappear
// I struggled with content disappearing but was able to find a solution for this problem. simply i think
// by using for loop and .remove and .add to the targeted content--that way only those content that was clicked would show up and others will be hidden
//function not working???
// fixed it with a missing closing bracket
/*{ <script>
    var tablinks = document.getElementsByClassName("tab-links"); declaring a tablinks and getting the element tab-link by classname
    var tabcontents = document.getElementsByClassName("tab-contents"); declaring a tabcontents and getting the element tab-link by classname
    
    function opentab(tabname) { opentab as the name of the function, with a parameter of tabname
        for (tablink of tablinks) {
            tablink.classList.remove("active-link"); this removes the tageted content called active-link
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link"); //this makes the link like response to clicks-->
    //problem encountered here where I have to keep refreshing the webpage in order for the link like to respond.
        document.getElementById(tabname).classList.add("active-tab");
    }

    // -----------------contact----------------
</script>

<script>
    var sidemenu = document.getElementById("sidemenu"); this is crucial for when the screen size is minimized to a phone size view, the sidemenu will now be hidden on the right side with a menu symbol that is clickable and it should show Home, About, Contact
    function openmenu () {
        sidemenu.style.right = "0";
    }
    function closemenu () {
        // sidemenu.style.right = "-200px";
    }
</script> 