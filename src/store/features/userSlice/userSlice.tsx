import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
  created_at: string
  email: string
  id: number
  relationships: {
    wallets: []
  }
  token: string
  updated_at: string
}

const initialState: IUserState = {
  created_at: '',
  email: '',
  id: 0,
  relationships: {
    wallets: []
  },
  token: '',
  updated_at: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      return action.payload
    }
  }
})

// Action creators are generated for each case reducer function
// export const {} = faqSlice.actions

export default userSlice.reducer
