// set the correct username and password combination below
let correctUsername = "Angela0928";
let correctPassword = "242985950";


$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
    if (username === "Angela0928" && password === "242985950"){
        $(".login").text("Login in");
}
    else if (password !== "242985950"&& username !== "Angela0928"){
        $(".login").text("You must enter something");
    }
    else if(username !== "Angela0928") {
        $(".login").text("Wrong usaname");
}
    else if(password !== "242985950") {
        $(".login").text("Wrong passord");
    }
});
