const User = require('./Users');
const Project = require('./Projects');
const Task = require('./Tasks');

// module associations
User.hasMany(Project, {
    foreignKey: 'user_id'
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

Project.hasMany(Task, {
    foreignKey: 'project_id'
});

Task.belongsTo(Project, {
    foreignKey: 'project_id'
});

User.hasMany(Task, {
    foreignKey: 'user_id'
});

Task.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Project, Task };