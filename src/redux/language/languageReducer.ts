import { ADD_LANGUAGE, CHANGE_LANGUAGE, LanguageActionTypes } from './languageActions';

export interface LanguageState {
  language: "en" | "zh"
  languageList: { name: string; code: string }[]
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
}

// reducer描述的就是一个以旧换新的过程。
export default (state = defaultState, action: LanguageActionTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      const newState: LanguageState = { ...state, language: action.payload }
      return newState
    }
    case ADD_LANGUAGE: {
      const newState: LanguageState = {
        ...state,
        languageList: [...state.languageList, action.payload],
      }
      return newState
    }
    default:
      return state
  }
}
