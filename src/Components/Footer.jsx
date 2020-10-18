import React from "react";


function Footer(){
    var currentDate = new Date();

    return <footer>
        <p>Copyright © {currentDate.getFullYear()}</p>
    </footer>
}

export default Footer;