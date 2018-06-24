var logols = logols || {};
logols.levels= 
[
    {
        level: 1,
        textInstructions : 
            '<summary>' +
            'Bob has awoke to the Zombie apocalypse, but he has ' +
            'been left with a phone that allows him to write C# ' +
            'code to make stuff happen.  Help Bob write the correct ' +
            'C# code to stay alive. ' +
            'Bob is stuck in his house surrounded by zombies. ' +  
            'Help Bob write code to send a message for help. ' +
            '</summary>' +    
            '<p>' +
            'C# is a combination of statements and statement blocks.  ' + 
            'Statements are made up of keywords, expressions, and operators. ' +
            '<em>Statements end with a semicolon character: ;.</em> ' +
            '<br />Example:  Messenger messenger = new Messenger(); ' +
            '</p>' +
            '<mark>' +
            'Complete the statement below with the appropriate end character. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public void SendMessage()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">Messenger messenger = new Messenger();</div>',
            '<div class="ind-3">' +
                '<textarea spellcheck="false" id="codeText" row="1" cols="50">' +
                'messenger.Send("Is anyone there?  Please Help!")' +
                '</textarea><span id="result"></span>',
            '</div>',
            '<div class="ind-2"></div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'messenger.Send("Is anyone there?  Please Help!");'
    },
    {
        level: 2,
        textInstructions : 
            '<summary>' +
            'The message is not sending.  There is an error building the program.  ' +
            'Help Bob fix the error to send the message.' +
            '</summary>' +    
            '<p>' +
            'C# is a combination of statements and statement blocks.  ' + 
            'A statement block is a block of multiple statements. ' +
            '<em>Statement blocks have a definition followed by an ' +
            'opening curly bracket (brace) character: { on a new line. ' +
            'That is then followed by one or multiple indented statements ' +
            'each on their own line.  The statement block is closed by ' +
            'a closing curly bracket (brace) character: }</em> ' +
            '<br />Example:  <br />  ' +
            'public void log(string message)<br />' +
            '{<br /><span class="ind-1">Console.WriteLine(message);</span><br />}' +
            '</p>' +
            '<mark>' +
            'Complete the statement block below with the appropriate closing character. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public void SendMessage()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">Messenger messenger = new Messenger();</div>',
            '<div class="ind-3">messenger.Send("Is anyone there?  Please Help!");',
            '</div>',
            '<div class="ind-2"><textarea spellcheck="false"  id="codeText" row="1" cols="50"></textarea><span id="result"></span></div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: '}'
    },
    {
        level: 3,
        textInstructions : 
            '<summary>' +
            'There is no response yet.  Bob decides to try to send the message in increments.  ' +
            'Help Bob quickly note the time with a comment.' +
            '</summary>' +    
            '<p>' +
            'Comments can be used to note anything about the code that might be helpful ' + 
            'for you or anyone else in the future to understand your code. ' +
            '<em>Single line comments begin with two forward slashes: //.</em> ' +
            'These can either be on their own line or appear after a statement on the same line.' +
            '<br />Example:  <br />  ' +
            '// this is a comment <br />' +
            'Console.WriteLine(message); //this is a comment after a statement <br />' +
            '</p>' +
            '<mark>' +
            'Add the necessary characters below to make the line a comment. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2"><textarea spellcheck="false" id="codeText" row="1" cols="50">Sent message at 9:05 AM</textarea><span id="result"></span></div>',
            '<div class="ind-2">public void SendMessage()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">Messenger messenger = new Messenger();</div>',
            '<div class="ind-3">messenger.Send("Is anyone there?  Please Help!");',
            '</div>',
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: '//Sent message at 9:05 AM'
    },
    {
        level: 4,
        textInstructions : 
            '<summary>' +
            'Still no response.  Bob sent another message.  ' +
            'Help Bob complete his multi-line comment.' +
            '</summary>' +    
            '<p>' +
            'Comments can be used to note anything about the code that might be helpful ' + 
            'for you or anyone else in the future to understand your code. ' +
            '<em>Multi-line comments begin with foward slash star: /* ' +
            'and ends with star forward slash:  */.</em> ' +
            'In between there can be any text covering multiple lines.' +
            '<br />Example:  <br />  ' +
            '/* <br /> this is a comment <br />' +
            'Console.WriteLine(message); <br />' +
            'all of this code is now commented out <br />*/' +
            '</p>' +
            '<mark>' +
            'Add the necessary characters below to end the comment. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">/*</div>',
            '<div class="ind-2">Sent message at 9:05 AM</div>',
            '<div class="ind-2">Sent message at 9:10 AM</div>',
            '<div class="ind-2"><textarea spellcheck="false" id="codeText" row="1" cols="50"></textarea><span id="result"></span></div>',
            '<div class="ind-2">public void SendMessage()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">Messenger messenger = new Messenger();</div>',
            '<div class="ind-3">messenger.Send("Is anyone there?  Please Help!");',
            '</div>',
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: '*/'
    },
    {
        level: 5,
        textInstructions : 
            '<summary>' +
            'Finally a response came.  "Hey, this is Jim.  I\'ll help you learn your powers.  Everyone has to start somewhere."  ' +
            'First, I\'ll teach you how to run.  Create a speed variable to specify miles per hour.' +
            '</summary>' +    
            '<p>' +
            'Variables are used to temporarily store values in memory to clarify value meaning and allow re-use of a value. ' + 
            'C# variables have types to define what values can be stored in a variable. ' +
            '<br /><em>Some common types are: <br /> ' +
            'int [allows whole number values] <br /> ' +
            'decimal [allows number values with decimals] <br />' +
            'string [allows a string of characters for a value] <br />' +
            'bool [allows true or false values]</em> <br />' +
            'Examples:  <br />  ' +
            'int variableName = 5; <br />' +
            'decimal variableName = 5.5M; <br />' +
            'string variableName = "this is a string"; <br />' +
            'bool variableName = true; <br />' +
            '</p>' +
            '<mark>' +
            'Add the necessary type below for speed based upon it\'s value. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public Bob()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3"><textarea spellcheck="false" id="codeText" row="1" cols="50"> speed = 2;</textarea><span id="result"></span></div>',            
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'int speed = 2;'
    },
    {
        level: 6,
        textInstructions :  
            '<p>' +
            'Variables are declared first with their type and then can be assigned to. ' + 
            '<em>This can either be done in two separate statements or with the declaration and assignment in one statement. </em><br />' +
            'Examples:  <br />  ' +
            'Separate declaration and assignment <br />' +
            'int variableName; <br />' +
            'variableName = 5; <br />' +
            'Single statement declaration and assignment <br />' +
            'int variableName = 5; <br />' +
            '</p>' +
            '<mark>' +
            'Declare the speed variable below with the appropriate type based upon it\'s value. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public Bob()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3"><textarea spellcheck="false" id="codeText" row="1" cols="50"></textarea><span id="result"></span></div>', 
            '<div class="ind-3">speed = 2;</div>',           
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'int speed;'
    },
    {
        level: 7,
        textInstructions : 
            '<summary>' +
            'Bob thinks he may want to use decimals in some situations.  Help Bob make the needed changes".  ' +
            '</summary>' +    
            '<p>' +
            'Variables are used to temporarily store values in memory to clarify value meaning and allow re-use of a value. ' + 
            'C# variables have types to define what values can be stored in a variable. ' +
            '<br /><em>Some common types are: <br /> ' +
            'int [allows whole number values] <br /> ' +
            'decimal [allows number values with decimals] <br />' +
            'string [allows a string of characters for a value] <br />' +
            'bool [allows true or false values]</em> <br />' +
            'Notice that an M is placed at the end of hard coded decimal values to clarify its type.<br />' +
            'Examples:  <br />  ' +
            'int variableName = 5; <br />' +
            'decimal variableName = 5.5M; <br />' +
            'string variableName = "this is a string"; <br />' +
            'bool variableName = true; <br />' +
            '</p>' +
            '<mark>' +
            'Add the necessary type below for speed based upon it\'s value. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public Bob()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3"><textarea spellcheck="false" id="codeText" row="1" cols="50"> speed = 2.5M;</textarea><span id="result"></span></div>',            
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'decimal speed = 2.5M;'
    },
    {
        level: 8,
        textInstructions : 
            '<summary>' +
            'Bob decides to try out his new found knowledge of variables to send a message back to Jim.  ' +
            'Help Bob use a variable to send a message.' +
            '</summary>' +    
            '<p>' +
            'Variables are used to temporarily store values in memory to clarify value meaning and allow re-use of a value. ' + 
            'C# variables have types to define what values can be stored in a variable. ' +
            '<br /><em>Some common types are: <br /> ' +
            'int [allows whole number values] <br /> ' +
            'decimal [allows number values with decimals] <br />' +
            'string [allows a string of characters for a value] <br />' +
            'bool [allows true or false values]</em> <br />' +
            'Examples:  <br />  ' +
            'int variableName = 5; <br />' +
            'decimal variableName = 5.5M; <br />' +
            'string variableName = "this is a string"; <br />' +
            'bool variableName = true; <br />' +
            '</p>' +
            '<mark>' +
            'Add the necessary type below for message based upon it\'s value. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public void SendMessage()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">Messenger messenger = new Messenger();</div>',
            '<div class="ind-3"><textarea spellcheck="false" id="codeText" row="1" cols="75"> message = "Thanks! I have the speed variable setup.  Now what?";</textarea><span id="result"></span></div>',  
            '<div class="ind-3">messenger.Send(message);</div>',
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'string message = "Thanks! I have the speed variable setup.  Now what?";'
    },
    {
        level: 9,
        textInstructions : 
            '<summary>' +
            'The response is quick.  "Great, create one more variable hasEnergy to determine if you have energy left.  Set it to true for now.  ' +
            'Help Bob declare and assign the hasEnergy variable.' +
            '</summary>' +    
            '<p>' +
            'Variables are used to temporarily store values in memory to clarify value meaning and allow re-use of a value. ' + 
            'C# variables have types to define what values can be stored in a variable. ' +
            '<br /><em>Some common types are: <br /> ' +
            'int [allows whole number values] <br /> ' +
            'decimal [allows number values with decimals] <br />' +
            'string [allows a string of characters for a value] <br />' +
            'bool [allows true or false values]</em> <br />' +
            'Examples:  <br />  ' +
            'int variableName = 5; <br />' +
            'decimal variableName = 5.5M; <br />' +
            'string variableName = "this is a string"; <br />' +
            'bool variableName = true; <br />' +
            '</p>' +
            '<mark>' +
            'Add the necessary type below for hasEnergy based upon it\'s value. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public Bob()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">decimal speed = 2.5M;</div>',
            '<div class="ind-3"><textarea spellcheck="false" id="codeText" row="1" cols="50"> hasEnergy = true;</textarea><span id="result"></span></div>',            
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'bool hasEnergy = true;'
    },
    {
        level: 10,
        textInstructions : 
            '<summary>' +
            'Another message from Jim.  Now that we have a hasEnergy variable, we need to learn how to check it to make ' +
            'sure you still have energy.  Use a conditional statement to check if you have energy.  ' +
            'Help Bob write a conditional statement to check his energy.' +
            '</summary>' +    
            '<p>' +
            'The if statement is a conditional statement block.  If the condition in the statement is true ' + 
            'then the statements inside of the statement block are executed.  Otherwise, they are ignored.  ' +
            'The condition must have a bool (true or false) result. ' +
            '<em> if statements start with the word if followed by a condition inside of parentheses.  ' +
            'This is followed by opening and closing curly brackets (braces) with one or multiple statements inside ' +
            'like all other statement blocks.</em><br />' +
            'Example:  <br />  ' +
            'bool variableName = true;<br />' +
            'if (variableName) <br />' +
            '{ <br /><span class="ind-1">Console.WriteLine("The condition is true.");</span> <br /> }' +
            '</p>' +
            '<mark>' +
            'Complete the if statement below with the necessary word and characters to check the hasEnergy variable. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public Bob()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">decimal speed = 2.5M;</div>',
            '<div class="ind-3">bool hasEnergy = true;</div>',
            '<div class="ind-3"><textarea spellcheck="false" id="codeText" row="1" cols="50"> hasEnergy)</textarea><span id="result"></span></div>',            
            '<div class="ind-3">{</div>',
            '<div class="ind-4">Console.WriteLine("Woo Hoo, I have energy");</div>',
            '<div class="ind-3">}</div>',
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'if (hasEnergy)'
    },
    {
        level: 11,
        textInstructions : 
            '<summary>' +
            'Bob realizes he might say or do something different if he doesn\'t have energy. ' +
            'Help Bob add to his conditional statement to do something different if he doesn\'t have energy.' +
            '</summary>' +    
            '<p>' +
            'An else statement block can be added at the end of an if statement block. ' + 
            'If the if condition is false (not true) then the statements within the else statement block execute.  ' +
            '<em> else statements follow an if statement block and have the word else.  ' +
            'This is followed by opening and closing curly brackets (braces) with one or multiple statements inside ' +
            'like all other statement blocks.</em><br />' +
            'Example:  <br />  ' +
            'bool variableName = false;<br />' +
            'if (variableName) <br />' +
            '{ <br /><span class="ind-1">Console.WriteLine("The condition is true");</span> <br /> }' +
            '<br /> else <br /> { <br /><span class="ind-1">Console.WriteLine("The condition is false");</span> <br /> }' +
            '</p>' +
            '<mark>' +
            'Add the necessary word to complete the else statement block below. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public Bob()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">decimal speed = 2.5M;</div>',
            '<div class="ind-3">bool hasEnergy = true;</div>',
            '<div class="ind-3">if (hasEnergy)</div>',            
            '<div class="ind-3">{</div>',
            '<div class="ind-4">Console.WriteLine("Woo Hoo, I have energy");</div>',
            '<div class="ind-3">}</div>',
            '<div class="ind-3"><textarea spellcheck="false" id="codeText" row="1" cols="50"></textarea><span id="result"></span></div>',             
            '<div class="ind-3">{</div>',
            '<div class="ind-4">Console.WriteLine("Oh no, out of energy");</div>',
            '<div class="ind-3">}</div>',            
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'else'
    },
    {
        level: 12,
        textInstructions : 
            '<summary>' +
            'Jim sends another message.  "Once you have your energy check in place, call the run function to run. ' +
            'The run function takes a speed parameter and returns a bool to indicate if you still have energy.  ' +
            'Help Bob call the run function.' +
            '</summary>' +    
            '<p>' +
            'A function is a statement block that contains statements that can be run as needed. ' +
            'This allows re-use of code and prevents the coder from writing the same code over and over again.  ' +
            'Values are passed to a function.  These are called parameters.  ' +
            'A function returns a result back.  ' + 
            '<em>To call a function write the name of the function followed by parentheses containing comma separated parameter values</em>.  ' +
            'The result of the function can be assigned to a variable or used as needed. ' +
            '<br/>Example:  int sum = add(5, 8); ' +
            '</p>' +
            '<mark>' +
            'Add the code below to call the run function passing the speed variable as a parameter and assigning the return value to the hasEnergy variable. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public Bob()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">decimal speed = 2.5M;</div>',
            '<div class="ind-3">bool hasEnergy = true;</div>',
            '<div class="ind-3"><textarea spellcheck="false" id="codeText" row="1" cols="50">hasEnergy = </textarea><span id="result"></span></div>',                                 
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'hasEnergy = run(speed);'
    },
    {
        level: 13,
        textInstructions : 
            '<summary>' +
            'Bam!  Completely unprepared Bob ran right into the wall.  That\'s going to hurt. ' +
            'Jim congratulates you on your first run.  "Great, you ran, now write a loop to run until you don\'t ' +
            'have any energy left to get out of there.  Help Bob run with a loop.' +
            '</summary>' +    
            '<p>' +
            'A loop is a statment block that executes while a condition is true. ' +
            'There are multiple types of loops.  One loop type is a while loop.  ' +
            '<em>A while loop has the word while followed by a condition inside of parentheses.</em>.  ' +
            '<br />Example:  <br />int myVariable = 1;<br />' +
            'while (myVariable < 10) <br />' +
            '{<br /> <span class="ind-1">myVariable =  myVariable + 1;</span><br />}' +
            '</p>' +
            '<mark>' +
            'Add the word and character below to complete the while loop to allow Bob to run while he has energy. ' +
            '</mark>', 
        codeLines : [
            '<div>namespace Zombie</div>',
            '<div>{</div>',
            '<div class="ind-1">public class Bob</div>',
            '<div class="ind-1">{</div>',
            '<div class="ind-2">public Bob()</div>',
            '<div class="ind-2">{</div>',
            '<div class="ind-3">decimal speed = 2.5M;</div>',
            '<div class="ind-3">bool hasEnergy = true;</div>',
            '<div class="ind-3"><textarea spellcheck="false" id="codeText" row="1" cols="50"> hasEnergy)</textarea><span id="result"></span></div>',                                 
            '<div class="ind-3">{</div>',
            '<div class="ind-4">hasEnergy = run(speed);</div>',
            '<div class="ind-3">}</div>',
            '<div class="ind-2">}</div>',
            '<div class="ind-1">}</div>',
            '<div>}</div>'
        ],
        correctAnswer: 'while (hasEnergy)'
    },
    {
        level: 14,
        textInstructions : 
            '<summary>' +
            'Bob ran out of his house and kept running until he made it to a close by park.  He is safe...for now.' +
            '</summary>',    
        codeLines : [
            'The End.'
        ],
        correctAnswer: ''
    }
]