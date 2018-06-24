let statuses = 
[
    {
        status: 2,
        name: 'name1'
    },
    {
        status: 4,
        name: 'name2'
    },
    {
        status: 3,
        name: 'name3'
    }
]

for (let person of statuses) {
    let status = "";
    if (person.status === 1) {
        status = "Alive";
    }
    else if (person.status === 2) {
        status = "Zombie";
    }
    else if (person.status === 3) {
        status = "Dead";
    }
    else {
        status = "Unknown";
    }       
    console.log(person.name + ' has status of ' + status);
}