$("button").click(function(){
    // 1. Extract the text from the inputs
    var name = $(".name").val();
    var episodes = parseInt($(".episodes").val());
    
    // 2. Use the input text to build the fortune to display.
    var myAnswer = name;
    $(".answer").text(myAnswer);
    
    // 3. Clear the old text from the inputs.
    $(".name").val("");
});