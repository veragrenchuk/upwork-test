export type ErrorStateKeys = "login";

export interface ErrorState {
  message: string;
  isError: boolean;
}

export type ErrorsState = {
  [K in ErrorStateKeys]: ErrorState;
};
