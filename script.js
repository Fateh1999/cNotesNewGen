// Topic content data
const topicContent = {
    introduction: {
        title: "C Introduction",
        content: `
            <p>Welcome to the C programming language! C is a powerful, general-purpose programming language that has influenced many other languages.</p>
            <h3>What is C?</h3>
            <p>C was created by Dennis Ritchie at Bell Labs in 1972. It's known for its efficiency and control over system resources.</p>
            <h3>Why Learn C?</h3>
            <ul>
                <li>Foundation for many modern languages</li>
                <li>Direct hardware manipulation</li>
                <li>High performance</li>
                <li>Portable across platforms</li>
            </ul>
            <h3>Your First C Program</h3>
            <pre><code>#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("Welcome to C programming!\\n");
    return 0;
}`
    },
    output: {
        title: "Output (printf)",
        content: `
            <p>The printf() function is used to output data to the console. It's part of the stdio.h library.</p>
            <h3>Basic Syntax</h3>
            <pre><code>printf("format string", arguments);</code></pre>
            <h3>Format Specifiers</h3>
            <ul>
                <li><strong>%d</strong> - Integer</li>
                <li><strong>%f</strong> - Float</li>
                <li><strong>%c</strong> - Character</li>
                <li><strong>%s</strong> - String</li>
                <li><strong>%.2f</strong> - Float with 2 decimal places</li>
            </ul>
            <h3>Escape Sequences</h3>
            <ul>
                <li><strong>\\n</strong> - New line</li>
                <li><strong>\\t</strong> - Tab</li>
                <li><strong>\\\\</strong> - Backslash</li>
                <li><strong>\\"</strong> - Double quote</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int age = 25;
    float height = 5.9;
    char grade = 'A';
    
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);
    printf("Name: %s\\n", "John");
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    printf("Hello\\n");
    printf("World\\t!\\n");
    printf("Integer: %d\\n", 42);
    printf("Float: %.2f\\n", 3.14159);
    printf("Character: %c\\n", 'A');
    printf("String: %s\\n", "C Programming");
    
    return 0;
}`
    },
    comments: {
        title: "Comments",
        content: `
            <p>Comments are used to explain code and are ignored by the compiler. They make code more readable and maintainable.</p>
            <h3>Single-line Comments</h3>
            <pre><code>// This is a single-line comment
int age = 25; // This is an inline comment</code></pre>
            <h3>Multi-line Comments</h3>
            <pre><code>/* This is a multi-line comment
   that spans multiple lines */</code></pre>
            <h3>Best Practices</h3>
            <ul>
                <li>Use comments to explain WHY, not WHAT</li>
                <li>Keep comments concise and clear</li>
                <li>Update comments when code changes</li>
                <li>Avoid obvious comments</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    // Declare variables
    int a = 10, b = 20;
    
    /* Calculate sum
       and display result */
    int sum = a + b;
    printf("Sum: %d\\n", sum);
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    // Variable declaration
    int radius = 5;
    
    /* Calculate area of circle
       Formula: π * r² */
    float area = 3.14159 * radius * radius;
    
    printf("Radius: %d\\n", radius);
    printf("Area: %.2f\\n", area);
    
    return 0;
}`
    },
    variables: {
        title: "Variables",
        content: `
            <p>Variables are containers for storing data values. They have a name, type, and value.</p>
            <h3>Declaring Variables</h3>
            <pre><code>int age;          // declaration
int age = 25;    // declaration with initialization</code></pre>
            <h3>Naming Rules</h3>
            <ul>
                <li>Must start with a letter or underscore</li>
                <li>Can contain letters, digits, and underscores</li>
                <li>Case-sensitive</li>
                <li>No spaces or special characters</li>
                <li>Cannot use reserved keywords</li>
            </ul>
            <h3>Good Practices</h3>
            <ul>
                <li>Use descriptive names</li>
                <li>Follow naming conventions (camelCase or snake_case)</li>
                <li>Initialize variables when possible</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int student_age = 20;
    float average_score = 85.5;
    char grade = 'A';
    
    printf("Age: %d\\n", student_age);
    printf("Score: %.1f\\n", average_score);
    printf("Grade: %c\\n", grade);
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int count = 0;
    float price = 99.99;
    char symbol = '$';
    
    count = count + 1;
    printf("Count: %d\\n", count);
    printf("Price: %c%.2f\\n", symbol, price);
    
    return 0;
}`
    },
    "data-types": {
        title: "Data Types",
        content: `
            <p>C has several built-in data types to store different kinds of data.</p>
            <h3>Basic Data Types</h3>
            <ul>
                <li><strong>int</strong> - Integer (2-4 bytes)</li>
                <li><strong>float</strong> - Floating-point (4 bytes)</li>
                <li><strong>double</strong> - Double precision (8 bytes)</li>
                <li><strong>char</strong> - Character (1 byte)</li>
            </ul>
            <h3>Modified Types</h3>
            <ul>
                <li><strong>short int</strong> - Short integer</li>
                <li><strong>long int</strong> - Long integer</li>
                <li><strong>unsigned</strong> - Only positive values</li>
                <li><strong>signed</strong> - Positive and negative</li>
            </ul>
            <h3>Size Ranges</h3>
            <pre><code>int: -2,147,483,648 to 2,147,483,647
float: ±3.4e38 (7 digits precision)
double: ±1.7e308 (15 digits precision)
char: -128 to 127</code></pre>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int integer_num = 100;
    float float_num = 3.14f;
    double double_num = 3.14159265359;
    char character = 'A';
    
    printf("int: %d\\n", integer_num);
    printf("float: %.2f\\n", float_num);
    printf("double: %.11f\\n", double_num);
    printf("char: %c\\n", character);
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    short small_num = 32000;
    long large_num = 1000000L;
    unsigned int positive = 4000000000u;
    
    printf("short: %d\\n", small_num);
    printf("long: %ld\\n", large_num);
    printf("unsigned: %u\\n", positive);
    
    return 0;
}`
    },
    operators: {
        title: "Operators",
        content: `
            <p>Operators are symbols that tell the compiler to perform specific mathematical or logical manipulations.</p>
            <h3>Arithmetic Operators</h3>
            <ul>
                <li><strong>+</strong> Addition</li>
                <li><strong>-</strong> Subtraction</li>
                <li><strong>*</strong> Multiplication</li>
                <li><strong>/</strong> Division</li>
                <li><strong>%</strong> Modulus (remainder)</li>
            </ul>
            <h3>Relational Operators</h3>
            <ul>
                <li><strong>==</strong> Equal to</li>
                <li><strong>!=</strong> Not equal to</li>
                <li><strong>></strong> Greater than</li>
                <li><strong><</strong> Less than</li>
                <li><strong>>=</strong> Greater than or equal</li>
                <li><strong><=</strong> Less than or equal</li>
            </ul>
            <h3>Logical Operators</h3>
            <ul>
                <li><strong>&&</strong> Logical AND</li>
                <li><strong>||</strong> Logical OR</li>
                <li><strong>!</strong> Logical NOT</li>
            </ul>
            <h3>Assignment Operators</h3>
            <ul>
                <li><strong>=</strong> Simple assignment</li>
                <li><strong>+=</strong> Add and assign</li>
                <li><strong>-=</strong> Subtract and assign</li>
                <li><strong>*=</strong> Multiply and assign</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int a = 10, b = 3;
    
    printf("Sum: %d\\n", a + b);
    printf("Difference: %d\\n", a - b);
    printf("Product: %d\\n", a * b);
    printf("Division: %d\\n", a / b);
    printf("Remainder: %d\\n", a % b);
    printf("a == b: %d\\n", a == b);
    printf("a > b: %d\\n", a > b);
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int a = 10;
    
    a += 5;  // a = a + 5
    printf("After += 5: %d\\n", a);
    
    a *= 2;  // a = a * 2
    printf("After *= 2: %d\\n", a);
    
    int result = (a > 20) && (a < 30);
    printf("Result: %d\\n", result);
    
    return 0;
}`
    },
    "if-else": {
        title: "If-Else",
        content: `
            <p>If-else statements allow you to execute different code based on conditions.</p>
            <h3>If Statement</h3>
            <pre><code>if (condition) {
    // code if condition is true
}</code></pre>
            <h3>If-Else Statement</h3>
            <pre><code>if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}</code></pre>
            <h3>If-Else If-Else</h3>
            <pre><code>if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if all conditions are false
}</code></pre>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int score = 85;
    
    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 70) {
        printf("Grade: C\\n");
    } else {
        printf("Grade: F\\n");
    }
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int number = 15;
    
    if (number > 0) {
        printf("Positive number\\n");
    } else if (number < 0) {
        printf("Negative number\\n");
    } else {
        printf("Zero\\n");
    }
    
    // Check if even or odd
    if (number % 2 == 0) {
        printf("Even\\n");
    } else {
        printf("Odd\\n");
    }
    
    return 0;
}`
    },
    switch: {
        title: "Switch",
        content: `
            <p>Switch statements provide a cleaner way to handle multiple conditions based on a single variable.</p>
            <h3>Syntax</h3>
            <pre><code>switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code if no case matches
}</code></pre>
            <h3>Key Points</h3>
            <ul>
                <li>Expression must be integer or character</li>
                <li>break is used to exit the switch</li>
                <li>default case is optional</li>
                <li>Without break, execution continues to next case</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int day = 3;
    
    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        default:
            printf("Weekend\\n");
    }
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    char grade = 'B';
    
    switch (grade) {
        case 'A':
            printf("Excellent!\\n");
            break;
        case 'B':
            printf("Good!\\n");
            break;
        case 'C':
            printf("Average\\n");
            break;
        case 'F':
            printf("Fail\\n");
            break;
        default:
            printf("Invalid grade\\n");
    }
    
    return 0;
}`
    },
    while: {
        title: "While Loop",
        content: `
            <p>The while loop repeats code as long as a condition is true.</p>
            <h3>While Loop Syntax</h3>
            <pre><code>while (condition) {
    // code to repeat
}</code></pre>
            <h3>Do-While Loop</h3>
            <pre><code>do {
    // code to repeat
} while (condition);</code></pre>
            <h3>Difference</h3>
            <ul>
                <li><strong>while</strong> - checks condition before execution</li>
                <li><strong>do-while</strong> - executes at least once, then checks condition</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int i = 1;
    
    // While loop
    while (i <= 5) {
        printf("%d ", i);
        i++;
    }
    printf("\\n");
    
    // Do-while loop
    i = 1;
    do {
        printf("%d ", i);
        i++;
    } while (i <= 5);
    printf("\\n");
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int number = 5;
    int factorial = 1;
    
    // Calculate factorial using while
    while (number > 0) {
        factorial *= number;
        number--;
    }
    
    printf("Factorial: %d\\n", factorial);
    
    return 0;
}`
    },
    for: {
        title: "For Loop",
        content: `
            <p>The for loop is used when you know how many times you want to repeat code.</p>
            <h3>Syntax</h3>
            <pre><code>for (initialization; condition; increment) {
    // code to repeat
}</code></pre>
            <h3>Components</h3>
            <ul>
                <li><strong>Initialization</strong> - executed once at start</li>
                <li><strong>Condition</strong> - checked before each iteration</li>
                <li><strong>Increment</strong> - executed after each iteration</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int i;
    
    // Basic for loop
    for (i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    
    // For loop with step
    for (i = 0; i <= 10; i += 2) {
        printf("%d ", i);
    }
    printf("\\n");
    
    // Reverse loop
    for (i = 5; i >= 1; i--) {
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int sum = 0;
    int i;
    
    // Sum of first 10 numbers
    for (i = 1; i <= 10; i++) {
        sum += i;
    }
    
    printf("Sum of 1 to 10: %d\\n", sum);
    
    // Print even numbers
    printf("Even numbers: ");
    for (i = 2; i <= 10; i += 2) {
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}`
    },
    "break-continue": {
        title: "Break & Continue",
        content: `
            <p>Break and continue are control statements that modify loop behavior.</p>
            <h3>Break</h3>
            <p>Immediately exits the loop or switch statement.</p>
            <pre><code>for (i = 0; i < 10; i++) {
    if (i == 5) {
        break;  // exit loop when i is 5
    }
    printf("%d ", i);
}</code></pre>
            <h3>Continue</h3>
            <p>Skips the rest of the current iteration and continues with the next.</p>
            <pre><code>for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;  // skip when i is 5
    }
    printf("%d ", i);
}</code></pre>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int i;
    
    // Using break
    printf("Break example: ");
    for (i = 1; i <= 10; i++) {
        if (i == 6) {
            break;
        }
        printf("%d ", i);
    }
    printf("\\n");
    
    // Using continue
    printf("Continue example: ");
    for (i = 1; i <= 10; i++) {
        if (i == 6) {
            continue;
        }
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int i;
    
    // Find first number divisible by 7
    for (i = 1; ; i++) {
        if (i % 7 == 0) {
            printf("First number divisible by 7: %d\\n", i);
            break;
        }
    }
    
    // Print odd numbers only
    printf("Odd numbers: ");
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            continue;
        }
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}`
    },
    arrays: {
        title: "Arrays",
        content: `
            <p>Arrays are collections of elements of the same type stored in contiguous memory locations.</p>
            <h3>Declaring Arrays</h3>
            <pre><code>int numbers[5];                    // array of 5 integers
int scores[] = {90, 85, 78, 92, 88}; // initialized array</code></pre>
            <h3>Accessing Elements</h3>
            <pre><code>int first = scores[0];  // first element (index 0)
int last = scores[4];   // last element (index 4)</code></pre>
            <h3>Array Properties</h3>
            <ul>
                <li>Zero-based indexing</li>
                <li>Fixed size once declared</li>
                <li>Contiguous memory allocation</li>
                <li>Same data type for all elements</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int i;
    
    // Print all elements
    for (i = 0; i < 5; i++) {
        printf("Element %d: %d\\n", i, numbers[i]);
    }
    
    // Calculate sum
    int sum = 0;
    for (i = 0; i < 5; i++) {
        sum += numbers[i];
    }
    printf("Sum: %d\\n", sum);
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int i, sum = 0, max, min;
    
    // Calculate sum
    for (i = 0; i < 5; i++) {
        sum += numbers[i];
    }
    printf("Sum: %d\\n", sum);
    printf("Average: %.1f\\n", (float)sum / 5);
    
    // Find max and min
    max = min = numbers[0];
    for (i = 1; i < 5; i++) {
        if (numbers[i] > max) max = numbers[i];
        if (numbers[i] < min) min = numbers[i];
    }
    printf("Max: %d\\n", max);
    printf("Min: %d\\n", min);
    
    return 0;
}`
    },
    strings: {
        title: "Strings",
        content: `
            <p>In C, strings are arrays of characters terminated by a null character ('\\0').</p>
            <h3>String Declaration</h3>
            <pre><code>char str1[] = "Hello";
char str2[20] = "World";
char str3[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};</code></pre>
            <h3>String Functions</h3>
            <ul>
                <li><strong>strlen()</strong> - Get string length</li>
                <li><strong>strcpy()</strong> - Copy string</li>
                <li><strong>strcmp()</strong> - Compare strings</li>
                <li><strong>strcat()</strong> - Concatenate strings</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    
    printf("Length: %lu\\n", strlen(str1));
    
    strcat(str1, " ");
    strcat(str1, str2);
    printf("Concatenated: %s\\n", str1);
    
    printf("Comparison: %d\\n", strcmp("Apple", "Banana"));
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>
#include <string.h>

int main() {
    char name[50];
    char greeting[50] = "Hello, ";
    
    printf("Enter your name: ");
    scanf("%s", name);
    
    strcat(greeting, name);
    strcat(greeting, "!");
    
    printf("%s\\n", greeting);
    printf("Name length: %lu\\n", strlen(name));
    
    return 0;
}`
    },
    address: {
        title: "Address (&)",
        content: `
            <p>The address operator (&) is used to get the memory address of a variable.</p>
            <h3>Getting Address</h3>
            <pre><code>int num = 10;
printf("Address of num: %p", &num);</code></pre>
            <h3>Memory Address Format</h3>
            <ul>
                <li>Addresses are displayed in hexadecimal</li>
                <li>Use %p format specifier</li>
                <li>Each variable has a unique address</li>
                <li>Addresses depend on system and runtime</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int num = 10;
    char letter = 'A';
    float pi = 3.14;
    
    printf("Value of num: %d\\n", num);
    printf("Address of num: %p\\n", &num);
    
    printf("Value of letter: %c\\n", letter);
    printf("Address of letter: %p\\n", &letter);
    
    printf("Value of pi: %.2f\\n", pi);
    printf("Address of pi: %p\\n", &pi);
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int a = 10, b = 20, c = 30;
    
    printf("a = %d, address = %p\\n", a, &a);
    printf("b = %d, address = %p\\n", b, &b);
    printf("c = %d, address = %p\\n", c, &c);
    
    // Using address with pointers
    int *ptr = &a;
    printf("Pointer points to: %p\\n", ptr);
    printf("Value at address: %d\\n", *ptr);
    
    return 0;
}`
    },
    pointers: {
        title: "Pointers",
        content: `
            <p>Pointers are variables that store memory addresses. They are a powerful feature of C that allows direct memory manipulation.</p>
            <h3>Declaring Pointers</h3>
            <pre><code>int *ptr;         // pointer to an integer
float *fptr;      // pointer to a float
char *cptr;       // pointer to a character</code></pre>
            <h3>Pointer Operations</h3>
            <ul>
                <li><strong>&</strong> - Get address of variable</li>
                <li><strong>*</strong> - Dereference (get value at address)</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;
    
    printf("Value: %d\\n", num);
    printf("Address: %p\\n", &num);
    printf("Pointer value: %p\\n", ptr);
    printf("Dereferenced: %d\\n", *ptr);
    
    // Modify value through pointer
    *ptr = 20;
    printf("New value: %d\\n", num);
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int a = 10, b = 20;
    int *ptr1, *ptr2;
    
    ptr1 = &a;
    ptr2 = &b;
    
    printf("a = %d, *ptr1 = %d\\n", a, *ptr1);
    printf("b = %d, *ptr2 = %d\\n", b, *ptr2);
    
    // Swap using pointers
    int temp = *ptr1;
    *ptr1 = *ptr2;
    *ptr2 = temp;
    
    printf("After swap:\\n");
    printf("a = %d, b = %d\\n", a, b);
    
    return 0;
}`
    },
    functions: {
        title: "Functions",
        content: `
            <p>Functions are blocks of code that perform specific tasks. They help organize code and make it reusable.</p>
            <h3>Function Structure</h3>
            <pre><code>return_type function_name(parameters) {
    // function body
    return value;
}</code></pre>
            <h3>Function Components</h3>
            <ul>
                <li><strong>Return type</strong> - Type of value returned (void if none)</li>
                <li><strong>Function name</strong> - Identifier for the function</li>
                <li><strong>Parameters</strong> - Input values (optional)</li>
                <li><strong>Body</strong> - Code to execute</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

// Function declaration
int add(int a, int b) {
    return a + b;
}

void greet() {
    printf("Hello!\\n");
}

int main() {
    int result = add(5, 3);
    printf("Sum: %d\\n", result);
    greet();
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int square(int num) {
    return num * num;
}

int cube(int num) {
    return num * num * num;
}

int main() {
    int number = 4;
    
    printf("Square of %d: %d\\n", number, square(number));
    printf("Cube of %d: %d\\n", number, cube(number));
    
    return 0;
}`
    },
    parameters: {
        title: "Function Parameters",
        content: `
            <p>Parameters are values passed to functions to work with. C supports two types of parameter passing.</p>
            <h3>Pass by Value</h3>
            <pre><code>void modify(int x) {
    x = 100;  // Only changes local copy
}</code></pre>
            <h3>Pass by Reference (using pointers)</h3>
            <pre><code>void modify(int *x) {
    *x = 100;  // Changes original variable
}</code></pre>
            <h3>Key Differences</h3>
            <ul>
                <li><strong>Pass by value</strong> - Copy of value is passed</li>
                <li><strong>Pass by reference</strong> - Address is passed</li>
                <li>Pass by reference can modify original variables</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

void passByValue(int x) {
    x = 100;
    printf("Inside function: %d\\n", x);
}

void passByReference(int *x) {
    *x = 100;
    printf("Inside function: %d\\n", *x);
}

int main() {
    int num = 10;
    
    printf("Before: %d\\n", num);
    passByValue(num);
    printf("After pass by value: %d\\n", num);
    
    passByReference(&num);
    printf("After pass by reference: %d\\n", num);
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;
    
    printf("Before swap: x = %d, y = %d\\n", x, y);
    swap(&x, &y);
    printf("After swap: x = %d, y = %d\\n", x, y);
    
    return 0;
}`
    },
    scope: {
        title: "Scope",
        content: `
            <p>Scope determines where a variable can be accessed in your code.</p>
            <h3>Local Scope</h3>
            <pre><code>void function() {
    int local = 10;  // Only accessible inside this function
}</code></pre>
            <h3>Global Scope</h3>
            <pre><code>int global = 20;  // Accessible throughout the program

void function() {
    global = 30;  // Can access and modify
}</code></pre>
            <h3>Scope Rules</h3>
            <ul>
                <li>Local variables take precedence over global</li>
                <li>Global variables are initialized to 0</li>
                <li>Local variables must be initialized</li>
                <li>Block scope applies to any {} block</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int global = 100;

void demonstrateScope() {
    int local = 50;
    printf("Local: %d, Global: %d\\n", local, global);
}

int main() {
    int local = 25;
    
    printf("Main local: %d\\n", local);
    printf("Global: %d\\n", global);
    
    demonstrateScope();
    
    // Block scope
    {
        int block = 75;
        printf("Block: %d\\n", block);
    }
    // block is not accessible here
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int count = 0;

void increment() {
    count++;  // Modifies global variable
    printf("Count: %d\\n", count);
}

int main() {
    int count = 10;  // Local variable
    
    printf("Local count: %d\\n", count);
    printf("Global count: %d\\n", count);  // This prints local!
    
    increment();  // Modifies global
    increment();
    
    printf("Local count after: %d\\n", count);
    
    return 0;
}`
    },
    declaration: {
        title: "Declaration",
        content: `
            <p>Function declarations tell the compiler about a function's name, return type, and parameters before it's used.</p>
            <h3>Function Declaration (Prototype)</h3>
            <pre><code>return_type function_name(parameter_types);</code></pre>
            <h3>Declaration vs Definition</h3>
            <ul>
                <li><strong>Declaration</strong> - Just the function signature</li>
                <li><strong>Definition</strong> - Complete function with body</li>
            </ul>
            <h3>Why Declare?</h3>
            <ul>
                <li>Allows functions to be used before definition</li>
                <li>Provides type checking</li>
                <li>Improves code organization</li>
                <li>Required for header files</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

// Function declarations
int add(int a, int b);
void greet();
float calculateArea(float radius);

int main() {
    printf("Sum: %d\\n", add(5, 3));
    greet();
    printf("Area: %.2f\\n", calculateArea(5.0));
    return 0;
}

// Function definitions
int add(int a, int b) {
    return a + b;
}

void greet() {
    printf("Hello!\\n");
}

float calculateArea(float radius) {
    return 3.14159 * radius * radius;
}</code></pre>
        `,
        example: `#include <stdio.h>

// Function declarations
int factorial(int n);
int isPrime(int num);

int main() {
    int num = 5;
    printf("Factorial of %d: %d\\n", num, factorial(num));
    printf("Is %d prime? %d\\n", num, isPrime(num));
    return 0;
}

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int isPrime(int num) {
    if (num <= 1) return 0;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return 0;
    }
    return 1;
}`
    },
    recursion: {
        title: "Recursion",
        content: `
            <p>Recursion is when a function calls itself to solve a problem by breaking it into smaller sub-problems.</p>
            <h3>Recursive Function Structure</h3>
            <pre><code>return_type recursive_function(parameters) {
    // Base case (stopping condition)
    if (base_case) {
        return base_value;
    }
    // Recursive case
    return recursive_function(modified_parameters);
}</code></pre>
            <h3>Key Components</h3>
            <ul>
                <li><strong>Base case</strong> - Condition to stop recursion</li>
                <li><strong>Recursive case</strong> - Function calls itself</li>
                <li><strong>Progress toward base case</strong> - Each call must get closer</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int factorial(int n) {
    if (n <= 1) {  // Base case
        return 1;
    }
    return n * factorial(n - 1);  // Recursive case
}

int main() {
    int num = 5;
    printf("Factorial of %d: %d\\n", num, factorial(num));
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    printf("Factorial of 5: %d\\n", factorial(5));
    printf("Fibonacci of 7: %d\\n", fibonacci(7));
    return 0;
}`
    },
    structures: {
        title: "Structures",
        content: `
            <p>Structures (structs) are user-defined data types that group related variables of different types.</p>
            <h3>Defining Structures</h3>
            <pre><code>struct Person {
    char name[50];
    int age;
    float height;
};</code></pre>
            <h3>Using Structures</h3>
            <pre><code>struct Person person1;
strcpy(person1.name, "John");
person1.age = 25;
person1.height = 5.9;</code></pre>
            <h3>Structure Pointer</h3>
            <pre><code>struct Person *ptr = &person1;
ptr->age = 26;  // Access using arrow operator</code></pre>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student student1;
    strcpy(student1.name, "Alice");
    student1.age = 20;
    student1.grade = 85.5;
    
    printf("Name: %s\\n", student1.name);
    printf("Age: %d\\n", student1.age);
    printf("Grade: %.1f\\n", student1.grade);
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student students[3];
    int i;
    
    strcpy(students[0].name, "Alice");
    students[0].age = 20;
    students[0].grade = 85.5;
    
    strcpy(students[1].name, "Bob");
    students[1].age = 21;
    students[1].grade = 92.0;
    
    strcpy(students[2].name, "Charlie");
    students[2].age = 19;
    students[2].grade = 78.5;
    
    for (i = 0; i < 3; i++) {
        printf("%s - Age: %d, Grade: %.1f\\n", 
               students[i].name, students[i].age, students[i].grade);
    }
    
    return 0;
}`
    },
    union: {
        title: "Union",
        content: `
            <p>Unions are similar to structures but all members share the same memory location.</p>
            <h3>Defining Unions</h3>
            <pre><code>union Data {
    int i;
    float f;
    char str[20];
};</code></pre>
            <h3>Key Differences from Structs</h3>
            <ul>
                <li>Union members share same memory space</li>
                <li>Size = size of largest member</li>
                <li>Only one member can be active at a time</li>
                <li>Struct members have separate memory</li>
            </ul>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data data;
    
    data.i = 10;
    printf("Integer: %d\\n", data.i);
    
    data.f = 3.14;
    printf("Float: %.2f\\n", data.f);
    
    strcpy(data.str, "Hello");
    printf("String: %s\\n", data.str);
    
    printf("Size of union: %lu bytes\\n", sizeof(data));
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

union Number {
    int i;
    float f;
};

int main() {
    union Number num;
    
    num.i = 42;
    printf("As integer: %d\\n", num.i);
    
    num.f = 3.14;
    printf("As float: %.2f\\n", num.f);
    
    // Note: accessing i after setting f gives undefined behavior
    printf("Size: %lu bytes\\n", sizeof(num));
    
    return 0;
}`
    },
    bitwise: {
        title: "Bitwise Operators",
        content: `
            <p>Bitwise operators work on individual bits of integer values.</p>
            <h3>Bitwise Operators</h3>
            <ul>
                <li><strong>&</strong> - Bitwise AND</li>
                <li><strong>|</strong> - Bitwise OR</li>
                <li><strong>^</strong> - Bitwise XOR</li>
                <li><strong>~</strong> - Bitwise NOT (complement)</li>
                <li><strong><<</strong> - Left shift</li>
                <li><strong>>></strong> - Right shift</li>
            </ul>
            <h3>Truth Tables</h3>
            <pre><code>AND:  1&1=1, 1&0=0, 0&1=0, 0&0=0
OR:   1|1=1, 1|0=1, 0|1=1, 0|0=0
XOR:  1^1=0, 1^0=1, 0^1=1, 0^0=0</code></pre>
            <h3>Example</h3>
            <pre><code>#include <stdio.h>

int main() {
    int a = 5;  // Binary: 0101
    int b = 3;  // Binary: 0011
    
    printf("a = %d, b = %d\\n", a, b);
    printf("a & b = %d\\n", a & b);  // 0001 = 1
    printf("a | b = %d\\n", a | b);  // 0111 = 7
    printf("a ^ b = %d\\n", a ^ b);  // 0110 = 6
    printf("~a = %d\\n", ~a);        // Complement
    printf("a << 1 = %d\\n", a << 1); // 1010 = 10
    printf("a >> 1 = %d\\n", a >> 1); // 0010 = 2
    
    return 0;
}</code></pre>
        `,
        example: `#include <stdio.h>

int main() {
    int num = 13;  // Binary: 1101
    
    printf("Original: %d\\n", num);
    
    // Check if bit is set
    if (num & 8) {
        printf("3rd bit is set\\n");
    }
    
    // Set a bit
    num = num | 16;  // Set 4th bit
    printf("After setting 4th bit: %d\\n", num);
    
    // Clear a bit
    num = num & ~8;  // Clear 3rd bit
    printf("After clearing 3rd bit: %d\\n", num);
    
    // Toggle a bit
    num = num ^ 4;   // Toggle 2nd bit
    printf("After toggling 2nd bit: %d\\n", num);
    
    return 0;
}`
    }
};

