/**
 * User
 *
 * @module      :: Model
 * @description :: A representation of a user in the DB.
 *
 */

module.exports = {
  adapter: 'memory',
  
  attributes: {
    username: {
      type: 'string',
      required: true
    },
    
    password: {
      type: 'string',
      minLength: 6,
      required: true,
    },
    
    age: {
      type: 'INTEGER',
      max: 150,
      required: true
    },
    
    birthDate: 'DATE',
    phoneNumber: {
      type: 'STRING',
      defaultsTo: '111-222-3333'
    },
    
    email: {
      type: 'email', // Email type will get validated by the ORM
      required: true
    },
    
    // Lifecycle Callbacks
    beforeCreate: function(values, next) {
      bcrypt.hash(values.password, 10, function(err, hash) {
        if(err) return next(err);
        values.password = hash;
        next();
      });
    }
  }
};
