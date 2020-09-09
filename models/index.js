const User = require('./Users');
const Project = require('./Projects');

// module associations
User.hasMany(Project, {
    foreignKey: 'user_id'
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Project };