// Current topic
let currentTopic = 'introduction';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupTopicNavigation();
    setupEditorControls();
});

// Setup topic navigation
function setupTopicNavigation() {
    const topicLinks = document.querySelectorAll('#topic-list a');
    
    topicLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            topicLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get topic data
            const topic = this.getAttribute('data-topic');
            currentTopic = topic;
            
            // Update content
            updateTopicContent(topic);
        });
    });
}

// Update topic content
function updateTopicContent(topic) {
    const topicData = topicContent[topic];
    
    if (topicData) {
        document.getElementById('topic-title').textContent = topicData.title;
        document.getElementById('topic-explanation').innerHTML = topicData.content;
    }
}

// Setup editor controls
function setupEditorControls() {
    const runButton = document.getElementById('run-code');
    const clearButton = document.getElementById('clear-code');
    const loadExampleButton = document.getElementById('load-example');
    
    runButton.addEventListener('click', runCode);
    clearButton.addEventListener('click', clearCode);
    loadExampleButton.addEventListener('click', loadExample);
}

// Run code (simulated execution)
function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputArea = document.getElementById('output-area');
    
    outputArea.textContent = 'Compiling and running...';
    
    // Simulate compilation and execution
    setTimeout(() => {
        try {
            const output = simulateCodeExecution(code);
            outputArea.textContent = output;
        } catch (error) {
            outputArea.textContent = 'Error: ' + error.message;
        }
    }, 500);
}

