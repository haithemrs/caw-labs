1- (:focus Pseudo-class)

The :focus pseudo-class is applied to an element when it becomes active and ready for user input—for example, when a user clicks on or tabs into a text field. It helps visually indicate which element is currently selected, making forms and interactive elements easier to use and improving accessibility.





2- (Specificity Example: footer h1 vs h1
footer h1 { font-size: 1.2em; }
h1 { font-size: 2em; }


Although both rules target <h1> elements, footer h1 is more specific because it combines two selectors (footer and h1), while h1 alone
is a single type selector.
As a result, the footer h1 rule takes precedence and is applied to the <h1> inside the <footer> section.