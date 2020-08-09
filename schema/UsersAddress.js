cube(`UsersAddress`, {
  sql: `SELECT * FROM public.users_address`,

  joins: {
    
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, city, country]
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    city: {
      sql: `city`,
      type: `string`
    },

    state: {
      sql: `state`,
      type: `string`
    },

    addressLine1: {
      sql: `address_line1`,
      type: `string`
    },

    addressLine2: {
      sql: `address_line2`,
      type: `string`
    },

    country: {
      sql: `country`,
      type: `string`
    },

    zipCode: {
      sql: `zip_code`,
      type: `string`
    }
  }
});
