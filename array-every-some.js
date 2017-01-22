function checkUsersValid(goodUsers) {
    return areAllUsersValid;
        
    function areAllUsersValid(submittedUsers) {
        var result = submittedUsers.every(function(submittedUser){
            var availabilityOfSubmittedUser = goodUsers.some(function(goodUser){
                return goodUser == submittedUser;
            });
            return availabilityOfSubmittedUser;
        });
        return result;
    }
}

module.exports = checkUsersValid;