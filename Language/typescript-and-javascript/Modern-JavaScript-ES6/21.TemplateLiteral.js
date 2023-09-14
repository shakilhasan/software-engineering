//Template Literals
{
    //Back-Tics Syntax,use back-ticks (``) rather than the quotes ("") to define a string:
    let text1 = `Hello World!`;
    //single and double Quotes Inside Strings
    let text2 = `He's often called "Johnny"`;
    //Multiline Strings
    let text3 = `The quick
    brown fox
    jumps over
    the lazy dog`;

    //Interpolation
    {
        //Variable Substitutions
        {
            let firstName = "John";
            let lastName = "Doe";

            let text = `Welcome ${firstName}, ${lastName}!`;
        }
        //Expression Substitution
        {
            let price = 10;
            let VAT = 0.25;

            let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
        }
        //HTML Templates
        {
            let header = "Templates Literals";
            let tags = ["template literals", "javascript", "es6"];

            let html = `<h2>${header}</h2><ul>`;
            for (const x of tags) {
                html += `<li>${x}</li>`;
            }

            html += `</ul>`;
        }
    }

}