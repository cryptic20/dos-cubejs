cube(`UsersCustomuser`, {
  sql: `SELECT * FROM public.users_customuser`,

  joins: {
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, firstName, lastName, username, dateJoined]
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    isActive: {
      sql: `is_active`,
      type: `string`
    },

    firstName: {
      sql: `first_name`,
      type: `string`
    },

    lastName: {
      sql: `last_name`,
      type: `string`
    },

    email: {
      sql: `email`,
      type: `string`
    },

    phoneNumber: {
      sql: `phone_number`,
      type: `string`
    },

    type: {
      sql: `type`,
      type: `string`
    },
    username: {
      sql: `username`,
      type: `string`
    },
    lastLogin: {
      sql: `last_login`,
      type: `time`
    },

    dateJoined: {
      sql: `date_joined`,
      type: `time`
    }
  }
});