// Simulate code execution (basic interpretation)
function simulateCodeExecution(code) {
    let output = '';
    
    // Extract printf statements
    const printfRegex = /printf\s*\(\s*"([^"]*)"\s*(?:,\s*([^)]+))?\s*\)\s*;/g;
    let match;
    
    while ((match = printfRegex.exec(code)) !== null) {
        let format = match[1];
        let args = match[2];
        
        // Handle format specifiers
        if (args) {
            // Simple variable replacement (very basic simulation)
            const argList = args.split(',').map(arg => arg.trim());
            format = format.replace(/%d/g, () => {
                const arg = argList.shift();
                if (arg && !isNaN(arg)) return parseInt(arg);
                if (arg && arg.match(/^\d+$/)) return parseInt(arg);
                return '?';
            });
            format = format.replace(/%f/g, () => {
                const arg = argList.shift();
                if (arg && !isNaN(arg)) return parseFloat(arg);
                return '?';
            });
            format = format.replace(/%.1f/g, () => {
                const arg = argList.shift();
                if (arg && !isNaN(arg)) return parseFloat(arg).toFixed(1);
                return '?';
            });
            format = format.replace(/%c/g, () => {
                const arg = argList.shift();
                if (arg && arg.length === 3 && arg.startsWith("'") && arg.endsWith("'")) {
                    return arg[1];
                }
                return '?';
            });
            format = format.replace(/%s/g, () => {
                const arg = argList.shift();
                if (arg) return arg.replace(/"/g, '');
                return '?';
            });
            format = format.replace(/%lu/g, () => {
                const arg = argList.shift();
                if (arg && !isNaN(arg)) return parseInt(arg);
                return '?';
            });
            format = format.replace(/%p/g, () => {
                return '0x7ffee4b3a8ac'; // Simulated memory address
            });
        }
        
        // Handle escape sequences
        format = format.replace(/\\n/g, '\n');
        format = format.replace(/\\t/g, '\t');
        
        output += format;
    }
    
    if (output === '') {
        output = 'No output generated. Make sure your code has printf statements.';
    }
    
    return output;
}

// Clear code editor
function clearCode() {
    document.getElementById('code-editor').value = '';
    document.getElementById('output-area').textContent = '// Output will appear here';
}

// Load example code for current topic
function loadExample() {
    const topicData = topicContent[currentTopic];
    
    if (topicData && topicData.example) {
        document.getElementById('code-editor').value = topicData.example;
        document.getElementById('output-area').textContent = '// Example loaded. Click "Run Code" to execute.';
    }
}