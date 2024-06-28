var contacts = [
    {
        "FirstName" : "John",
        "LastName" : "Thomas",
        "Number" : 9874561230,
        "Likes" : ["Football","Boxing","Gaming"]
    },
    {
        "FirstName" : "Ann",
        "LastName" : "James",
        "Number" : 7874561230,
        "Likes" : ["Movies","Talking","Studying"]   
    },
    {
        "FirstName" : "Jasmin",
        "LastName" : "Alexander",
        "Number" : 8874361230,
        "Likes" : ["Movies","Reading","Sleeping"]
    },
    {
        "FirstName" : "Ben",
        "LastName" : "George",
        "Number" : 9774361230,
        "Likes" : ["Movies","Reading","Gaming"]
    }
]

function lookup(name,prop)
{
    for (var i=0; i < contacts.length; i++)
    {
        if (contacts[i].FirstName === name)
        {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contacts";
}

console.log(lookup("John","Likes"));