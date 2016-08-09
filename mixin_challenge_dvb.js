var userProfile = {
    name: 'Daniel',
    address: 'Street Drive',
    city: 'Charlotte',
    state: 'NC',
    zipcode: 28277,
    avatar: {}
};

function getProfileUpdate(original){
    original.name = 'Bowman';
    original.address = 'Avenue';
    original.zipcode = 28213;
    return original;
}


function updateProfile(updated) {
    for (var i in userProfile) {
        // only copy if not already present
        if (!(i in updated)) {
            updated[i] = userProfile[i];
        }
    }

    return updated;
}

console.log(updateProfile(getProfileUpdate(userProfile)));