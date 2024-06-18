
export const calculateAge = (birthDate) => {
    const today = new Date();
    const dob = new Date(birthDate);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
};



const getNextBirthday = (birthDate, today) => {
    const dob = new Date(birthDate);
    const currentYear = today.getFullYear();
    const birthMonth = dob.getMonth();
    const birthDay = dob.getDate();
    const nextBirthday = new Date(currentYear, birthMonth, birthDay);

    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    return nextBirthday;
};

export const sortByClosestBirthday = (members) => {
    const today = new Date();
    return members.sort((a, b) => {
        const nextBirthdayA = getNextBirthday(a.birthDate, today);
        const nextBirthdayB = getNextBirthday(b.birthDate, today);
        return nextBirthdayA.getTime() - nextBirthdayB.getTime();
    });
};