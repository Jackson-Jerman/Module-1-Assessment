/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = ("Git is a tool used for code management. It is free and open -source  version control system. Git is used to track changes to source code which enables multiple developers to work on the same project.");
console.log(gitDefinition);
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = ("GitHub is as code hosting platfrom for version control and collobration. It lets you work with other from anywhere.");
console.log(gitHubDefinition);
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = ("The command (git init) allows you to create empty GIt repository. Most other git commands are not avaiable outside of th initaialzed repository. So this is the first command you will run in a project.")
console.log(init)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = ("The command (git clone) allows you to point to an existing repo and make a clone or copy of that repo at a new directory. Which basically means that it copys the existing Git respository and place it in new file path location. ")
console.log(clone)
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let statuS = ("The command (git status) displays the state of the working directory and staging area. It lets you see which changes have been made, which haven't, and which files aren't being tracked by Git.")
console.log(statuS)
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = ("The command (git add . ) adds changes to the working direectory to the stgaing area.")
console.log(add)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = ('The command (git commit -m "whatever name you give it") it a commits a snapshot of the repe at a specific point in time.')
console.log(commit)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = ("The command (git push) is used to upload local repository content to a remote repository. Which when we do git push it push it up to GitHub ")
console.log(push)
