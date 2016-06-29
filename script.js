var term = new Terminal();
var term_location = document.getElementById("term");
var startup = 1;

//term config
term.setTextColor("#63E600");
term.setBackgroundColor("#0E2100");
term_location.appendChild(term.html);

var helpstrings =   [
                        "------------------------------------",
                        "-SUPPLYING OUTPUT FOR STANDARD USER-",
                        "------------------------------------",
                        "                                    ",
                        "help---------------Display User Help",
                        "about------------Get My Contact Info",
                        "                                    "
                    ];

var contactstrings =    [
                            "-------------------------------------",
                            "----ACCESSING CONTACT INFORMATION----",
                            "-------------------------------------",
                            "Physical--------------------UNDEFINED",
                            "Landline--------------------UNDEFINED",
                            "Car Phone----------------269-223-2617",
                            "World Wide Web-----rlmcnall@gmail.com",
                            "                                     "
                        ]

var startupstrings =    [
                            "----ACCESSING DATABASE----",
                            "-----HACKING UNIVERSE-----",
                            "------ACCESS GRANTED------"
                        ]

function terminal_print(print_string_array, index, waittime) {
    setTimeout(function(){
        inverse_index = print_string_array.length - index;
        normalized_inverse_index = inverse_index / print_string_array.length;
        delay_factor = Math.log(inverse_index) / Math.LN10;
        delay_time = delay_factor * 300;
        term.print(print_string_array[index]);
        if (index + 1 === print_string_array.length){
            main_prompt();
        } else {
            terminal_print(print_string_array, index + 1, delay_time);
        }
    }, waittime);
}

function help_output() {
    terminal_print(helpstrings, 0, 0); 
}

function contact_output() {
    terminal_print(contactstrings, 0, 0);
}

function startup_output() {
    terminal_print(startupstrings, 0, 0)
}

function main_prompt(){
    if (startup === 1) {
        startup = 0;
        startup_output();
    }
    term.input("VVVVVVVVVV ENTER COMMAND", function(userInput){
        switch(userInput){
            case "help":
                help_output();
                break;
            case "about":
                contact_output();
                break;
        }
    });
}

main_prompt()
