$.i18n().load({
    en: {
        msg_activecode_load_history: "Load History",
        msg_activecode_audio_tour: "Audio Tour",
        msg_activecode_loaded_code: "Loaded your saved code.",
        msg_activecode_no_saved_code: "No saved code.",
        msg_activecode_run_code: "Run",
        msg_activecode_show_feedback: "Show Feedback",
        msg_activecode_show_code: "Show Code",
        msg_activecode_hide_code: "Hide Code",
        msg_activecode_show_codelens: "Show CodeLens",
        msg_activecode_show_in_codelens: "Show in CodeLens",
        msg_activecode_hide_codelens: "Hide Codelens",
        msg_activecode_reformat: "Reformat",

        msg_activecode_parse_error:
            "A parse error means that Python does not understand the syntax on the line the error message points out. Common examples are forgetting commas beteween arguments or forgetting a : on a for statement",
        msg_activecode_parse_error_fix:
            "To fix a parse error you just need to look carefully at the line with the error and possibly the line before it.  Make sure it conforms to all of Python's rules.",
        msg_activecode_type_error:
            "Type errors most often occur when an expression tries to combine two objects with types that should not be combined.  Like raising a string to a power",
        msg_activecode_type_error_fix:
            "To fix a type error you will most likely need to trace through your code and make sure the variables have the types you expect them to have.  It may be helpful to print out each variable along the way to be sure its value is what you think it should be.",
        msg_activecode_name_error:
            "A name error almost always means that you have used a variable before it has a value.  Often this may be a simple typo, so check the spelling carefully.",
        msg_activecode_name_error_fix:
            "Check the right hand side of assignment statements and your function calls, this is the most likely place for a NameError to be found.",
        msg_activecode_value_error:
            "A ValueError most often occurs when you pass a parameter to a function and the function is expecting one type and you pass another.",
        msg_activecode_value_error_fix:
            "The error message gives you a pretty good hint about the name of the function as well as the value that is incorrect. Look at the error message closely and then trace back to the variable containing the problematic value.",
        msg_activecode_attribute_error:
            "This error message is telling you that the object on the left hand side of the dot, does not have the attribute or method on the right hand side.",
        msg_activecode_attribute_error_fix:
            "The most common variant of this message is that the object undefined does not have attribute X.  This tells you that the object on the left hand side of the dot is not what you think. Trace the variable back and print it out in various places until you discover where it becomes undefined.  Otherwise check the attribute on the right hand side of the dot for a typo.",
        msg_activecode_token_error:
            "Most of the time this error indicates that you have forgotten a right parenthesis or have forgotten to close a pair of quotes.",
        msg_activecode_token_error_fix:
            "Check each line of your program and make sure that your parenthesis are balanced.",
        msg_activecode_time_limit_error:
            "Your program is running too long.  Most programs in this book should run in less than 10 seconds easily. This probably indicates your program is in an infinite loop.",
        msg_activecode_time_limit_error_fix:
            "Add some print statements to figure out if your program is in an infinte loop.  If it is not you can increase the run time with sys.setExecutionLimit(msecs)",
        msg_activecode_general_error:
            "Your program is running for too long.  Most programs in this book should run in less than 30 seconds easily. This probably indicates your program is in an infinite loop.",
        msg_activecode_general_error_fix:
            "Add some print statements to figure out if your program is in an infinte loop.  If it is not you can increase the run time with sys.setExecutionLimit(msecs)",
        msg_activecode_syntax_error:
            "This message indicates that Python can't figure out the syntax of a particular statement.  Some examples are assigning to a literal, or a function call",
        msg_activecode_syntax_error_fix:
            "Check your assignment statements and make sure that the left hand side of the assignment is a variable, not a literal or a function.",
        msg_activecode_key_error:
            "This message indicates that you are trying to access an element of a dictionary, but the dictionary does not have that the key you are using.",
        msg_activecode_key_error_fix:
            "You may have a typo in the name of your key.  It is also good practice to check if the key exists using a statement like if key in mydict.  You can also use mydict.get(key,defaultvalue) so that if the key is not in the dictionary you get the default value instead of an error.",
        msg_activecode_index_error:
            "This message means that you are trying to index past the end of a string or a list.  For example if your list has 3 things in it and you try to access the item at position 3 or more.",
        msg_activecode_index_error_fix:
            "Remember that the first item in a list or string is at index position 0, quite often this message comes about because you are off by one.  Remember in a list of length 3 the last legal index is 2",
        msg_activecode_uri_error: "",
        msg_activecode_uri_error_fix: "",
        msg_activecode_import_error:
            "This error message indicates that you are trying to import a module that does not exist",
        msg_activecode_import_error_fix:
            "One problem may simply be that you have a typo.  It may also be that you are trying to import a module that exists in 'real' Python, but does not exist in this book.  If this is the case, please submit a feature request to have the module added.",
        msg_activecode_reference_error:
            "This is most likely an internal error, particularly if the message references the console.",
        msg_activecode_reference_error_fix:
            "Try refreshing the webpage, and if the error continues, submit a bug report along with your code",
        msg_activecode_zero_division_error:
            "This tells you that you are trying to divide by 0. Typically this is because the value of the variable in the denominator of a division expression has the value 0",
        msg_activecode_zero_division_error_fix:
            "You may need to protect against dividing by 0 with an if statment, or you may need to rexamine your assumptions about the legal values of variables, it could be an earlier statment that is unexpectedly assigning a value of zero to the variable in question.",
        msg_activecode_range_error:
            "This message almost always shows up in the form of Maximum call stack size exceeded.",
        msg_activecode_range_error_fix:
            "This always occurs when a function calls itself.  Its pretty likely that you are not doing this on purpose. Except in the chapter on recursion.  If you are in that chapter then its likely you haven't identified a good base case.",
        msg_activecode_internal_error:
            "An Internal error may mean that you've triggered a bug in our Python",
        msg_activecode_internal_error_fix:
            "Report this error, along with your code as a bug.",
        msg_activecode_indentation_error:
            "This error occurs when you have not indented your code properly.  This is most likely to happen as part of an if, for, while or def statement.",
        msg_activecode_indentation_error_fix:
            "Check your if, def, for, and while statements to be sure the lines are properly indented beneath them.  Another source of this error comes from copying and pasting code where you have accidentally left some bits of code lying around that don't belong there anymore.",
        msg_activecode_not_implemented_error:
            "This error occurs when you try to use a builtin function of Python that has not been implemented in this in-browser version of Python.",
        msg_activecode_not_implemented_error_fix:
            "For now the only way to fix this is to not use the function.  There may be workarounds.  If you really need this builtin function then file a bug report and tell us how you are trying to use the function.",

        msg_activecode_file_not_found: "File not found: '$1'",
        msg_activecode_no_file_or_dir:
            "[Errno 2] No such file or directory: '$1'",
        msg_activecode_starting: "Click the play button to begin the $1",
        msg_activecode_playing: "Playing the $1",
        msg_activecode_loading_audio:
            "Loading audio.  Please wait.   If the tour doesn't start soon click on the leftmost control button (Play first audio in tour)",
        msg_activecode_pause_current_audio: "Pause current audio",
        msg_activecode_pause_audio: "Pause audio",
        msg_activecode_play_paused_audio: "Play paused audio",
        msg_activecode_audio_paused:
            "The $1 has been paused. Click on the play button to resume the tour.",
        msg_activecode_input_prg: "Input for Program",
        msg_activecode_were_compiling_err:
            "There were errors compiling your code. See below.",
        msg_activecode_compile_only:
            "Code successfully compiled. No executable built.",
        msg_activecode_time_limit_exc: "Time Limit Exceeded on your program",
        msg_activecode_server_err: "A server error occurred",
        msg_activecode_compiling_running:
            "Compiling and Running your Code Now...",
        msg_activecode_server_comm_err: "Error communicating with the server.",
        msg_activecode_save_run: "Save & Run",
        msg_activecode_render: "Save & Render",
        msg_activecode_assertion_error:
            "An assertion error happens when python encounters an assertion statement.  Python evaluates the expression to the right of the word assert; if that expression is True everything is fine and the program continues.  If the expression is False Python raises an error and stops.",
        msg_activecode_assertion_error_fix:
            "Check the expression to the right of assert.  The expression is False and you will need to determine why that is.  You may want to simply print out the individual parts of the expression to understand why it is evaluating to False.",
        msg_activecode_load_db: "Loading DB...",
        msg_activecode_code_coach: "Code Coach",
        msg_activecode_passed: "Passed",
        msg_activecode_failed: "Failed",
        msg_activecode_unit_test_results: "Unit Test Results",
        msg_activecode_test_run_error: "Runtime error",
        msg_activecode_test_compile_error: "Compiler error",
        msg_activecode_iotest_results: "IO tests completed. See table for results.",
        msg_activecode_assertions_checked: "Assertions checked:",
    },
});
