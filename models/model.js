const owner = require("./owner");
const user = require("./user");
const saloon = require("./saloon");
const barber = require("./barber");
const barberRating = require("./barberRating");
const saloonRating = require("./saloonRating");


// one to Many relationship
owner.hasMany(saloon,{
    foreignKey: 'owner_id'
})
saloon.belongsTo(owner,{
    foreignKey: 'owner_id'
});

saloon.hasMany(barber,{
    foreignKey:'saloon_id'
});
barber.belongsTo(saloon,{
    foreignKey: 'saloon_id'
})
saloon.hasMany(saloonRating,{
    foreignKey:'saloon_id'
});
saloonRating.belongsTo(saloon,{
    foreignKey: 'saloon_id'
})
user.hasMany(saloonRating,{
    foreignKey:'user_id'
});
saloonRating.belongsTo(user,{
    foreignKey: 'user_id'
})
barber.hasMany(barberRating,{
    foreignKey:'barber_id'
});
barberRating.belongsTo(barber,{
    foreignKey: 'barber_id'
})
user.hasMany(barberRating,{
    foreignKey:'user_id'
});
barberRating.belongsTo(user,{
    foreignKey: 'user_id'
})
module.exports = {barber, barberRating, owner,saloon,saloonRating,user}
