cube(`UsersPickupinfo`, {
  sql: `SELECT * FROM public.users_pickupinfo`,

  joins: {
    UsersCustomuser:{
      relationship: `hasOne`,
      sql: `${UsersPickupinfo}.user_id = ${UsersCustomuser}.id`
    },
    UsersAddress:{
      relationship: `hasMany`,
      sql: `${UsersPickupinfo}.user_id = ${UsersAddress}.user_id`
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    },
    totalLbs:{
      sql: `lbs`,
      type: `sum`,
      drillMembers:['lbs']
    },
    totalMoneyEarned: {
  sql: `ROUND(${totalLbs} * 0.2)`,
  type: `number`
}
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    binType: {
      sql: `bin_type`,
      type: `string`
    },
    lbs:{
      sql: `lbs`,
      type: `number`
    },
    instructions: {
      sql: `instructions`,
      type: `string`
    }
  }
});
