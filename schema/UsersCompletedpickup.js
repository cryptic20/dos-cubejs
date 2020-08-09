cube(`UsersCompletedpickup`, {
  sql: `SELECT * FROM public.users_completedpickup`,

  joins: {
    UsersPickupinfo: {
         relationship: `hasMany`,
         sql: `${UsersCompletedpickup}.pick_up_info_id = ${UsersPickupinfo}.id`
       },
    UsersCustomuser:{
      relationship: `hasOne`,
      sql: `${UsersCompletedpickup}.user_id = ${UsersCustomuser}.id`
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, pickUpDate]
    }
  },
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    userId:{
      sql: `user_id`,
      type: `number`,
    },
    pickUpInfo: {
      sql: `pick_up_info_id`,
      type: `number`
    },
    pickUpDate: {
      sql: `pick_up_date`,
      type: `time`
    }
  }
});
