function checkUsersValid(goodUsers) {
    return function areAllUsersValid(submittedUsers) {
        var result = submittedUsers.every(checkSubmittedUsers);
            
        function checkSubmittedUsers(submittedUser){
            var availabilityOfSubmittedUser = goodUsers.some(function(goodUser){
                return goodUser === submittedUser;
            });
            return availabilityOfSubmittedUser;
        };
        return result;
    }
}

module.exports = checkUsersValid;