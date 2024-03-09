import { create } from "zustand"

type Interview = {
  progress: {
    steps: string[] // the steps that can be filled
    currentStep: number // the step that should logically be pending to be filled
    activeStep: number // the step that is currently active and displayed
    gotoNext: () => void
    gotoPrevious: () => void
    gotoStep: (step: number) => void
    getStepName: (step: number) => string
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

const useInterview = create<Interview>()((set, get) => ({
  progress: {
    steps: ["Eligibility", "Finances", "Assets", "Children", "Harm", "Proceed"],
    currentStep: 0,
    activeStep: 0,
    gotoNext: () => set((state) => ({ progress: { ...state.progress, currentStep: state.progress.currentStep + 1 } })),
    gotoPrevious: () => set((state) => ({ progress: { ...state.progress, currentStep: state.progress.currentStep - 1 } })),
    gotoStep: (step) => set((state) => ({ progress: { ...state.progress, currentStep: step } })),
    getStepName: (step) => get().progress.steps[step],
  },
  data: {
    livedInNevadaForAtLeast6Weeks: undefined,
    propertyOrAssetsToDivide: undefined,
    agreeOnHowToDivideProperty: undefined,
    agreeOnDivisionOfAssets: undefined,
    agreeOnDivisionOfDepts: undefined,
    agreeOnFinancialSupport: undefined,

    setLivedInNevadaForAtLeast6Weeks: (value) => set((state) => ({ data: { ...state.data, livedInNevadaForAtLeast6Weeks: value } })),
    setPropertyOrAssetsToDivide: (value) => set((state) => ({ data: { ...state.data, propertyOrAssetsToDivide: value } })),
    setAgreeOnHowToDivideProperty: (value) => set((state) => ({ data: { ...state.data, agreeOnHowToDivideProperty: value } })),
    setAgreeOnDivisionOfAssets: (value) => set((state) => ({ data: { ...state.data, agreeOnDivisionOfAssets: value } })),
    setAgreeOnDivisionOfDepts: (value) => set((state) => ({ data: { ...state.data, agreeOnDivisionOfDepts: value } })),
    setAgreeOnFinancialSupport: (value) => set((state) => ({ data: { ...state.data, agreeOnFinancialSupport: value } })),
  },
}))

export default useInterview
