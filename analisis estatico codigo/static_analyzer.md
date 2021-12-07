ESLint Report body { font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; padding: 0; color: #333; } code { font: 12px monaco, monospace; } #overview { background: #f3f3f3; padding: 20px 30px; border-bottom: 10px solid #ccc; } #overview.bg-success {border-color: #008000;} #overview.bg-warning {border-color: #ffa500;} #overview.bg-error {border-color: #f00;} .bg-success {background: #dff0d8;} .bg-warning {background: #fcf8e3;} .bg-error {background: #f2dede;} .container { padding: 0 30px; } .page-header { padding-bottom: 9px; margin: 20px 0 20px; border-bottom: 1px solid #eee; } .row { display: table; width: 100%; } .column { padding: 15px; display: table-cell; } .text-success { color: #468847; } .text-warning { color: #f0ad4e; } .text-error { color: #b94a48; } td, th { padding: 5px 10px; } h1 { margin: 0; } h1 small { text-transform: capitalize; } table#fileOverview { margin: 30px; width: calc(100vw - 120px); border-radius: 5px; border: 1px solid #ddd; border-spacing: 0; } th { font-weight: 400; font-size: normal; text-align: left; border-bottom: 1px solid #ddd; } tr.lint-result { cursor: pointer; } tr.lint-result.bg-success { cursor: default; } th span { font-weight: 700; float: right; margin-left: 20px; } th span:after { content: ""; clear: both; display: block; } tr:last-child td { border-bottom: none; } tr.bg-success th { border-color: #d6e9c6; } tr.bg-warning th { border-color: #fbeed5; } tr.bg-error th { border-color: #eed3d7; } td { border-bottom: 1px solid #ddd; } td a { color: #2780e3; text-decoration: none; } td a:hover { color: #165ba8; text-decoration: underline; } .icon-box { width: 30px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } .result-summary { text-align: right; } /\* Summary Styles \*/ .summary-table { width: 100%; } .summary-table, .summary-table th, .summary-table td { color: #333; border: 1px solid #ddd; border-collapse: collapse; margin: 0; } .summary-table th { color: #444; background-color: #fafafa; font-weight: 700; text-transform: capitalize; border-bottom-width: 2px; } /\* Filters \*/ .filters {border: none;} .filters legend { font-weight: bold; } .filters input\[type="radio"\] { position: absolute; opacity: 0; } .btn-radio { display: inline-block; font-weight: bold; background: #fff; border: 1px solid #ccc; padding: 6px 12px; cursor: pointer; } input\[type="radio"\]:focus + .btn-radio { outline: 2px dotted #000; } input\[type="radio"\]:checked + .btn-radio { background: #e6e6e6; -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); } /\* Accordion \*/ .caret { display: inline-block; width: 0; height: 0; margin-left: 2px; vertical-align: middle; border-left: 6px dashed; border-top: 6px solid transparent; border-bottom: 6px solid transparent; } .open .caret{ border-top: 6px dashed; border-right: 6px solid transparent; border-left: 6px solid transparent; } .bg-success .caret { border: none; height: auto; width: auto; } .bg-success .caret:before { content: '\\02713'; } /\* Tabs \*/ .nav-tabs { margin-bottom: 15px; padding-left: 0; list-style: none; border-bottom: 1px solid #ddd; } .nav-tabs > li { position: relative; display: inline-block; margin-bottom: -1px; } .nav-tabs > li > button { position: relative; display: block; padding: 10px 15px; margin-right: 2px; line-height: 1.5; cursor: pointer; color: #2780e3; background-color: transparent; border: 1px solid transparent; } .nav-tabs > li > button:focus, .nav-tabs > li > button:hover { color: #165ba8; background-color: #e6e6e6; border-color: #e6e6e6 #e6e6e6 #ddd; } .nav-tabs > li.active > button { color: #555; background-color: #fff; border: 1px solid #ddd; border-bottom-color: transparent; cursor: default; text-decoration: none; } /\* Code Styles \*/ table.source-code { width: 100%; margin-top: 10px; border-collapse: collapse; border: 1px solid #cbcbcb; color: #363636; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; } table.source-code thead { display: none; } table.source-code td { color: #363636; border: none; } table.source-code td.line { width: 20px; background: #eaeaea; text-align: center; font-size: 11px; padding: 0 10px; color: #949494; } table.source-code tr.bg-success { background: #fff; } table.source-code tr.bg-warning td.line { background: #fbeed5; } table.source-code tr.bg-warning td { background: #fcf8e3; } table.source-code tr.bg-error td.line { background: #e6c3c7; } table.source-code tr.bg-error td { background: #f8d5d8; } table.source-code tr.issue { background-color: hsl(240, 20%, 96%); font-size: 12px; box-shadow: inset 10px 10px 10px -12px hsl(240, 20%, 17%); margin-top: 10px; padding-top: 5px; padding-left: 5px; padding-bottom: 2px; } .issue a { float: right; } table.source-code td.source { padding-left: 15px; line-height: 15px; white-space: pre; } /\* Overwrite classes \*/ .hidden { display: none; }

ESLint Report - error
=====================

Summary
-------

628 problems (628 errors, 0 warnings)

### Top errors

rule

count

[indent](http://eslint.org/docs/rules/indent)

336

[max-len](http://eslint.org/docs/rules/max-len)

80

[quotes](http://eslint.org/docs/rules/quotes)

38

[no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

31

[operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

19

### Most Problems

file path

errors

warnings

[\\index.js](#cUsersJuanpDesktopTfgTeleAplicacionJuanPabloPena2020JulioLambdaIndexJs)

628

0

Details
-------

Filters:  All    Warnings  Errors 

\\index.js

628 problems (628 errors, 0 warnings)

*   Summary
*   SourceCode

### Top errors

rule

count

[indent](http://eslint.org/docs/rules/indent)

336

[max-len](http://eslint.org/docs/rules/max-len)

80

[quotes](http://eslint.org/docs/rules/quotes)

38

[no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

31

[operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

19

### All Rules

Severity

Rule

**Error**

Row 1, Column 1: "This line has a length of 101. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 5, Column 7: "'i18n' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

**Error**

Row 6, Column 7: "'sprintf' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

**Error**

Row 7, Column 1: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 16, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 17, Column 1: "This line has a length of 86. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 17, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 18, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 19, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 20, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 21, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 21, Column 15: "'sessionAttributes' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

**Error**

Row 22, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 22, Column 13: "'speakOutput' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 22, Column 25: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 23, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 24, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 25, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 26, Column 1: "This line has a length of 103. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 26, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 27, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 28, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 28, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 33, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 34, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 34, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 35, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 35, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 36, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 37, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 38, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 39, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 40, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 42, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 43, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 44, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 45, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 46, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 47, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 47, Column 13: "'speakOutput' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 47, Column 27: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 47, Column 44: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 47, Column 70: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 48, Column 1: "This line has a length of 87. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 48, Column 9: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 48, Column 11: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 49, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 50, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 51, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 52, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 53, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 54, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 54, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 59, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 60, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 60, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 61, Column 1: "This line has a length of 89. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 61, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 62, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 63, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 64, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 65, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 66, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 68, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 69, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 70, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 71, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 73, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 73, Column 13: "'speakOutput' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 73, Column 27: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 73, Column 79: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

**Error**

Row 74, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 75, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 76, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 77, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 78, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 79, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 79, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 84, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 85, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 85, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 86, Column 1: "This line has a length of 91. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 86, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 87, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 88, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 89, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 90, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 92, Column 1: "This line has a length of 114. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 92, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 92, Column 26: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 93, Column 1: "This line has a length of 94. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 93, Column 9: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 93, Column 11: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 94, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 95, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 96, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 97, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 98, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 99, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 99, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 99, Column 57: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

**Error**

Row 100, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 101, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 102, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 103, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 104, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 105, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 106, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 106, Column 6: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 106, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 107, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 112, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 113, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 113, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 114, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 114, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 115, Column 1: "This line has a length of 94. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 115, Column 13: "'||' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 116, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 117, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 118, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 119, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 121, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 122, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 122, Column 6: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 122, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 123, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 128, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 129, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 130, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 130, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 131, Column 1: "This line has a length of 86. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 131, Column 13: "'||' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 132, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 133, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 134, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 135, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 137, Column 1: "This line has a length of 82. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 137, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 138, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 138, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 139, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 140, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 141, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 142, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 147, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 148, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 149, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 149, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 150, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 151, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 152, Column 1: "This line has a length of 88. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 152, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 153, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 153, Column 13: "'speechOutput' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 154, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 154, Column 13: "'repromptText' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 155, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 156, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 157, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 158, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 159, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 164, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 164, Column 28: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 165, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 166, Column 1: "This line has a length of 87. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 166, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 167, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 168, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 168, Column 25: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 169, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 170, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 170, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 171, Column 2: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

**Error**

Row 175, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 175, Column 28: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 176, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 177, Column 1: "This line has a length of 86. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 177, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 178, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 179, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 179, Column 25: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 180, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 181, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 181, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 182, Column 2: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

**Error**

Row 186, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 187, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 187, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 188, Column 1: "This line has a length of 89. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 188, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 189, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 190, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 191, Column 1: "This line has a length of 149. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 191, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 192, Column 1: "This line has a length of 108. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 192, Column 17: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 194, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 195, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 196, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 197, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 198, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 198, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 203, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 204, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 204, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 205, Column 1: "This line has a length of 91. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 205, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 206, Column 1: "This line has a length of 94. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 206, Column 17: "'||' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 207, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 208, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 209, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 210, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 211, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 212, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 213, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 213, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 217, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 218, Column 1: "This line has a length of 92. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 218, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 219, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 220, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 221, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 222, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 223, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 223, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 227, Column 1: "This line has a length of 81. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 231, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 232, Column 1: "This line has a length of 86. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 232, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 233, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 234, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 235, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 236, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 238, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 239, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 240, Column 1: "This line has a length of 102. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 240, Column 1: "Expected indentation of 4 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 240, Column 13: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

**Error**

Row 241, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 242, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 242, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 245, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 246, Column 1: "This line has a length of 89. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 249, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 250, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 251, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 252, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 253, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 254, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 256, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 257, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 258, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 259, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 260, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 260, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 267, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 267, Column 22: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

**Error**

Row 268, Column 1: "This line has a length of 87. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 268, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 268, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 268, Column 60: "Statement inside of curly braces should be on next line." [brace-style](http://eslint.org/docs/rules/brace-style)

**Error**

Row 268, Column 61: "Unexpected space(s) after '{'." [block-spacing](http://eslint.org/docs/rules/block-spacing)

**Error**

Row 268, Column 81: "Unexpected space(s) before '}'." [block-spacing](http://eslint.org/docs/rules/block-spacing)

**Error**

Row 268, Column 82: "Closing curly brace should be on the same line as opening curly brace or on the line after the previous block." [brace-style](http://eslint.org/docs/rules/brace-style)

**Error**

Row 269, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 269, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 269, Column 56: "Statement inside of curly braces should be on next line." [brace-style](http://eslint.org/docs/rules/brace-style)

**Error**

Row 269, Column 57: "Unexpected space(s) after '{'." [block-spacing](http://eslint.org/docs/rules/block-spacing)

**Error**

Row 269, Column 77: "Unexpected space(s) before '}'." [block-spacing](http://eslint.org/docs/rules/block-spacing)

**Error**

Row 269, Column 78: "Closing curly brace should be on the same line as opening curly brace or on the line after the previous block." [brace-style](http://eslint.org/docs/rules/brace-style)

**Error**

Row 273, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 274, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 274, Column 32: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

**Error**

Row 275, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 275, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 276, Column 1: "This line has a length of 105. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 276, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 277, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 277, Column 32: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

**Error**

Row 281, Column 1: "This line has a length of 84. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 281, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 282, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 283, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 284, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 285, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 289, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 289, Column 51: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 290, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 291, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 292, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 293, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 294, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 295, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 296, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 296, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 297, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 298, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 298, Column 9: "'repromptText' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 298, Column 22: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 299, Column 1: "This line has a length of 123. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 299, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 300, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 300, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 301, Column 1: "This line has a length of 93. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 301, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 301, Column 22: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 301, Column 93: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 302, Column 1: "This line has a length of 116. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 302, Column 9: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 302, Column 43: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 302, Column 95: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 303, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 307, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 308, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 309, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 311, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 312, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 312, Column 56: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 313, Column 1: "This line has a length of 136. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 313, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 313, Column 27: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 313, Column 79: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 313, Column 132: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 315, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 316, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 317, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 318, Column 1: "This line has a length of 88. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 318, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 319, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 320, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 321, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 322, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 323, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 324, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 325, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 325, Column 37: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 326, Column 1: "This line has a length of 156. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 326, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 326, Column 23: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 326, Column 81: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 326, Column 134: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 327, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 328, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 329, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 330, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 332, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 332, Column 21: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 333, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 335, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 336, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 337, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 337, Column 9: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

**Error**

Row 340, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 341, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 342, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 345, Column 1: "This line has a length of 89. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 346, Column 1: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 347, Column 1: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 350, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 351, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 351, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 352, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 353, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 353, Column 5: "Closing curly brace does not appear on the same line as the subsequent block." [brace-style](http://eslint.org/docs/rules/brace-style)

**Error**

Row 354, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 354, Column 5: "Expected space(s) after "else"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 354, Column 10: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 355, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 356, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 357, Column 1: "This line has a length of 84. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 357, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 357, Column 11: "'requestAttributes' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

**Error**

Row 358, Column 1: "This line has a length of 87. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 358, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 359, Column 1: "This line has a length of 95. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 359, Column 5: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 360, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 361, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 363, Column 1: "This line has a length of 82. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 363, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 363, Column 60: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

**Error**

Row 363, Column 62: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

**Error**

Row 364, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 365, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 365, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 366, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 366, Column 24: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 366, Column 65: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 366, Column 68: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

**Error**

Row 368, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 368, Column 10: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 369, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 369, Column 44: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 369, Column 69: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 369, Column 73: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

**Error**

Row 370, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 372, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 373, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 375, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 376, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 377, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 378, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 379, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 380, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 381, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 381, Column 13: "Missing space before value for key 'age'." [key-spacing](http://eslint.org/docs/rules/key-spacing)

**Error**

Row 382, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 383, Column 1: "This line has a length of 140. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 383, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 383, Column 141: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 384, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 386, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 388, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 389, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 390, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 391, Column 1: "This line has a length of 108. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 391, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 391, Column 19: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 392, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 395, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 396, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 397, Column 1: "This line has a length of 81. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 397, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 397, Column 12: "There should be no space after '{'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

**Error**

Row 397, Column 64: "There should be no space before '}'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

**Error**

Row 398, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 398, Column 12: "There should be no space after '{'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

**Error**

Row 398, Column 19: "There should be no space before '}'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

**Error**

Row 399, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 400, Column 1: "Expected indentation of 2 spaces but found 6." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 400, Column 7: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 401, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 401, Column 31: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

**Error**

Row 402, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 402, Column 5: "Closing curly brace does not appear on the same line as the subsequent block." [brace-style](http://eslint.org/docs/rules/brace-style)

**Error**

Row 403, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 403, Column 5: "Expected space(s) after "else"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 403, Column 10: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 404, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 404, Column 31: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

**Error**

Row 405, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 407, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 408, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 409, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 410, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 411, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 412, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 413, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 414, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 415, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 416, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 416, Column 12: "There should be no space after '{'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

**Error**

Row 416, Column 30: "There should be no space before '}'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

**Error**

Row 417, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 417, Column 11: "'requestAttributes' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

**Error**

Row 419, Column 1: "This line has a length of 106. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 419, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 420, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 421, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 422, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 423, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 424, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 426, Column 1: "This line has a length of 115. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 426, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 426, Column 33: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 426, Column 84: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 426, Column 111: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 427, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 429, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 430, Column 1: "This line has a length of 99. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 430, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 430, Column 48: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 430, Column 94: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 431, Column 13: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 431, Column 29: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 431, Column 70: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 432, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 433, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 434, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 435, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 436, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 437, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 438, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 439, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 440, Column 1: "This line has a length of 88. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 440, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 440, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 441, Column 1: "This line has a length of 101. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 441, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 441, Column 5: "Split 'var' declarations into multiple statements." [one-var](http://eslint.org/docs/rules/one-var)

**Error**

Row 441, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 443, Column 1: "This line has a length of 96. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 443, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 443, Column 24: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 443, Column 69: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 443, Column 93: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 444, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 444, Column 10: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 445, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 445, Column 44: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 445, Column 69: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 446, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 447, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 448, Column 1: "This line has a length of 131. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 448, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 448, Column 44: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 448, Column 80: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 448, Column 112: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 449, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 450, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 451, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 452, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 453, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 454, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 455, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 456, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 456, Column 13: "Missing space before value for key 'age'." [key-spacing](http://eslint.org/docs/rules/key-spacing)

**Error**

Row 457, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 458, Column 1: "This line has a length of 140. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 458, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 458, Column 141: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 459, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 461, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 462, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 463, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 464, Column 1: "This line has a length of 108. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 464, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 464, Column 19: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 465, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 469, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 470, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 470, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 471, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 471, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 472, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 472, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 474, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 474, Column 10: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 474, Column 47: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 475, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 476, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 478, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 478, Column 10: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 478, Column 42: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 479, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 479, Column 9: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 480, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 482, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 482, Column 9: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 483, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 484, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 485, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 486, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 488, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 491, Column 1: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

**Error**

Row 492, Column 1: "This line has a length of 101. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 492, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 493, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 493, Column 5: "Split 'var' declarations into multiple statements." [one-var](http://eslint.org/docs/rules/one-var)

**Error**

Row 493, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 494, Column 1: "This line has a length of 137. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 497, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 498, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 499, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 500, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 501, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 502, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 503, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 507, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 508, Column 1: "This line has a length of 92. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 508, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 508, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 509, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 509, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 509, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 510, Column 1: "This line has a length of 130. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 510, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 514, Column 1: "This line has a length of 81. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 514, Column 1: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

**Error**

Row 516, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 517, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 518, Column 1: "Expected indentation of 2 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 519, Column 1: "Expected indentation of 4 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 519, Column 58: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 520, Column 1: "Expected indentation of 2 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 524, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 525, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 526, Column 1: "This line has a length of 116. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 526, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 526, Column 9: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 526, Column 43: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 526, Column 45: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

**Error**

Row 527, Column 1: "This line has a length of 97. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 527, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 528, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 528, Column 13: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

**Error**

Row 529, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 530, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 531, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 531, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 536, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 537, Column 1: "This line has a length of 102. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 537, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 537, Column 9: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 538, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 539, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 540, Column 1: "This line has a length of 144. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 540, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 540, Column 72: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 540, Column 121: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

**Error**

Row 541, Column 1: "This line has a length of 122. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 541, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 541, Column 9: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 542, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 543, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 544, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 545, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 545, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

**Error**

Row 549, Column 1: "More than 2 blank lines not allowed." [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines)

**Error**

Row 551, Column 1: "This line has a length of 92. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 552, Column 1: "This line has a length of 84. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 553, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 569, Column 1: "Expected indentation of 4 spaces but found 3." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 574, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 575, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 575, Column 3: "Newline required at end of file but not found." [eol-last](http://eslint.org/docs/rules/eol-last)

Line

Source

**Error**

Row 1, Column 1: "This line has a length of 101. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

1

`// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).`

2

`// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,`

3

`// session persistence, api calls, and more.`

4

`const Alexa = require('ask-sdk-core');`

**Error**

Row 5, Column 7: "'i18n' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

5

`const i18n = require('i18next');`

**Error**

Row 6, Column 7: "'sprintf' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

6

`const sprintf = require('i18next-sprintf-postprocessor');`

**Error**

Row 7, Column 1: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

7

`var persistenceAdapter = getPersistenceAdapter();`

8

`const closeprimaria = require('./closeprimaria');`

9

`const closeinfantil = require('./closeinfantil');`

10

`const openprimaria = require('./openprimaria');`

11

`const openinfantil= require('./openinfantil');`

12

`let questions='';`

13

14

15

`const LaunchRequestHandler = {`

**Error**

Row 16, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

16

`canHandle(handlerInput) {`

**Error**

Row 17, Column 1: "This line has a length of 86. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 17, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

17

`return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';`

**Error**

Row 18, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

18

`},`

**Error**

Row 19, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

19

`handle(handlerInput) {`

**Error**

Row 20, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

20

`const {attributesManager}= handlerInput;`

**Error**

Row 21, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 21, Column 15: "'sessionAttributes' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

21

`const sessionAttributes= attributesManager.getSessionAttributes();`

**Error**

Row 22, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 22, Column 13: "'speakOutput' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 22, Column 25: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

22

`let speakOutput="Hola, ¿quién eres?";`

**Error**

Row 23, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

23

**Error**

Row 24, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

24

`return handlerInput.responseBuilder`

**Error**

Row 25, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

25

`.speak(speakOutput)`

**Error**

Row 26, Column 1: "This line has a length of 103. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 26, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

26

`.reprompt('No le he entendido, ¿puedes repetirlo?. Para entendernos, dí, mi nombre es ...')`

**Error**

Row 27, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

27

`.getResponse();`

**Error**

Row 28, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 28, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

28

`}`

29

`};`

30

31

`// Handler para almacenar el nombre y preguntar la edad.`

32

`const RegisterNameIntentHandler = {`

**Error**

Row 33, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

33

`canHandle(handlerInput) {`

**Error**

Row 34, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 34, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

34

`return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'`

**Error**

Row 35, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 35, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

35

`&& Alexa.getIntentName(handlerInput.requestEnvelope) === 'RegisterNameIntent';`

**Error**

Row 36, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

36

`},`

**Error**

Row 37, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

37

`handle(handlerInput) {`

**Error**

Row 38, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

38

`const {attributesManager}= handlerInput;`

**Error**

Row 39, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

39

`const intent= handlerInput.requestEnvelope.request.intent;`

**Error**

Row 40, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

40

`const sessionAttributes = attributesManager.getSessionAttributes();`

41

**Error**

Row 42, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

42

`sessionAttributes['name']='';`

**Error**

Row 43, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

43

`const name = intent.slots.name.value;`

**Error**

Row 44, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

44

**Error**

Row 45, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

45

`sessionAttributes.name=name;`

**Error**

Row 46, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

46

**Error**

Row 47, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 47, Column 13: "'speakOutput' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 47, Column 27: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 47, Column 44: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 47, Column 70: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

47

`let speakOutput = "Hola " + name + ", ¿Cuántos años tienes?."`

**Error**

Row 48, Column 1: "This line has a length of 87. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 48, Column 9: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 48, Column 11: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

48

`+ "Para entenderlo claramente, por favor, utiliza la fórmula: Tengo diez años";`

**Error**

Row 49, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

49

**Error**

Row 50, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

50

`return handlerInput.responseBuilder`

**Error**

Row 51, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

51

`.speak(speakOutput)`

**Error**

Row 52, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

52

`.reprompt('Disculpe. No le he entendido .' + speakOutput)`

**Error**

Row 53, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

53

`.getResponse();`

**Error**

Row 54, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 54, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

54

`}`

55

`};`

56

57

`// Handler para almacenar la edad y preguntar el tipo de preguntas.`

58

`const RegisterAgeIntentHandler = {`

**Error**

Row 59, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

59

`canHandle(handlerInput) {`

**Error**

Row 60, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 60, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

60

`return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'`

**Error**

Row 61, Column 1: "This line has a length of 89. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 61, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

61

`&& Alexa.getIntentName(handlerInput.requestEnvelope) === 'RegisterAgeIntent';`

**Error**

Row 62, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

62

`},`

**Error**

Row 63, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

63

`handle(handlerInput) {`

**Error**

Row 64, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

64

`const {attributesManager}= handlerInput;`

**Error**

Row 65, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

65

`const intent= handlerInput.requestEnvelope.request.intent;`

**Error**

Row 66, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

66

`const sessionAttributes = attributesManager.getSessionAttributes();`

67

**Error**

Row 68, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

68

`sessionAttributes['age']='';`

**Error**

Row 69, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

69

`const age = intent.slots.age.value;`

**Error**

Row 70, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

70

**Error**

Row 71, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

71

`sessionAttributes.age=age;`

72

**Error**

Row 73, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 73, Column 13: "'speakOutput' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 73, Column 27: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 73, Column 79: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

73

`let speakOutput = "¿Qué juego quieres, preguntas abiertas o cerradas?"`

**Error**

Row 74, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

74

**Error**

Row 75, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

75

`return handlerInput.responseBuilder`

**Error**

Row 76, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

76

`.speak(speakOutput)`

**Error**

Row 77, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

77

`.reprompt('No le he entendido.' + speakOutput)`

**Error**

Row 78, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

78

`.getResponse();`

**Error**

Row 79, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 79, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

79

`}`

80

`};`

81

82

`// Handler para iniciar las preguntas cerradas`

83

`const CloseQuestionIntentHandler ={`

**Error**

Row 84, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

84

`canHandle(handlerInput) {`

**Error**

Row 85, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 85, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

85

`return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'`

**Error**

Row 86, Column 1: "This line has a length of 91. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 86, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

86

`&& Alexa.getIntentName(handlerInput.requestEnvelope) === 'CloseQuestionIntent';`

**Error**

Row 87, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

87

`},`

**Error**

Row 88, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

88

`handle(handlerInput) {`

**Error**

Row 89, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

89

`const {attributesManager} = handlerInput;`

**Error**

Row 90, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

90

`const sessionAttributes = attributesManager.getSessionAttributes();`

91

**Error**

Row 92, Column 1: "This line has a length of 114. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 92, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 92, Column 26: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

92

`let speechText = "Bienvenido al juego de preguntas cerradas! Son 5 preguntas en las que hay que responder"`

**Error**

Row 93, Column 1: "This line has a length of 94. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 93, Column 9: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 93, Column 11: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

93

`+ "con un sí o con un no. Si fallas 3 preguntas, estás eliminado. Vamos a por ello! ";`

**Error**

Row 94, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

94

`sessionAttributes['id'] = 1;`

**Error**

Row 95, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

95

`sessionAttributes['aciertos']=0;`

**Error**

Row 96, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

96

`sessionAttributes['fallos'] = 0;`

**Error**

Row 97, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

97

`sessionAttributes['preguntas realizadas']= 0;`

**Error**

Row 98, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

98

**Error**

Row 99, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 99, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 99, Column 57: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

99

`const module = getModule(sessionAttributes['id'],sessionAttributes['age']);`

**Error**

Row 100, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

100

`speechText += module.question;`

**Error**

Row 101, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

101

**Error**

Row 102, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

102

`return handlerInput.responseBuilder`

**Error**

Row 103, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

103

`.speak(speechText)`

**Error**

Row 104, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

104

`.reprompt(speechText)`

**Error**

Row 105, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

105

`.getResponse();`

**Error**

Row 106, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 106, Column 6: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 106, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

106

`}`

**Error**

Row 107, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

107

108

`};`

109

110

`// Handler para iniciar las preguntas abiertas`

111

`const OpenQuestionIntentHandler ={`

**Error**

Row 112, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

112

`canHandle(handlerInput) {`

**Error**

Row 113, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 113, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

113

`return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'`

**Error**

Row 114, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 114, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

114

`&& (Alexa.getIntentName(handlerInput.requestEnvelope) === 'OpenQuestionIntent'`

**Error**

Row 115, Column 1: "This line has a length of 94. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 115, Column 13: "'||' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

115

`|| Alexa.getIntentName(handlerInput.requestEnvelope)=== 'AMAZON.StartOverIntent');`

**Error**

Row 116, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

116

`},`

**Error**

Row 117, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

117

`handle(handlerInput) {`

**Error**

Row 118, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

118

`const {attributesManager} = handlerInput;`

**Error**

Row 119, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

119

`const sessionAttributes = attributesManager.getSessionAttributes();`

120

**Error**

Row 121, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

121

`return startGame(handlerInput, sessionAttributes.age);`

**Error**

Row 122, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 122, Column 6: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 122, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

122

`}`

**Error**

Row 123, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

123

124

`};`

125

126

`// Handler para las respuestas de las preguntas abiertas`

127

`const AnswerIntent = {`

**Error**

Row 128, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

128

`canHandle(handlerInput) {`

**Error**

Row 129, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

129

`return handlerInput.requestEnvelope.request.type === 'IntentRequest'`

**Error**

Row 130, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 130, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

130

`&& (handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent'`

**Error**

Row 131, Column 1: "This line has a length of 86. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 131, Column 13: "'||' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

131

`|| handlerInput.requestEnvelope.request.intent.name === 'DontKnowIntent');`

**Error**

Row 132, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

132

`},`

**Error**

Row 133, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

133

`handle(handlerInput) {`

**Error**

Row 134, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

134

`const {attributesManager} = handlerInput;`

**Error**

Row 135, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

135

`const sessionAttributes = attributesManager.getSessionAttributes();`

136

**Error**

Row 137, Column 1: "This line has a length of 82. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 137, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

137

`if (handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent') {`

**Error**

Row 138, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 138, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

138

`return handlerResponseUser(false, handlerInput, sessionAttributes.age);`

**Error**

Row 139, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

139

`}`

**Error**

Row 140, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

140

**Error**

Row 141, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

141

`return handlerResponseUser(true, handlerInput, sessionAttributes.age);`

**Error**

Row 142, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

142

`},`

143

`};`

144

145

`// Handler para repetir la pregunta abierta`

146

`const RepeatIntent = {`

**Error**

Row 147, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

147

`canHandle(handlerInput) {`

**Error**

Row 148, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

148

`return handlerInput.requestEnvelope.request.type === 'IntentRequest'`

**Error**

Row 149, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 149, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

149

`&& handlerInput.requestEnvelope.request.intent.name === 'AMAZON.RepeatIntent';`

**Error**

Row 150, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

150

`},`

**Error**

Row 151, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

151

`handle(handlerInput) {`

**Error**

Row 152, Column 1: "This line has a length of 88. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 152, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

152

`const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();`

**Error**

Row 153, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 153, Column 13: "'speechOutput' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

153

`let speechOutput = sessionAttributes.speechOutput;`

**Error**

Row 154, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 154, Column 13: "'repromptText' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

154

`let repromptText = sessionAttributes.repromptText;`

**Error**

Row 155, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

155

**Error**

Row 156, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

156

`return handlerInput.responseBuilder.speak(speechOutput)`

**Error**

Row 157, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

157

`.reprompt(repromptText)`

**Error**

Row 158, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

158

`.getResponse();`

**Error**

Row 159, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

159

`},`

160

`};`

161

162

`// Handler cuando se contesta sí en las preguntas cerradas`

163

`const YesHandler = {`

**Error**

Row 164, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 164, Column 28: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

164

`canHandle(handlerInput){`

**Error**

Row 165, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

165

`return handlerInput.requestEnvelope.request.type === 'IntentRequest'`

**Error**

Row 166, Column 1: "This line has a length of 87. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 166, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

166

`&& handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';`

**Error**

Row 167, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

167

`},`

**Error**

Row 168, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 168, Column 25: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

168

`handle(handlerInput){`

**Error**

Row 169, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

169

`return responseLoopHandler(handlerInput, 'yes');`

**Error**

Row 170, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 170, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

170

`}`

**Error**

Row 171, Column 2: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

171

`}`

172

173

`// Handler cuando se contesta no en las preguntas cerradas`

174

`const NoHandler = {`

**Error**

Row 175, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 175, Column 28: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

175

`canHandle(handlerInput){`

**Error**

Row 176, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

176

`return handlerInput.requestEnvelope.request.type === 'IntentRequest'`

**Error**

Row 177, Column 1: "This line has a length of 86. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 177, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

177

`&& handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent';`

**Error**

Row 178, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

178

`},`

**Error**

Row 179, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 179, Column 25: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

179

`handle(handlerInput){`

**Error**

Row 180, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

180

`return responseLoopHandler(handlerInput, 'no');`

**Error**

Row 181, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 181, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

181

`}`

**Error**

Row 182, Column 2: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

182

`}`

183

184

`// Handler cuando se solicita ayuda`

185

`const HelpIntentHandler = {`

**Error**

Row 186, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

186

`canHandle(handlerInput) {`

**Error**

Row 187, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 187, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

187

`return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'`

**Error**

Row 188, Column 1: "This line has a length of 89. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 188, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

188

`&& Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';`

**Error**

Row 189, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

189

`},`

**Error**

Row 190, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

190

`handle(handlerInput) {`

**Error**

Row 191, Column 1: "This line has a length of 149. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 191, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

191

`const speakOutput = 'Si estás participando en las preguntas abiertas, debes responder con el número de la opción que creas que es correcta. '`

**Error**

Row 192, Column 1: "This line has a length of 108. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 192, Column 17: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

192

`+ 'Si estás participando en las preguntas cerradas, debes responder con un sí o con un no.';`

193

**Error**

Row 194, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

194

`return handlerInput.responseBuilder`

**Error**

Row 195, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

195

`.speak(speakOutput)`

**Error**

Row 196, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

196

`.reprompt(speakOutput)`

**Error**

Row 197, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

197

`.getResponse();`

**Error**

Row 198, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 198, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

198

`}`

199

`};`

200

201

`// Handler cuando se finaliza anticipadamente`

202

`const CancelAndStopIntentHandler = {`

**Error**

Row 203, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

203

`canHandle(handlerInput) {`

**Error**

Row 204, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 204, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

204

`return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'`

**Error**

Row 205, Column 1: "This line has a length of 91. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 205, Column 13: "'&&' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

205

`&& (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'`

**Error**

Row 206, Column 1: "This line has a length of 94. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 206, Column 17: "'||' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

206

`|| Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');`

**Error**

Row 207, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

207

`},`

**Error**

Row 208, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

208

`handle(handlerInput) {`

**Error**

Row 209, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

209

`const speakOutput = 'Gracias por jugar. Hasta pronto!';`

**Error**

Row 210, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

210

`return handlerInput.responseBuilder`

**Error**

Row 211, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

211

`.speak(speakOutput)`

**Error**

Row 212, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

212

`.getResponse();`

**Error**

Row 213, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 213, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

213

`}`

214

`};`

215

216

`const SessionEndedRequestHandler = {`

**Error**

Row 217, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

217

`canHandle(handlerInput) {`

**Error**

Row 218, Column 1: "This line has a length of 92. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 218, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

218

`return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';`

**Error**

Row 219, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

219

`},`

**Error**

Row 220, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

220

`handle(handlerInput) {`

**Error**

Row 221, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

221

`// Any cleanup logic goes here.`

**Error**

Row 222, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

222

`return handlerInput.responseBuilder.getResponse();`

**Error**

Row 223, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 223, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

223

`}`

224

`};`

225

226

`// The intent reflector is used for interaction model testing and debugging.`

**Error**

Row 227, Column 1: "This line has a length of 81. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

227

`// It will simply repeat the intent the user said. You can create custom handlers`

228

`// for your intents by defining them above, then also adding them to the request`

229

`// handler chain below.`

230

`const IntentReflectorHandler = {`

**Error**

Row 231, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

231

`canHandle(handlerInput) {`

**Error**

Row 232, Column 1: "This line has a length of 86. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 232, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

232

`return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';`

**Error**

Row 233, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

233

`},`

**Error**

Row 234, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

234

`handle(handlerInput) {`

**Error**

Row 235, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

235

`const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);`

**Error**

Row 236, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

236

``const speakOutput = `You just triggered ${intentName}`;``

237

**Error**

Row 238, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

238

`return handlerInput.responseBuilder`

**Error**

Row 239, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

239

`.speak(speakOutput)`

**Error**

Row 240, Column 1: "This line has a length of 102. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 240, Column 1: "Expected indentation of 4 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 240, Column 13: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

240

`//.reprompt('add a reprompt if you want to keep the session open for the user to respond')`

**Error**

Row 241, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

241

`.getResponse();`

**Error**

Row 242, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 242, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

242

`}`

243

`};`

244

**Error**

Row 245, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

245

`// Generic error handling to capture any syntax or routing errors. If you receive an error`

**Error**

Row 246, Column 1: "This line has a length of 89. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

246

`// stating the request handler chain is not found, you have not implemented a handler for`

247

`// the intent being invoked or included it in the skill builder below.`

248

`const ErrorHandler = {`

**Error**

Row 249, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

249

`canHandle() {`

**Error**

Row 250, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

250

`return true;`

**Error**

Row 251, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

251

`},`

**Error**

Row 252, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

252

`handle(handlerInput, error) {`

**Error**

Row 253, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

253

``console.log(`~~~~ Error handled: ${error.stack}`);``

**Error**

Row 254, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

254

``const speakOutput = `Disculpa no le he entendido, puedes repetir?`;``

255

**Error**

Row 256, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

256

`return handlerInput.responseBuilder`

**Error**

Row 257, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

257

`.speak(speakOutput)`

**Error**

Row 258, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

258

`.reprompt(speakOutput)`

**Error**

Row 259, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

259

`.getResponse();`

**Error**

Row 260, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 260, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

260

`}`

261

`};`

262

263

264

`// ------------------------------------ FUNCTIONS -------------------------`

265

266

`// Extrae las preguntas cerradas según la edad`

**Error**

Row 267, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 267, Column 22: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

267

`function getModule(id,age) {`

**Error**

Row 268, Column 1: "This line has a length of 87. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 268, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 268, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 268, Column 60: "Statement inside of curly braces should be on next line." [brace-style](http://eslint.org/docs/rules/brace-style)

**Error**

Row 268, Column 61: "Unexpected space(s) after '{'." [block-spacing](http://eslint.org/docs/rules/block-spacing)

**Error**

Row 268, Column 81: "Unexpected space(s) before '}'." [block-spacing](http://eslint.org/docs/rules/block-spacing)

**Error**

Row 268, Column 82: "Closing curly brace should be on the same line as opening curly brace or on the line after the previous block." [brace-style](http://eslint.org/docs/rules/brace-style)

268

`if(age>5) return closeprimaria.game.filter(function(i) { return i.id === id; })[0];`

**Error**

Row 269, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 269, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 269, Column 56: "Statement inside of curly braces should be on next line." [brace-style](http://eslint.org/docs/rules/brace-style)

**Error**

Row 269, Column 57: "Unexpected space(s) after '{'." [block-spacing](http://eslint.org/docs/rules/block-spacing)

**Error**

Row 269, Column 77: "Unexpected space(s) before '}'." [block-spacing](http://eslint.org/docs/rules/block-spacing)

**Error**

Row 269, Column 78: "Closing curly brace should be on the same line as opening curly brace or on the line after the previous block." [brace-style](http://eslint.org/docs/rules/brace-style)

269

`else return closeinfantil.game2.filter(function(i) { return i.id === id; })[0];`

270

`}`

271

272

`// Extrae la siguiente pregunta cerrada de manera aleatoria`

**Error**

Row 273, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

273

`function getNextModule(id, choice, age) {`

**Error**

Row 274, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 274, Column 32: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

274

`const module = getModule(id,age);`

**Error**

Row 275, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 275, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

275

`if(module[choice].targets.length === 0) return null;`

**Error**

Row 276, Column 1: "This line has a length of 105. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 276, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

276

`const nextTarget = module[choice].targets[Math.floor(Math.random() * module[choice].targets.length)];`

**Error**

Row 277, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 277, Column 32: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

277

`return getModule(nextTarget,age);`

278

`}`

279

280

`// Actualiza las variables del ejercicio de preguntas cerradas`

**Error**

Row 281, Column 1: "This line has a length of 84. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 281, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

281

`function calculateGameVariables(sessionAttributes, fallosC, preguntasC, aciertosC) {`

**Error**

Row 282, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

282

`sessionAttributes['fallos'] += fallosC;`

**Error**

Row 283, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

283

`sessionAttributes['preguntas realizadas'] += preguntasC;`

**Error**

Row 284, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

284

`sessionAttributes['aciertos'] += aciertosC;`

**Error**

Row 285, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

285

`console.log(sessionAttributes);`

286

`}`

287

288

`// Maneja el sí o el no como respuesta`

**Error**

Row 289, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

**Error**

Row 289, Column 51: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

289

`function responseLoopHandler(handlerInput, choice){`

**Error**

Row 290, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

290

`const {attributesManager} = handlerInput;`

**Error**

Row 291, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

291

`const sessionAttributes = attributesManager.getSessionAttributes();`

**Error**

Row 292, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

292

`const moduleId = sessionAttributes['id'];`

**Error**

Row 293, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

293

`const age= sessionAttributes['age'];`

**Error**

Row 294, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

294

`const module = getModule(moduleId, age);`

**Error**

Row 295, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

295

`const nextModule = getNextModule(moduleId, choice, age);`

**Error**

Row 296, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 296, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

296

`if(nextModule) sessionAttributes['id'] = nextModule.id;`

**Error**

Row 297, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

297

`let speechText;`

**Error**

Row 298, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 298, Column 9: "'repromptText' is never reassigned. Use 'const' instead." [prefer-const](http://eslint.org/docs/rules/prefer-const)

**Error**

Row 298, Column 22: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

298

`let repromptText="Disculpa no le he entendido. ¿Puedes repetirlo? ";`

**Error**

Row 299, Column 1: "This line has a length of 123. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 299, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

299

`calculateGameVariables(sessionAttributes, module[choice].fallos, module[choice].numpreguntas, module[choice].aciertos);`

**Error**

Row 300, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 300, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

300

`if(sessionAttributes['fallos'] === 3) {`

**Error**

Row 301, Column 1: "This line has a length of 93. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 301, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 301, Column 22: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 301, Column 93: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

301

`speechText = "Lamentablemente, has llegado a los tres fallos. Tu marcador final es "`

**Error**

Row 302, Column 1: "This line has a length of 116. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 302, Column 9: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 302, Column 43: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 302, Column 95: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

302

`+ sessionAttributes['aciertos'] + " de " + sessionAttributes['preguntas realizadas']+ ". Hasta la próxima!";`

**Error**

Row 303, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

303

`return handlerInput.responseBuilder`

304

`.speak(speechText)`

305

`.reprompt()`

306

`.getResponse();`

**Error**

Row 307, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

307

`}`

**Error**

Row 308, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

308

**Error**

Row 309, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

309

`speechText = module[choice].answer;`

310

`module[choice].warning ? speechText += module[choice].warning : speechText;`

**Error**

Row 311, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

311

**Error**

Row 312, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 312, Column 56: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

312

`if(sessionAttributes['preguntas realizadas'] !== 5){`

**Error**

Row 313, Column 1: "This line has a length of 136. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 313, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 313, Column 27: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 313, Column 79: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 313, Column 132: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

313

`speechText += "Tu marcador es " + sessionAttributes['aciertos'] + " de " + sessionAttributes['preguntas realizadas'] + ". ";`

314

`}`

**Error**

Row 315, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

315

**Error**

Row 316, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

316

`if(sessionAttributes['preguntas realizadas'] === 4) {`

**Error**

Row 317, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

317

`sessionAttributes['id'] = 10;`

**Error**

Row 318, Column 1: "This line has a length of 88. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 318, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

318

`const module = getModule(sessionAttributes['id'], sessionAttributes['age']);`

**Error**

Row 319, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

319

`speechText += module.question;`

**Error**

Row 320, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

320

`return handlerInput.responseBuilder`

**Error**

Row 321, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

321

`.speak(speechText)`

**Error**

Row 322, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

322

`.reprompt(repromptText)`

**Error**

Row 323, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

323

`.getResponse();`

**Error**

Row 324, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

324

`}`

**Error**

Row 325, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 325, Column 37: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

325

`if(sessionAttributes['id']===10){`

**Error**

Row 326, Column 1: "This line has a length of 156. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 326, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 326, Column 23: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 326, Column 81: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 326, Column 134: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

326

`speechText += "Tu marcador final es " + sessionAttributes['aciertos'] + " de " + sessionAttributes['preguntas realizadas'] + ". Hasta la próxima! ";`

**Error**

Row 327, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

327

`return handlerInput.responseBuilder`

**Error**

Row 328, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

328

`.speak(speechText)`

**Error**

Row 329, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

329

`.reprompt()`

**Error**

Row 330, Column 1: "Expected indentation of 10 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

330

`.getResponse();`

331

`}`

**Error**

Row 332, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 332, Column 21: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

332

`if(module.audio){`

**Error**

Row 333, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

333

`speechText += module.audio;`

334

`}`

**Error**

Row 335, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

335

`if(nextModule) {`

**Error**

Row 336, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

336

`speechText += nextModule.question;`

**Error**

Row 337, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 337, Column 9: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

337

`//handlerInput.responseBuilder.reprompt(repromptText)`

338

`}`

339

`return handlerInput.responseBuilder`

**Error**

Row 340, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

340

`.speak(speechText)`

**Error**

Row 341, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

341

`.reprompt(repromptText)`

**Error**

Row 342, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

342

`.getResponse();`

343

`}`

344

**Error**

Row 345, Column 1: "This line has a length of 89. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

345

`// --------------------------------------------------------------------------------------`

**Error**

Row 346, Column 1: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

346

`var ANSWER_COUNT = 3;`

**Error**

Row 347, Column 1: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

347

`var GAME_LENGTH = 5;`

348

349

`// Inicia el juego de preguntas abiertas`

**Error**

Row 350, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

350

`function startGame(handlerInput, age) {`

**Error**

Row 351, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 351, Column 5: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

351

`if(age>5) {`

**Error**

Row 352, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

352

`questions=openprimaria;`

**Error**

Row 353, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 353, Column 5: "Closing curly brace does not appear on the same line as the subsequent block." [brace-style](http://eslint.org/docs/rules/brace-style)

353

`}`

**Error**

Row 354, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 354, Column 5: "Expected space(s) after "else"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 354, Column 10: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

354

`else{`

**Error**

Row 355, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

355

`questions=openinfantil;`

**Error**

Row 356, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

356

`}`

**Error**

Row 357, Column 1: "This line has a length of 84. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 357, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 357, Column 11: "'requestAttributes' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

357

`const requestAttributes = handlerInput.attributesManager.getRequestAttributes();`

**Error**

Row 358, Column 1: "This line has a length of 87. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 358, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

358

`let speechOutput = 'Bienvenido al juego de preguntas abiertas! Serán 5 preguntas. '`

**Error**

Row 359, Column 1: "This line has a length of 95. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 359, Column 5: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

359

`+ 'Debes responder indicando el número de la opción que consideres correcta. A por ellas!';`

**Error**

Row 360, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

360

`const gameQuestions = populateGameQuestions();`

**Error**

Row 361, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

361

`const correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));`

362

**Error**

Row 363, Column 1: "This line has a length of 82. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 363, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 363, Column 60: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

**Error**

Row 363, Column 62: "A space is required after ','." [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

363

`const roundAnswers = populateRoundAnswers(gameQuestions,0,correctAnswerIndex);`

**Error**

Row 364, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

364

`const currentQuestionIndex = 0;`

**Error**

Row 365, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 365, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

365

`const spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];`

**Error**

Row 366, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 366, Column 24: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 366, Column 65: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 366, Column 68: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

366

`let repromptText = "Pregunta número 1. " + spokenQuestion + " "`

367

**Error**

Row 368, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 368, Column 10: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

368

`for (var i = 0; i < ANSWER_COUNT; i++) {`

**Error**

Row 369, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 369, Column 44: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 369, Column 69: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 369, Column 73: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

369

`repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "`

**Error**

Row 370, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

370

`}`

371

**Error**

Row 372, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

372

`speechOutput += repromptText;`

**Error**

Row 373, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

373

`const sessionAttributes = {};`

374

**Error**

Row 375, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

375

`Object.assign(sessionAttributes, {`

**Error**

Row 376, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

376

`speechOutput: repromptText,`

**Error**

Row 377, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

377

`repromptText,`

**Error**

Row 378, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

378

`currentQuestionIndex,`

**Error**

Row 379, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

379

`correctAnswerIndex: correctAnswerIndex + 1,`

**Error**

Row 380, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

380

`questions: gameQuestions,`

**Error**

Row 381, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 381, Column 13: "Missing space before value for key 'age'." [key-spacing](http://eslint.org/docs/rules/key-spacing)

381

`age:age,`

**Error**

Row 382, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

382

`score: 0,`

**Error**

Row 383, Column 1: "This line has a length of 140. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 383, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 383, Column 141: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

383

`correctAnswerText: questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]`

**Error**

Row 384, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

384

`});`

385

**Error**

Row 386, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

386

`handlerInput.attributesManager.setSessionAttributes(sessionAttributes);`

387

**Error**

Row 388, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

388

**Error**

Row 389, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

389

`return handlerInput.responseBuilder`

**Error**

Row 390, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

390

`.speak(speechOutput)`

**Error**

Row 391, Column 1: "This line has a length of 108. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 391, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 391, Column 19: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

391

`.reprompt("Por favor, responde con el número de la opción que consideres correcta. " + repromptText)`

**Error**

Row 392, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

392

`.getResponse();`

393

`}`

394

**Error**

Row 395, Column 1: "This line has a length of 85. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

395

`// Comprueba las respuestas en las preguntas abiertas y muestra la siguiente pregunta`

**Error**

Row 396, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

396

`function handlerResponseUser(userGaveUp, handlerInput, age) {`

**Error**

Row 397, Column 1: "This line has a length of 81. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 397, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 397, Column 12: "There should be no space after '{'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

**Error**

Row 397, Column 64: "There should be no space before '}'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

397

`const { requestEnvelope, attributesManager, responseBuilder } = handlerInput;`

**Error**

Row 398, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 398, Column 12: "There should be no space after '{'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

**Error**

Row 398, Column 19: "There should be no space before '}'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

398

`const { intent } = requestEnvelope.request;`

**Error**

Row 399, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

399

**Error**

Row 400, Column 1: "Expected indentation of 2 spaces but found 6." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 400, Column 7: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

400

`if(age>5) {`

**Error**

Row 401, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 401, Column 31: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

401

`questions=openprimaria`

**Error**

Row 402, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 402, Column 5: "Closing curly brace does not appear on the same line as the subsequent block." [brace-style](http://eslint.org/docs/rules/brace-style)

402

`}`

**Error**

Row 403, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 403, Column 5: "Expected space(s) after "else"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 403, Column 10: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

403

`else{`

**Error**

Row 404, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 404, Column 31: "Missing semicolon." [semi](http://eslint.org/docs/rules/semi)

404

`questions=openinfantil`

**Error**

Row 405, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

405

`}`

406

**Error**

Row 407, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

407

`const answerSlotValid = isAnswerSlotValid(intent);`

**Error**

Row 408, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

408

**Error**

Row 409, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

409

`let speechOutput = '';`

**Error**

Row 410, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

410

`let speechOutputAnalysis = '';`

**Error**

Row 411, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

411

`const sessionAttributes = attributesManager.getSessionAttributes();`

**Error**

Row 412, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

412

`const gameQuestions = sessionAttributes.questions;`

**Error**

Row 413, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

413

`let correctAnswerIndex = parseInt(sessionAttributes.correctAnswerIndex);`

**Error**

Row 414, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

414

`let currentScore = parseInt(sessionAttributes.score);`

**Error**

Row 415, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

415

`let currentQuestionIndex = parseInt(sessionAttributes.currentQuestionIndex);`

**Error**

Row 416, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 416, Column 12: "There should be no space after '{'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

**Error**

Row 416, Column 30: "There should be no space before '}'." [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

416

`const { correctAnswerText } = sessionAttributes;`

**Error**

Row 417, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 417, Column 11: "'requestAttributes' is assigned a value but never used." [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

417

`const requestAttributes = attributesManager.getRequestAttributes();`

418

**Error**

Row 419, Column 1: "This line has a length of 106. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 419, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

419

`if (answerSlotValid && parseInt(intent.slots.Answer.value) === sessionAttributes.correctAnswerIndex) {`

**Error**

Row 420, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

420

`currentScore += 1;`

**Error**

Row 421, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

421

`speechOutputAnalysis = 'Respuesta correcta! ';`

**Error**

Row 422, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

422

`} else {`

**Error**

Row 423, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

423

`if (!userGaveUp) {`

**Error**

Row 424, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

424

`speechOutputAnalysis = 'Lástima, has fallado! ';`

425

`}`

**Error**

Row 426, Column 1: "This line has a length of 115. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 426, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 426, Column 33: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 426, Column 84: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 426, Column 111: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

426

`speechOutputAnalysis += "La respuesta correcta es " + correctAnswerIndex + ": " + correctAnswerText + ". ";`

**Error**

Row 427, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

427

`}`

428

**Error**

Row 429, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

429

`if (sessionAttributes.currentQuestionIndex === GAME_LENGTH - 1) {`

**Error**

Row 430, Column 1: "This line has a length of 99. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 430, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 430, Column 48: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 430, Column 94: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

430

`speechOutput += speechOutputAnalysis + "Tu marcador final ha sido " + currentScore + " de "`

**Error**

Row 431, Column 13: "'+' should be placed at the end of the line." [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)

**Error**

Row 431, Column 29: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 431, Column 70: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

431

`+ GAME_LENGTH + ". Gracias por jugar. Hasta la próxima!";`

**Error**

Row 432, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

432

**Error**

Row 433, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

433

`return responseBuilder`

**Error**

Row 434, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

434

`.speak(speechOutput)`

**Error**

Row 435, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

435

`.reprompt()`

**Error**

Row 436, Column 1: "Expected indentation of 8 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

436

`.getResponse();`

**Error**

Row 437, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

437

`}`

**Error**

Row 438, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

438

`currentQuestionIndex += 1;`

**Error**

Row 439, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

439

`correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));`

**Error**

Row 440, Column 1: "This line has a length of 88. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 440, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 440, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

440

`var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];`

**Error**

Row 441, Column 1: "This line has a length of 101. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 441, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 441, Column 5: "Split 'var' declarations into multiple statements." [one-var](http://eslint.org/docs/rules/one-var)

**Error**

Row 441, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

441

`var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),`

442

`questionIndexForSpeech = currentQuestionIndex + 1;`

**Error**

Row 443, Column 1: "This line has a length of 96. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 443, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 443, Column 24: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 443, Column 69: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 443, Column 93: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

443

`let repromptText = "Pregunta número " + questionIndexForSpeech+ ". " + spokenQuestion + " ";`

**Error**

Row 444, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 444, Column 10: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

444

`for (var i = 0; i < ANSWER_COUNT; i++) {`

**Error**

Row 445, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 445, Column 44: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 445, Column 69: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

445

`repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". ";`

**Error**

Row 446, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

446

`}`

**Error**

Row 447, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

447

**Error**

Row 448, Column 1: "This line has a length of 131. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 448, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 448, Column 44: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 448, Column 80: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 448, Column 112: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

448

`speechOutput += speechOutputAnalysis + "Tu marcador es " + currentScore + " de " + currentQuestionIndex + ". " + repromptText;`

**Error**

Row 449, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

449

**Error**

Row 450, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

450

`Object.assign(sessionAttributes, {`

**Error**

Row 451, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

451

`speechOutput: repromptText,`

**Error**

Row 452, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

452

`repromptText,`

**Error**

Row 453, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

453

`currentQuestionIndex,`

**Error**

Row 454, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

454

`correctAnswerIndex: correctAnswerIndex + 1,`

**Error**

Row 455, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

455

`questions: gameQuestions,`

**Error**

Row 456, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 456, Column 13: "Missing space before value for key 'age'." [key-spacing](http://eslint.org/docs/rules/key-spacing)

456

`age:age,`

**Error**

Row 457, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

457

`score: currentScore,`

**Error**

Row 458, Column 1: "This line has a length of 140. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 458, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 458, Column 141: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

458

`correctAnswerText: questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]`

**Error**

Row 459, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

459

`});`

460

**Error**

Row 461, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

461

**Error**

Row 462, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

462

`return responseBuilder`

**Error**

Row 463, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

463

`.speak(speechOutput)`

**Error**

Row 464, Column 1: "This line has a length of 108. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 464, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 464, Column 19: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

464

`.reprompt("Por favor, responde con el número de la opción que consideres correcta. " + repromptText)`

**Error**

Row 465, Column 1: "Expected indentation of 6 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

465

`.getResponse();`

466

`}`

467

468

`// Escoge las preguntas de manera aleatoria, sin repetir`

**Error**

Row 469, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

469

`function populateGameQuestions() {`

**Error**

Row 470, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 470, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

470

`var gameQuestions = [];`

**Error**

Row 471, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 471, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

471

`var indexList = [];`

**Error**

Row 472, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 472, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

472

`var index = questions.length;`

473

**Error**

Row 474, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 474, Column 10: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 474, Column 47: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

474

`for (var i = 0; i < questions.length; i++){`

**Error**

Row 475, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

475

`indexList.push(i);`

**Error**

Row 476, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

476

`}`

477

**Error**

Row 478, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 478, Column 10: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

**Error**

Row 478, Column 42: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

478

`for (var j = 0; j < GAME_LENGTH; j++){`

**Error**

Row 479, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 479, Column 9: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

479

`var rand = Math.floor(Math.random() * index);`

**Error**

Row 480, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

480

`index -= 1;`

481

**Error**

Row 482, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 482, Column 9: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

482

`var temp = indexList[index];`

**Error**

Row 483, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

483

`indexList[index] = indexList[rand];`

**Error**

Row 484, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

484

`indexList[rand] = temp;`

**Error**

Row 485, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

485

`gameQuestions.push(indexList[index]);`

**Error**

Row 486, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

486

`}`

487

**Error**

Row 488, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

488

`return gameQuestions;`

489

`}`

490

**Error**

Row 491, Column 1: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

491

`//Pone la respuesta correcta en el índice seleccionado`

**Error**

Row 492, Column 1: "This line has a length of 101. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 492, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

492

`function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {`

**Error**

Row 493, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 493, Column 5: "Split 'var' declarations into multiple statements." [one-var](http://eslint.org/docs/rules/one-var)

**Error**

Row 493, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

493

`var answers = [],`

**Error**

Row 494, Column 1: "This line has a length of 137. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

494

`answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],`

495

`temp, i;`

496

**Error**

Row 497, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

497

`for (i = 0; i < ANSWER_COUNT; i++) {`

**Error**

Row 498, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

498

`answers[i] = answersCopy[i];`

**Error**

Row 499, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

499

`}`

**Error**

Row 500, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

500

`temp = answers[0];`

**Error**

Row 501, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

501

`answers[0] = answers[correctAnswerTargetLocation];`

**Error**

Row 502, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

502

`answers[correctAnswerTargetLocation] = temp;`

**Error**

Row 503, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

503

`return answers;`

504

`}`

505

506

`// Comprueba que la respuesta esté almacenada en el slot`

**Error**

Row 507, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

507

`function isAnswerSlotValid(intent) {`

**Error**

Row 508, Column 1: "This line has a length of 92. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 508, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 508, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

508

`var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;`

**Error**

Row 509, Column 1: "This line has a length of 90. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 509, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 509, Column 5: "Unexpected var, use let or const instead." [no-var](http://eslint.org/docs/rules/no-var)

509

`var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));`

**Error**

Row 510, Column 1: "This line has a length of 130. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 510, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

510

`return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;`

511

`}`

512

513

**Error**

Row 514, Column 1: "This line has a length of 81. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 514, Column 1: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

514

`//-------------------------------------------- PERSISTENCE ----------------------`

515

**Error**

Row 516, Column 1: "Missing JSDoc comment." [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)

516

`function getPersistenceAdapter() {`

**Error**

Row 517, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

517

`const {S3PersistenceAdapter} = require('ask-sdk-s3-persistence-adapter');`

**Error**

Row 518, Column 1: "Expected indentation of 2 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

518

`return new S3PersistenceAdapter({`

**Error**

Row 519, Column 1: "Expected indentation of 4 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 519, Column 58: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

519

`bucketName: process.env.S3_PERSISTENCE_BUCKET`

**Error**

Row 520, Column 1: "Expected indentation of 2 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

520

`});`

521

`}`

522

523

`const LoadAttributesRequestInterceptor = {`

**Error**

Row 524, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

524

`async process(handlerInput) {`

**Error**

Row 525, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

525

`const {attributesManager, requestEnvelope} = handlerInput;`

**Error**

Row 526, Column 1: "This line has a length of 116. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 526, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 526, Column 9: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

**Error**

Row 526, Column 43: "Missing space before opening brace." [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

**Error**

Row 526, Column 45: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

526

`if(requestEnvelope.session['new']){ //is this a new session? this check is not enough if using auto-delegate`

**Error**

Row 527, Column 1: "This line has a length of 97. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 527, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

527

`const persistentAttributes = await attributesManager.getPersistentAttributes() || {};`

**Error**

Row 528, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 528, Column 13: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

528

`//copy persistent attribute to session attributes`

**Error**

Row 529, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

529

`attributesManager.setSessionAttributes(persistentAttributes);`

**Error**

Row 530, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

530

`}`

**Error**

Row 531, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 531, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

531

`}`

532

`};`

533

534

535

`const SaveAttributesResponseInterceptor = {`

**Error**

Row 536, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

536

`async process(handlerInput, response) {`

**Error**

Row 537, Column 1: "This line has a length of 102. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 537, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 537, Column 9: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

537

`if(!response) return; // avoid intercepting calls that have no outgoing response due to errors`

**Error**

Row 538, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

538

`const {attributesManager, requestEnvelope} = handlerInput;`

**Error**

Row 539, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

539

`const sessionAttributes = attributesManager.getSessionAttributes();`

**Error**

Row 540, Column 1: "This line has a length of 144. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 540, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 540, Column 72: "Strings must use singlequote." [quotes](http://eslint.org/docs/rules/quotes)

**Error**

Row 540, Column 121: "Expected space or tab after '//' in comment." [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

540

`const shouldEndSession = (typeof response.shouldEndSession === "undefined" ? true : response.shouldEndSession); //is this a session end?`

**Error**

Row 541, Column 1: "This line has a length of 122. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

**Error**

Row 541, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 541, Column 9: "Expected space(s) after "if"." [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

541

`if(shouldEndSession || requestEnvelope.request.type === 'SessionEndedRequest') { // skill was stopped or timed out`

**Error**

Row 542, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

542

`attributesManager.setPersistentAttributes(sessionAttributes);`

**Error**

Row 543, Column 1: "Expected indentation of 6 spaces but found 12." [indent](http://eslint.org/docs/rules/indent)

543

`await attributesManager.savePersistentAttributes();`

**Error**

Row 544, Column 1: "Expected indentation of 4 spaces but found 8." [indent](http://eslint.org/docs/rules/indent)

544

`}`

**Error**

Row 545, Column 1: "Expected indentation of 2 spaces but found 4." [indent](http://eslint.org/docs/rules/indent)

**Error**

Row 545, Column 6: "Missing trailing comma." [comma-dangle](http://eslint.org/docs/rules/comma-dangle)

545

`}`

546

`};`

547

548

**Error**

Row 549, Column 1: "More than 2 blank lines not allowed." [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines)

549

550

**Error**

Row 551, Column 1: "This line has a length of 92. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

551

`// The SkillBuilder acts as the entry point for your skill, routing all request and response`

**Error**

Row 552, Column 1: "This line has a length of 84. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

552

`// payloads to the handlers above. Make sure any new handlers or interceptors you've`

**Error**

Row 553, Column 1: "This line has a length of 83. Maximum allowed is 80." [max-len](http://eslint.org/docs/rules/max-len)

553

`// defined are included below. The order matters - they're processed top to bottom.`

554

`exports.handler = Alexa.SkillBuilders.custom()`

555

`.addRequestHandlers(`

556

`LaunchRequestHandler,`

557

`RegisterNameIntentHandler,`

558

`RegisterAgeIntentHandler,`

559

`CloseQuestionIntentHandler,`

560

`OpenQuestionIntentHandler,`

561

`AnswerIntent,`

562

`RepeatIntent,`

563

`YesHandler,`

564

`NoHandler,`

565

`HelpIntentHandler,`

566

`CancelAndStopIntentHandler,`

567

`SessionEndedRequestHandler,`

568

`IntentReflectorHandler)`

**Error**

Row 569, Column 1: "Expected indentation of 4 spaces but found 3." [indent](http://eslint.org/docs/rules/indent)

569

`.addRequestInterceptors(LoadAttributesRequestInterceptor)`

570

`.addResponseInterceptors(SaveAttributesResponseInterceptor)`

571

`.addErrorHandlers(ErrorHandler)`

572

`.withPersistenceAdapter(persistenceAdapter)`

573

`.lambda();`

**Error**

Row 574, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

574

**Error**

Row 575, Column 1: "Trailing spaces not allowed." [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

**Error**

Row 575, Column 3: "Newline required at end of file but not found." [eol-last](http://eslint.org/docs/rules/eol-last)

575

var lintResults = document.querySelectorAll('tr.lint-result'), filters = document.querySelectorAll('input\[name="filters"\]'), tabs = document.querySelectorAll('.nav-tabs > li > button'); // helper functions function hideElement(element) { if (!element.className.includes('hidden')) { element.className = element.className + ' hidden'; } } function toggleDisplay(element) { element.className = element.className.includes('hidden') ? element.className.replace(' hidden', '') : element.className + ' hidden'; } // accordion for(var i = 0; i < lintResults.length; i++) { var result = lintResults\[i\]; result.addEventListener('click', handleResultClick); result.addEventListener('keydown', function onKeydown(event) { if (event.which === 13) { handleResultClick.apply(this); } }); } function handleResultClick() { if (!this.className.includes('bg-success')) { toggleAccordion.apply(this); } // TODO: Comment this back in when I can support it in example page // window.location.href = '#' + this.getAttribute('id'); } function toggleAccordion() { var resultDetails = document.getElementsByClassName(this.getAttribute('data-group')); this.className = this.className.includes('open') ? this.className.replace(' open', '') : this.className + ' open'; toggleDisplay(resultDetails\[0\]); } // filter for(var j = 0; j < filters.length; j++) { filters\[j\].addEventListener('change', filterResults); } function filterResults() { var filterValue = document.querySelector('input\[name="filters"\]:checked').value; for(var i = 0; i < lintResults.length; i++) { var result = lintResults\[i\]; if (result.className.includes(filterValue)) { result.className = result.className.includes('hidden') ? result.className.replace(' hidden', '') : result.className; } else { hideElement(result); } if (result.className.includes('hidden') && result.className.includes('open')) { toggleAccordion.apply(result); } } } // tabs for(var k = 0; k < tabs.length; k++) { tabs\[k\].addEventListener('click', activateTab); } function activateTab() { var currentTabs = document.querySelectorAll(this.getAttribute('data-parent') + ' .nav-tabs > li'), tabPanes = document.querySelectorAll(this.getAttribute('data-parent') + ' .tab-pane'), tabContent = document.getElementById(this.getAttribute('data-content')); for(var i = 0; i < currentTabs.length; i++) { disableTabs(currentTabs\[i\]); } for(var j = 0; j < tabPanes.length; j++) { hideElement(tabPanes\[j\]); } this.parentNode.className = 'active'; toggleDisplay(tabContent); } function disableTabs(tab) { tab.className = ''; }
