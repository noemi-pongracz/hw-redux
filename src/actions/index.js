export const addUser = (user) => {
    return {
      type: 'ADD_PERSON',
      data: user
    }
  }
  
export const editUser = (user) => {
    return {
      type: 'EDIT_PERSON',
      data: user
    }
}

export const deleteUser = (user) => {
    return {
      type: 'DELETE_PERSON',
      data: user
    }
}
  
  
