const findTheOldest = function(people) {
    
    const ordered = people.map(person => {
        if (!person.yearOfDeath) {
            const currentYear = new Date().getFullYear();
            return { ...person, yearOfDeath: currentYear };
        }
        return person;
    }).sort((a, b) => {
        const ageA = (a.yearOfDeath - a.yearOfBirth);
        const ageB = (b.yearOfDeath - b.yearOfBirth);
        return ageA - ageB;
    });
    
    return ordered[ordered.length - 1];
};





// Do not edit below this line
module.exports = findTheOldest;
