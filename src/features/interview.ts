import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type Interview = {
  progress: {
    steps: string[] // the steps that can be filled
    currentStep: number // the step that should logically be pending to be filled
    visibleStep: number // the step that is currently visible

    incrementCurrentStep: () => void
    decrementCurrentStep: () => void
    setCurrentStep: (step: number) => void

    incrementVisibleStep: () => void
    decrementVisibleStep: () => void
    setVisibleStep: (step: number) => void
  }
  data: {
    livedInNevadaForAtLeast6Weeks?: boolean
    propertyOrAssetsToDivide?: boolean
    agreeOnHowToDivideProperty?: boolean
    agreeOnDivisionOfAssets?: boolean
    agreeOnDivisionOfDepts?: boolean
    agreeOnFinancialSupport?: boolean

    setLivedInNevadaForAtLeast6Weeks: (value: boolean) => void
    setPropertyOrAssetsToDivide: (value: boolean) => void
    setAgreeOnHowToDivideProperty: (value: boolean) => void
    setAgreeOnDivisionOfAssets: (value: boolean) => void
    setAgreeOnDivisionOfDepts: (value: boolean) => void
    setAgreeOnFinancialSupport: (value: boolean) => void
  }
}

const useInterview = create<Interview>()(immer((set, get) => ({
  progress: {
    steps: ["Eligibility", "Finances", "Assets", "Children", "Harm", "Proceed"],
    currentStep: 0,
    visibleStep: 0,

    incrementCurrentStep: () => set(state => {
      state.progress.currentStep = state.progress.currentStep + 1
      state.progress.visibleStep = state.progress.currentStep
    }),

    decrementCurrentStep: () => set(state => {
      state.progress.currentStep = state.progress.currentStep - 1
      state.progress.visibleStep = state.progress.currentStep
    }),

    setCurrentStep: step => set(state => {
      state.progress.currentStep = step
      state.progress.visibleStep = step
    }),

    incrementVisibleStep: () => set(state => {
      state.progress.visibleStep = state.progress.currentStep + 1
    }),

    decrementVisibleStep: () => set(state => {
      state.progress.visibleStep = state.progress.currentStep - 1
    }),

    setVisibleStep: step => set(state => {
      // user cannot display a step that comes after the current step
      if (step > state.progress.currentStep) return
      state.progress.visibleStep = step
    }),
  },
  data: {
    livedInNevadaForAtLeast6Weeks: undefined,
    propertyOrAssetsToDivide: undefined,
    agreeOnHowToDivideProperty: undefined,
    agreeOnDivisionOfAssets: undefined,
    agreeOnDivisionOfDepts: undefined,
    agreeOnFinancialSupport: undefined,

    setLivedInNevadaForAtLeast6Weeks: value => set(state => {
      state.data.livedInNevadaForAtLeast6Weeks = value
    }),

    setPropertyOrAssetsToDivide: value => set(state => {
      state.data.propertyOrAssetsToDivide = value
    }),

    setAgreeOnHowToDivideProperty: value => set(state => {
      state.data.agreeOnHowToDivideProperty = value
    }),

    setAgreeOnDivisionOfAssets: value => set(state => {
      state.data.agreeOnDivisionOfAssets = value
    }),

    setAgreeOnDivisionOfDepts: value => set(state => {
      state.data.agreeOnDivisionOfDepts = value
    }),

    setAgreeOnFinancialSupport: value => set(state => {
      state.data.agreeOnFinancialSupport = value
    }),
  },
})))

export default useInterview
