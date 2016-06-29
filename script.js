var term = new Terminal();
var term_location = document.getElementById("term");
var startup = 1;
term_location.appendChild(term.html);

var helpstrings =   [
                        "------------------------------------",
                        "-SUPPLYING OUTPUT FOR STANDARD USER-",
                        "------------------------------------",
                        "                                    ",
                        "help---------------Display User Help",
                        "about------------Get My Contact Info"
                    ];

function terminal_print(print_string_array) {
    for (i = 0; i < print_string_array.length; i++){
        inverse_index = print_string_array.length - i;
        delay_factor = Math.pow(inverse_index, 2);
        term.sleep(delay_factor, function(){});
        term.print(print_string_array[i]);
    }
}

function help_output() {
   terminal_print(helpstrings); 
}

function main_prompt(){
    term.input("> ", function(userInput){
        switch(userInput){
            case "help":
                help_output();
                break;
        }  
    });
}

main_prompt()
