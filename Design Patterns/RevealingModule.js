var personModule = (function() {
    var privateVar = "",
        publicVar = "";

    function publicGetName() {
        return "Name:" + privateVar;
    }

    function publicSetName(strName) {
        privateVar = strName;
    }

    // Reveal public pointers to
    // private functions and properties 
    return {
        setName: publicSetName,
        getName: publicGetName
    };
})();
// before any name is set
console.log(personModule.getName()); // returns 'Name: '; 
personModule.setName("Sammie Bae");
console.log(personModule.getName()); // 'Name: Sammie Bae';